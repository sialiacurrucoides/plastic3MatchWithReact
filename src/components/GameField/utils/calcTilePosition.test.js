import { calcTileFromTop, calcTileFromLeft, containerMargin, tilePadding, widthPercent } from './calcTilePosition';


describe("calcTileFromTop", () => {
    it("should be correct the first position from top", () => {
        const actual = calcTileFromTop(0);
        const expected = `${containerMargin + tilePadding}%`;

        expect(actual).toBe(expected);
    });
    it("should be correct position 10 from top", () => {
        const actual = calcTileFromTop(10);
        const expected = `${widthPercent + containerMargin + tilePadding}%`;

        expect(actual).toBe(expected);
    })
});

describe("calcTileFromLeft", () => {
    it("should be correct the first position from top", () => {
        const actual = calcTileFromLeft(0);
        const expected = `${containerMargin + tilePadding}%`;
        
        expect(actual).toBe(expected);
    })
});