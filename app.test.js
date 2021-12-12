const coverage = require('./app');

const testcasess = "3 3 1 1 1 2 1 1".split(" ");
// const testcasess = "1 1 0 0 0 0 1 1".split(" ");

// int i = 0;

// describe("Check the functioning of function empty", () => {
//     let objectSet;
//     beforeEach(()=>{
//         objectSet = new Set();
//     });

//     it("Check if set is Empty", () => {
//         expect(objectSet.empty()).toBe(true);
//     });

//     it("Check if set is not Emppty when adding one element", () => {
//         expect(objectSet.empty()).toBe(true);
//         objectSet.add(1);
//         expect(objectSet.empty()).toBe(false);
//     });
// });

describe("Check Statement Coverage", () => {
    it("Check statement covergae part 1", () => {
        const [a,b,x,y] = testcasess.slice(0,4).map(Number);
        expect(coverage(a,b,x,y)).not.toBe(-47823874);
    });

    it("Check statement covergae part 2", () => {
        const [a,b,x,y] = testcasess.slice(4,8).map(Number);
        expect(coverage(a,b,x,y)).not.toBe(-47823874);
    });
    if(testcasess.length>8){
        it("Check branch covergae part 1", () => {
            const [a,b,x,y] = testcasess.slice(8,12).map(Number);
            expect(coverage(a,b,x,y)).not.toBe(-47823874);
        });
    }

    if(testcasess.length>12){
        it("Check branch covergae part 1", () => {
            const [a,b,x,y] = testcasess.slice(12,16).map(Number);
            expect(coverage(a,b,x,y)).not.toBe(-47823874);
        });
    }
    if(testcasess.length>16){
        it("Check branch covergae part 1", () => {
            const [a,b,x,y] = testcasess.slice(16,20).map(Number);
            expect(coverage(a,b,x,y)).not.toBe(-47823874);
        });
    }
    if(testcasess.length>20){
        it("Check branch covergae part 1", () => {
            const [a,b,x,y] = testcasess.slice(20,24).map(Number);
            expect(coverage(a,b,x,y)).not.toBe(-47823874);
        });
    }

});

// describe("Check Branch Coverage", () => {
    

//     // it("Check statement covergae part 2", () => {
//     //     expect(coverage(0,0,1,1)).not.toBe(-47823874);
//     // });

// });

// describe("Check the functioning of function size", () => {
//     let objectSet;
//     beforeEach(()=>{
//         objectSet = new Set();
//     });

//     it("Check if set size is 0", () => {
//         expect(objectSet.size()).toBe(0);
//     });

//     it("Check if adding elements increase the size", () => {
//         expect(objectSet.size()).toBe(0);
//         objectSet.add(1);
//         expect(objectSet.size()).toBe(1);
//         objectSet.add(1);
//         expect(objectSet.size()).toBe(1);
//     });

//     it("Check if adding duplicate elements do not increase the size", () => {
//         expect(objectSet.size()).toBe(0);
//         objectSet.add(1);
//         objectSet.add(1);
//         expect(objectSet.size()).toBe(1);
//         objectSet.add(1);
//         expect(objectSet.size()).toBe(1);
//     });
// });

// describe("Check the functioning of function contains", () => {
//     let objectSet;
//     beforeEach(()=>{
//         objectSet = new Set();
//     });

//     it("Check if contains return false for an empty set", () => {
//         expect(objectSet.contains(1)).toBe(false);
//     });

//     it("Check if contains return true for an element added to set", () => {
//         objectSet.add(1);
//         expect(objectSet.size()).toBe(1);
//         expect(objectSet.contains(1)).toBe(true);
//         expect(objectSet.contains(2)).toBe(false);
//     });

//     // it("Check if duplicate elements when added to set ")
// });

// describe("Check the functioning of function contains", () => {
//     let objectSet;
//     beforeEach(()=>{
//         objectSet = new Set();
//     });

//     it("Check if contains return false for an empty set", () => {
//         expect(objectSet.contains(1)).toBe(false);
//     });

//     it("Check if contains return true for an element added to set", () => {
//         objectSet.add(1);
//         expect(objectSet.size()).toBe(1);
//         expect(objectSet.contains(1)).toBe(true);
//         expect(objectSet.contains(2)).toBe(false);
//     });
// });

// describe("Check the functioning of function remove", () => {
//     let objectSet;
//     beforeEach(()=>{
//         objectSet = new Set();
//     });

//     it("Check if set size reduce after removing an element after adding", () => {
//         objectSet.add(1);
//         expect(objectSet.size()).toBe(1);
//         objectSet.remove(1);
//         expect(objectSet.size()).toBe(0);
//     });

//     it("Check if set removes an element after adding", () => {
//         objectSet.add(1);
//         expect(objectSet.size()).toBe(1);
//         objectSet.remove(1);
//         expect(objectSet.size()).toBe(0);
//         expect(objectSet.contains(1)).toBe(false);
//     });
// });