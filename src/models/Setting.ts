import { Point } from "./Point";

export type Setting = {
    width: number;
    height: number;
    startPoint: Point;
    startVec: Point;
    bounceVec: number;
    bounceKeyVec: number,
    minVec: number;
    friction: number
    col: number
    row: number
    baseRow: number
}