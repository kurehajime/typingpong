import { Point } from "./Point";

export class Pong {
    public ball: Point;
    public vec: Point;
    static readonly width = 500;
    static readonly height = 600;

    public constructor(ball: Point, vec: Point) {
        this.ball = ball;
        this.vec = vec;
    }

    public clone(): Pong {
        return new Pong(this.ball, this.vec);
    }

    public static tick(prev: Pong): Pong {
        const next = prev.clone();

        // 移動
        next.ball = Pong.move(next.ball, next.vec);
        // 壁で跳ね返る
        next.vec = Pong.bounceWall(next.ball, next.vec);

        return next;
    }

    private static move(ball: Point, vec: Point): Point {
        return {
            x: ball.x + vec.x,
            y: ball.y + vec.y,
        }
    }

    private static bounceWall(ball: Point, vec: Point): Point {
        const nextVec = { ...vec }
        if (ball.x < 0 || ball.x > Pong.width) {
            nextVec.x = -nextVec.x;
        } else if (ball.y < 0 || ball.y > Pong.height) {
            nextVec.y = -nextVec.y;
        }
        return nextVec;
    }
}