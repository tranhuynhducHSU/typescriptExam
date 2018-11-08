import {expect} from 'chai';
import '../Program';

describe("Contain function",()=>{
    it("[1,2,3] , [1,3] => [2]",()=>{
        var a=[1,2,3];
        var b = [1,3];
        var r = contain(a,b);
        expect(r).to.equal([2]);
    });
});