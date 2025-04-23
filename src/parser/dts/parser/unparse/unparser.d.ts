import { DataWriter } from "../../binary-serializer";
export type UnparseIterator = Generator<any, any, any>;
export type UnparseInterceptor = (value: any) => any;
export declare function unparse<T>(writer: DataWriter, unparser: UnparseIterator, interceptor?: UnparseInterceptor): T;
