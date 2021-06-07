import { calcTileFromTop, calcTileFromLeft, containerMargin, widthPercent } from './calcTilePosition';


describe("calcTileFromTop", () => {
    it("should be correct the first position from top", () => {
        const actual = calcTileFromTop(0);
        const expected = `${containerMargin}%`;

        expect(actual).toBe(expected);
    });
    it("should be correct position 10 from top", () => {
        const actual = calcTileFromTop(10);
        const expected = `${widthPercent + containerMargin}%`;

        expect(actual).toBe(expected);
    })
});

describe("calcTileFromLeft", () => {
    it("should be correct the first position from top", () => {
        const actual = calcTileFromLeft(0);
        const expected = `${containerMargin}%`;
        
        expect(actual).toBe(expected);
    })
});