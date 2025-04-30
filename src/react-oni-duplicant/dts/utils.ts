import {DuplicantDirection} from "@/react-oni-duplicant/dts/types";

export function pad(num: number, size: number): string {
    let str = num.toString();
    while (str.length < size) {
        str = '0' + str;
    }
    return str;
}

export function requireShape(shape: string, ordinal: number, direction: DuplicantDirection): string {
    const shapeName = `${shape}_${pad(ordinal, 3)}`;

    const dir = {
        right: 0,
        forward: 1,
        away: 2,
    }[direction];

    return `/src/assets/duplicant/${shape}/${shapeName}/${shapeName}_${dir}`;
}

export function requireHead(ordinal: number, direction: DuplicantDirection) : string {
    return requireShape("headshape", ordinal, direction);
}

export function requireEyes(ordinal: number, direction: DuplicantDirection) : string {
    return requireShape("eyes", ordinal, direction);
}

export function requireHair(ordinal: number, direction: DuplicantDirection) : string {
    return requireShape("hair", ordinal, direction);
}

export function requireBody(ordinal: number, direction: DuplicantDirection) : string {
    return requireShape("body", ordinal, direction);
}