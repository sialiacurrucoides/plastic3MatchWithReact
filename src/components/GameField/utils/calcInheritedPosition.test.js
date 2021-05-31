import { calcInheritedPosition } from './updateField';

describe("calcInheritedPosition", () => {
    it("should provide pos-3*nrOfColumns if there is three tiles under", () => {
        const tile = {
            position: 50,
            value: 1,
            pointValue: 0,
            aboutToMove: 1
        }
        const tilesToRemove = [60, 70, 80];
        const actual = calcInheritedPosition(tilesToRemove, tile);
        const expected = 20;
        expect(actual).toBe(expected);
    });

    it("should provide pos-1*nrOfColumns if there is one tile", () => {
        const tile = {
            position: 50,
            value: 1,
            pointValue: 0,
            aboutToMove: 1
        }
        const tilesToRemove = [60];
        const actual = calcInheritedPosition(tilesToRemove, tile);
        const expected = 40;
        expect(actual).toBe(expected);
    });

    it("should provide pos-1*nrOfColumns if there is one tile to remove below but three above", () => {
        const tile = {
            position: 80,
            value: 1,
            pointValue: 0,
            aboutToMove: 1
        }
        const tilesToRemove = [40,50,60,90];
        const actual = calcInheritedPosition(tilesToRemove, tile);
        const expected = 70;
        expect(actual).toBe(expected);
    });

    it("should provide a tile before the removed pattern", () => {
        const tile = {
            position: 70,
            value: 1,
            pointValue: 0,
            aboutToMove: 1
        }
        const tilesToRemove = [40,50,60,90];
        const actual = calcInheritedPosition(tilesToRemove, tile);
        const expected = 30;
        expect(actual).toBe(expected);
    });
    
});