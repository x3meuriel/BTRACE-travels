
const chai = require('chai');

const add = require('../btracetravels').add
chai.should();

let num1 = 3; let num2 = 5

describe("Add result", ()=>{
    it("Add Should be a function", (done)=>{
        add.should.be.a('function');
        done();
    })

    it("Add result Should equal to number", (done)=>{
        add(num1, num2).should.be.a('number');
        done();
    })

    it("Add result arguments should be numbers", (done)=>{
   
        num1.should.be.a('number')
        num2.should.be.a('number')

        done();
    })


})


const {describe, it} = require('mocha');

const {expect} = require('chai');

const sinon = require('sinon');

describe('When stubbing console.log()', function() {
    it('console.log() is replaced', function() {
        let consoleLogStub = sinon.stub(console, 'log');
        let message = 'You will NOT see this line of output in the test report';
        console.log(message);
        consoleLogStub.restore();
        expect(consoleLogStub.calledWith(message)).to.be.true;
    });
});

xch1qrgftrprw0dm85gc7js09arz4qqv5u742m9lv8a5hllvjw3t3zksw3ktcs



// var assert = require('assert');
// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal([1, 2, 3].indexOf(4), -1);
//     });
//   });
// });

