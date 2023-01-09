import { Word } from "./Word";
import word_english2048 from '../assets/english2048.json'
export class WordBuilder {
    static buildWord(word: string, col: number): Word[] {
        const words: Word[] = []


        return words
    }

    static pickWord(count: number): string[] {
        const words: string[] = []
        for (let i = 0; i < count; i++) {
            const word = word_english2048[Math.floor(Math.random() * word_english2048.length)]
            words.push(word)
        }
        return words;
    }
}