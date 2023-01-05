import { Point } from "./Point";

export type Setting = {
    width: number;
    height: number;
    startPoint: Point;
    startVec: Point;
    bounceVec: number;
    minVec: number;
    friction: number
}