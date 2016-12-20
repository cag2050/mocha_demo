/**
 * Created by chenanguo on 16/12/19.
 */
var add = require('./add.js');
var expect = require('chai').expect;

describe('加法函数的测试', function () {
    it('1减1应该等于0', function () {
        expect(add(1, -1)).to.be.equals(0);
    })
});