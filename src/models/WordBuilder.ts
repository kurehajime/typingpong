import { Word } from "./Word";
import word_english2048 from '../assets/english2048.json'
import { Random } from "./Random";
export class WordBuilder {
    static buildWord(word: string, col: number, count: number): Word[] {
        const words: Word[] = []
        const wordStr = WordBuilder.pickWord(count);
        const fixedWordStr = WordBuilder.fixWord(wordStr, col)
        for (let i = 0; i < count; i++) {
            const word = fixedWordStr[i].replaceAll(' ', '').split('')
            const x = fixedWordStr[i].match(/\s*/g)![0].length
            words.push({
                word: word,
                x: x,
                y: i,
            })
        }
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

    static fixWord(words: string[], col: number): string[] {
        const fixedWords: string[] = words
        const seed = words[0][0].codePointAt(0)
        const random = new Random(seed)
        fixedWords[0] = words[0].padStart(col, ' ')
        fixedWords[fixedWords.length - 1] = words[words.length - 1].padEnd(col, ' ')
        for (let i = 1; i < fixedWords.length - 1; i++) {
            const sub = col - fixedWords[i].length
            const r = Math.floor(random.random() * sub)
            if (r % 2 === 0) {
                fixedWords[i] = words[i].padStart(r, ' ')
            } else {
                fixedWords[i] = words[i].padEnd(r, ' ')
            }
        }
        return fixedWords;
    }
}