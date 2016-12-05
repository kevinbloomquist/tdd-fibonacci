/* global define, describe, it */

    var expect = require('chai').expect;
    var fibonacci = require('../src/fibonacci');

    describe('Testing fibonacci', function () {
        it('should be a function', function () {
            expect(fibonacci).to.be.a('function');
        });
        // TODO: implement remaining unit tests
        it('should return 1 for the first number',function(){
            expect(fibonacci(1)).to.equal(1);
        });
        it('should return 1 for the second number', function(){
            expect(fibonacci(2)).to.equal(1);
        });
        it('should return 13 for index 7',function(){
            expect(fibonacci(7)).to.equal(13);
        });
        it('should return 0 for negative index',function(){
            expect(fibonacci(0)).to.equal(0);
            expect(fibonacci(-1)).to.equal(0);
        });
        it('should return "words are not math" if index is a string',function(){
            expect(fibonacci("striiiiinggggg")).to.equal("words are not math");
        });
    });

