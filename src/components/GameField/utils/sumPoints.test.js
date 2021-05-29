import { recyclablePlastic, nonrecyclablePlastic, nrElements } from '../constants/constants';
import detectPatterns from './detectPatterns';
import sumPoints from './sumPoints';

const emptyArray = Array.from(Array(nrElements).keys());

describe("detectPattern", () => {

    it("should give 3 points for positions 0,1,2", () => {
        const first3match = emptyArray.map((_, index) => index < 3 ? 
        {position: index, value: recyclablePlastic[0], pointValue: 0} : 
        {position: index, value: nonrecyclablePlastic[0], pointValue: 0});

        const actual = sumPoints(detectPatterns(first3match));
        const expected = 3;
        expect(actual).toBe(expected);
    });

    it("should give 6 points for positions 0,1,2,3", () => {
        const first3match = emptyArray.map((_, index) => index < 4 ? 
        {position: index, value: recyclablePlastic[0], pointValue: 0} : 
        {position: index, value: nonrecyclablePlastic[0], pointValue: 0});
        
        const actual = sumPoints(detectPatterns(first3match));
        const expected = 6;
        expect(actual).toBe(expected);
    });

    it("should give 9 points for positions 0,1,2,3,4", () => {
        const first3match = emptyArray.map((_, index) => index < 5 ? 
        {position: index, value: recyclablePlastic[0], pointValue: 0} : 
        {position: index, value: nonrecyclablePlastic[0], pointValue: 0});
        
        const actual = sumPoints(detectPatterns(first3match));
        const expected = 9;
        expect(actual).toBe(expected);
    });

    it("should give 3 points for positions 7,8,9,10,11 as the container ends at 9", () => {
        const first3match = emptyArray.map((_, index) => [7,8,9,10,11].includes(index) ? 
        {position: index, value: recyclablePlastic[0], pointValue: 0} : 
        {position: index, value: nonrecyclablePlastic[0], pointValue: 0});
        
        const actual = sumPoints(detectPatterns(first3match));
        const expected = 3;
        expect(actual).toBe(expected);
    });

    it("should give 3 points for positions 8,9,10,11,12 as the new row begins at 10", () => {
        const first3match = emptyArray.map((_, index) => [8,9,10,11,12].includes(index) ? 
        {position: index, value: recyclablePlastic[0], pointValue: 0} : 
        {position: index, value: nonrecyclablePlastic[0], pointValue: 0});
        
        const actual = sumPoints(detectPatterns(first3match));
        const expected = 3;
        expect(actual).toBe(expected);
    });

    describe("should detect vertical patterns", () => {
        it("should give 3 points for positions 0,10,20", () => {
            const first3match = emptyArray.map((_, index) => [0,10,20].includes(index) ? 
            {position: index, value: recyclablePlastic[0], pointValue: 0} : 
            {position: index, value: nonrecyclablePlastic[0], pointValue: 0});
            
            const actual = sumPoints(detectPatterns(first3match));
            const expected = 3;
            expect(actual).toBe(expected);
        });
    
        it("should give 6 points for positions 0,10,20,30", () => {
            const first3match = emptyArray.map((_, index) => [0,10,20,30].includes(index) ? 
            {position: index, value: recyclablePlastic[0], pointValue: 0} : 
            {position: index, value: nonrecyclablePlastic[0], pointValue: 0});
            
            const actual = sumPoints(detectPatterns(first3match));
            const expected = 6;
            expect(actual).toBe(expected);
        });
    
        it("should give 9 points for positions 0,10,20,30,40", () => {
            const first3match = emptyArray.map((_, index) => [0,10,20,30,40].includes(index) ? 
            {position: index, value: recyclablePlastic[0], pointValue: 0} : 
            {position: index, value: nonrecyclablePlastic[0], pointValue: 0});
            
            const actual = sumPoints(detectPatterns(first3match));
            const expected = 9;
            expect(actual).toBe(expected);
        });
    });

    describe("should detect L shape formations", () => {

        it("should give 7 points for positions 97,98,99,89,79", () => {
            const first3match = emptyArray.map((_, index) => [97,98,99,89,79].includes(index) ? 
            {position: index, value: recyclablePlastic[0], pointValue: 0} : 
            {position: index, value: nonrecyclablePlastic[0], pointValue: 0});
            
            const actual = sumPoints(detectPatterns(first3match));
            const expected = 7;
            expect(actual).toBe(expected);
        });

        it("should give 7 points for positions 70,80,90,91,92", () => {
            const first3match = emptyArray.map((_, index) => [70,80,90,91,92].includes(index) ? 
            {position: index, value: recyclablePlastic[0], pointValue: 0} : 
            {position: index, value: nonrecyclablePlastic[0], pointValue: 0});
            
            const actual = sumPoints(detectPatterns(first3match));
            const expected = 7;
            expect(actual).toBe(expected);
        });

        it("should give 7 points for positions 0,1,2,10,20", () => {
            const first3match = emptyArray.map((_, index) => [0,1,2,10,20].includes(index) ? 
            {position: index, value: recyclablePlastic[0], pointValue: 0} : 
            {position: index, value: nonrecyclablePlastic[0], pointValue: 0});
            
            const actual = sumPoints(detectPatterns(first3match));
            const expected = 7;
            expect(actual).toBe(expected);
        });

        it("should give 7 points for positions 7,8,9,19,29", () => {
            const first3match = emptyArray.map((_, index) => [7,8,9,19,29].includes(index) ? 
            {position: index, value: recyclablePlastic[0], pointValue: 0} : 
            {position: index, value: nonrecyclablePlastic[0], pointValue: 0});
            
            const actual = sumPoints(detectPatterns(first3match));
            const expected = 7;
            expect(actual).toBe(expected);
        });
    });

});