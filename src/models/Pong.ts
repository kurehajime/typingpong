import { Point } from "./Point";
import { Setting } from "./Setting";

export class Pong {
    public ball: Point;
    public vec: Point;
    public setting: Setting;

    public constructor(setting: Setting, ball: Point, vec: Point) {
        this.ball = ball;
        this.vec = vec;
        this.setting = setting;
    }

    public clone(): Pong {
        return new Pong(this.setting, this.ball, this.vec);
    }

    public static tick(prev: Pong): Pong {
        const next = prev.clone();

        // 移動
        next.ball = Pong.move(next.ball, next.vec);
        // 壁で跳ね返る
        next.vec = Pong.bounceWall(next.setting, next.ball, next.vec);

        // 摩擦
        next.vec = Pong.friction(next.setting, next.vec);

        return next;
    }

    private static move(ball: Point, vec: Point): Point {
        return {
            x: ball.x + vec.x,
            y: ball.y + vec.y,
        }
    }

    private static friction(setting: Setting, vec: Point): Point {
        const nextVec = { ...vec }
        const speed = Math.sqrt(nextVec.x * nextVec.x + nextVec.y * nextVec.y);
        if (speed > setting.minVec) {
            nextVec.x = nextVec.x * (1 - setting.friction);
            nextVec.y = nextVec.y * (1 - setting.friction);
        }
        return nextVec;
    }

    private static bounceWall(setting: Setting, ball: Point, vec: Point): Point {
        const nextVec = { ...vec }
        let bounce = false;
        if (ball.x < 0 || ball.x > setting.width) {
            nextVec.x = -nextVec.x;
            bounce = true;
        } else if (ball.y < 0 || ball.y > setting.height) {
            nextVec.y = -nextVec.y;
            bounce = true;
        }
        if (bounce) {
            const speed = Math.sqrt(nextVec.x * nextVec.x + nextVec.y * nextVec.y);
            if (speed < setting.bounceVec) {
                nextVec.x = nextVec.x * (setting.bounceVec / speed);
                nextVec.y = nextVec.y * (setting.bounceVec / speed);
            }
        }
        return nextVec;
    }
}