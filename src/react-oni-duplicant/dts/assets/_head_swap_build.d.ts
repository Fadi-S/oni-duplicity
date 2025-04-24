declare const data: {
    "version": number;
    "frameCount": number;
    "name": string;
    "symbols": {
        "hash": number;
        "path": number;
        "colourChannel": number;
        "flags": number;
        "frames": {
            "frameNum": number;
            "duration": number;
            "imageIndex": number;
            "origin": {
                "x": number;
                "y": number;
            };
            "width": number;
            "height": number;
            "uvMin": {
                "x": number;
                "y": number;
            };
            "uvMax": {
                "x": number;
                "y": number;
            };
        }[];
        "decodedName": string;
    }[];
    "hashTable": {
        "hash": number;
        "value": string;
    }[];
};
export default data;
