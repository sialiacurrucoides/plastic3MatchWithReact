import { patternLengthsInColumn } from './updateField';

describe("patternLengthsInColumn", () => {
    it("should return 3 if there are only three", () => {
        const removeTiles = [10,20,30]
        const actual = patternLengthsInColumn(removeTiles)[0];
        const expected = 3;
        expect(actual).toBe(expected);
    });

    it("should return 1 if the first group is a single tile", () => {
        const removeTiles = [10,50,60,70]
        const actual = patternLengthsInColumn(removeTiles)[0];
        const expected = 1;
        expect(actual).toBe(expected);
    });

    it("should return 3 if the second group has three tiles", () => {
        const removeTiles = [10,50,60,70]
        const actual = patternLengthsInColumn(removeTiles)[1];
        const expected = 3;
        expect(actual).toBe(expected);
    });

    it("should return 2 if the second group has two tiles", () => {
        const removeTiles = [10,40,50,70,80,90]
        const actual = patternLengthsInColumn(removeTiles)[1];
        const expected = 2;
        expect(actual).toBe(expected);
    });

    it("should return 3 if the third group has three tiles", () => {
        const removeTiles = [10,40,50,70,80,90]
        const actual = patternLengthsInColumn(removeTiles)[2];
        const expected = 3;
        expect(actual).toBe(expected);
    });
});