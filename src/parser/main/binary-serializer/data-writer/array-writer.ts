import { TextEncoder } from "text-encoding";

import { Vector3, Quaternion } from "@/parser/main";

import { LongNum } from "../types";

import { DataWriter } from "./interfaces";

/**
 * Increase buffer by 1 mb each time we run out of length.
 */
// TODO: Explore this to find a good increment size.
const BUFFER_INCREASE = 1048576;

export class ArrayDataWriter implements DataWriter {
  private _byteOffset = 0;
  private _buffer: Uint8Array;
  private _view: DataView;
  private _textEncoder = new TextEncoder("utf-8");

  constructor() {
    this._buffer = new Uint8Array(BUFFER_INCREASE);
    this._view = new DataView(this._buffer.buffer);
  }

  get position(): number {
    return this._byteOffset;
  }

  writeByte(value: number): void {
    this._ensureCanWrite(1);
    this._view.setUint8(this._byteOffset, value);
    this._byteOffset += 1;
  }

  writeSByte(value: number): void {
    this._ensureCanWrite(1);
    this._view.setInt8(this._byteOffset, value);
    this._byteOffset += 1;
  }

  writeBytes(value: ArrayBuffer | ArrayBufferView): void {
    this._ensureCanWrite(value.byteLength);

    if (value instanceof Uint8Array) {
      this._buffer.set(value, this._byteOffset);
    } else if (ArrayBuffer.isView(value)) {
      // Some other type of view.  Treat it as a byte array.
      this._buffer.set(
        new Uint8Array(value.buffer, value.byteOffset, value.byteLength),
        this._byteOffset
      );
    } else {
      this._buffer.set(new Uint8Array(value), this._byteOffset);
    }

    this._byteOffset += value.byteLength;
  }

  writeUInt16(value: number): void {
    this._ensureCanWrite(2);
    this._view.setUint16(this._byteOffset, value, true);
    this._byteOffset += 2;
  }

  writeInt16(value: number): void {
    this._ensureCanWrite(2);
    this._view.setInt16(this._byteOffset, value, true);
    this._byteOffset += 2;
  }

  writeUInt32(value: number): void {
    this._ensureCanWrite(4);
    this._view.setUint32(this._byteOffset, value, true);
    this._byteOffset += 4;
  }

  writeInt32(value: number): void {
    this._ensureCanWrite(4);
    this._view.setUint32(this._byteOffset, value, true);
    this._byteOffset += 4;
  }

  replaceInt32(value: number, position: number): void {
    this._view.setInt32(position, value, true);
  }

  writeUInt64(value: LongNum): void {
    // little-endian, lower comes first.
    this.writeInt32(value.lower);
    this.writeInt32(value.upper);
  }

  writeInt64(value: LongNum): void {
    // little-endian, lower comes first.
    this.writeInt32(value.lower);
    this.writeInt32(value.upper);
  }

  writeSingle(value: number): void {
    this._ensureCanWrite(4);
    const val = this._view.setFloat32(this._byteOffset, value, true);
    this._byteOffset += 4;
    return val;
  }

  writeDouble(value: number): void {
    this._ensureCanWrite(8);
    const val = this._view.setFloat64(this._byteOffset, value, true);
    this._byteOffset += 8;
    return val;
  }

  writeChars(value: string): void {
    // Do not encode here, we want pure unicode values.
    //  These values are not suitable for multi-byte characters.
    this._ensureCanWrite(value.length);
    for (let i = 0; i < value.length; i++) {
      this._view.setUint8(this._byteOffset + i, value.charCodeAt(i));
    }
    this._byteOffset += value.length;
  }

  writeKleiString(value: string | null): void {
    if (value === null) {
      this.writeInt32(-1);
    } else if (value.length === 0) {
      this.writeInt32(0);
    } else {
      // We cannot use writeChars here, as
      //  encodings can write multi-byte data.
      const encoded = this._textEncoder.encode(value);
      this.writeInt32(encoded.byteLength);
      this.writeBytes(encoded);
    }
  }

  writeVector3(value: Vector3): void {
    this.writeSingle(value.x);
    this.writeSingle(value.y);
    this.writeSingle(value.z);
  }

  writeQuaternion(value: Quaternion): void {
    this.writeSingle(value.x);
    this.writeSingle(value.y);
    this.writeSingle(value.z);
    this.writeSingle(value.w);
  }

  getBytes(): ArrayBuffer {
    const buffer = new ArrayBuffer(this._byteOffset);
    new Uint8Array(buffer).set(this.getBytesView());
    return buffer;
  }

  getBytesView(): Uint8Array {
    return new Uint8Array(this._buffer.buffer, 0, this._byteOffset);
  }

  /**
   * Ensure there is enough room in the buffer to write
   * the specified amount of bytes.
   * @param length The number of bytes intending to be written.
   */
  private _ensureCanWrite(length: number) {
    const increaseBy = this._byteOffset + length - this._buffer.length;
    if (increaseBy > 0) {
      this._increaseBuffer(increaseBy);
    }
  }

  private _increaseBuffer(size: number) {
    let increaseSize = BUFFER_INCREASE;
    if (increaseSize < size) {
      increaseSize += size;
    }

    const newLength = this._buffer.length + increaseSize;
    const newBuffer = new Uint8Array(newLength);
    newBuffer.set(this._buffer, 0);
    this._buffer = newBuffer;
    this._view = new DataView(this._buffer.buffer);
  }
}
