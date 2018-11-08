"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
require("../Program");
describe("Contain function", function () {
    it("[1,2,3] , [1,3] => [2]", function () {
        var a = [1, 2, 3];
        var b = [1, 3];
        var r = contain(a, b);
        chai_1.expect(r).to.equal([2]);
    });
});
