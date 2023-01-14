import { expect, test } from 'vitest'
import { WordBuilder } from "../src/models/WordBuilder";

test('キーワードを生成', () => {
    const result = WordBuilder.buildWord(10, 5, 235466325);
    expect(result).toEqual([
        { word: ['P', 'I', 'E', 'C', 'E'], x: 0, y: 0 },
        { word: ['R', 'E', 'T', 'I', 'R', 'E'], x: 2, y: 1 },
        { word: ['C', 'E', 'R', 'E', 'A', 'L'], x: 2, y: 2 },
        { word: ['B', 'O', 'A', 'R', 'D'], x: 0, y: 3 },
        { word: ['M', 'A', 'N', 'G', 'O'], x: 5, y: 4 }
    ])
});