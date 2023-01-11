import { test } from 'vitest'
import { WordBuilder } from "../src/models/WordBuilder";

test('キーワードを生成', () => {
    const result = WordBuilder.buildWord(10, 5, 19991231);
    console.log(result);
});