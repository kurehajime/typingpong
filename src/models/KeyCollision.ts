import { Input } from "./Input";
import { Point } from "./Point";
import { Setting } from "./Setting";
import { Word } from "./Word";

export class KeyCollision {
    static isCollision(setting: Setting, words: Word[], inputs: Input[], point: Point): boolean {
        for (let i = 0; i < words.length; i++) {
            const word = words[i]
            const input = inputs[i]
            if (KeyCollision.isCollisionWord(setting, word, input, point)) {
                return true
            }
        }
        return false
    }

    private static isCollisionWord(setting: Setting, word: Word, input: Input, point: Point): boolean {
        if (!input.completed) {
            return false
        }
        return KeyCollision.hit(setting, word, point)
    }
    private static hit(setting: Setting, word: Word, point: Point): boolean {
        const w = setting.width / setting.col
        const h = setting.height / setting.row
        const x = word.x * w
        const y = (word.y + setting.baseRow) * h
        const width = word.word.length * w

        if (point.x < x || point.x > x + width) {
            return false
        }
        if (point.y < y || point.y > y + h) {
            return false
        }
        return true
    }

}