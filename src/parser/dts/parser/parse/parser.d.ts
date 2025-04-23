import { DataReader } from "../../binary-serializer";
export type ParseIterator<T> = Generator<any, T, any>;
export type ParseInterceptor = (value: any) => any;
export declare function parse<T>(reader: DataReader, readParser: ParseIterator<T>, interceptor?: ParseInterceptor): T;
