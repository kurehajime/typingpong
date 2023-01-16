import { Word } from "./Word";
import word_english2048 from '../assets/english2048.json'
import { Random } from "./Random";
export class WordBuilder {
    static buildWord(col: number, count: number, seed: number | null = null): Word[] {
        const words: Word[] = []
        const wordStr = WordBuilder.pickWord(count, col, seed);
        const fixedWordStr = WordBuilder.fixWord(wordStr, col, seed)
        for (let i = 0; i < count; i++) {
            const word = fixedWordStr[i].replaceAll(' ', '').split('')
            const x = fixedWordStr[i].match(/\s*/g)![0].length

            words.push({
                word: word,
                x: x,
                y: i,
            })
        }
        const ys = WordBuilder.shuffleIndex(count, seed)
        for (let i = 0; i < count; i++) {
            words[i].y = ys[i]
        }
        return words.sort((a, b) => a.y - b.y)
    }


    static pickWord(count: number, col: number, seed: number | null = null): string[] {
        const words: string[] = []
        const random = new Random(seed)
        while (words.length < count) {
            const word = word_english2048[Math.floor(random.random() * word_english2048.length)]
            if (word.length <= col) {
                words.push(word)
            }
        }
        return words;
    }

    static shuffleIndex(count: number, seed: number | null = null): number[] {
        const array: number[] = []
        const random = new Random(seed)
        for (let i = count - 1; i >= 0; i--) {
            array.push(i)
        }
        for (let i = array.length - 1; i >= 0; i--) {
            const j = Math.floor(random.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    static fixWord(words: string[], col: number, seed: number | null = null): string[] {
        const fixedWords: string[] = words
        const random = new Random(seed)
        fixedWords[0] = words[0]
        fixedWords[fixedWords.length - 1] = words[words.length - 1].padStart(col, ' ')
        for (let i = 1; i < fixedWords.length - 1; i++) {
            const sub = col - fixedWords[i].length
            const r = Math.floor(random.random() * sub)
            fixedWords[i] = ' '.repeat(r) + words[i]
        }
        return fixedWords;
    }
}