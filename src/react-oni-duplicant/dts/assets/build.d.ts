export interface Vector2 {
    x: number;
    y: number;
}
export interface KAnimBuildSymbolFrame {
    frameNum: number;
    duration: number;
    imageIndex: number;
    origin: Vector2;
    width: number;
    height: number;
    uvMin: Vector2;
    uvMax: Vector2;
}
export declare function getSymbolFrame(symbolName: string, frameNum: number, data: any): KAnimBuildSymbolFrame | null;
