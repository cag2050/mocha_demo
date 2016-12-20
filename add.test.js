/**
 * Created by chenanguo on 16/12/19.
 */
var add = require('./add.js');
var expect = require('chai').expect;

describe('加法函数的测试', function () {
    it('3-3=0', function () {
        expect(add(3, -3)).to.be.equals(0);
    })
});