#!/usr/bin/env node


const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');


describe('sendPaymentRequestToApi', () => {
	let calcNumStub;
	let consoleLogSpy;

	beforeEach(() => {
		calcNumStub = sinon.stub(Utils, 'calculateNumber').returns(10);
		consoleLogSpy = sinon.spy(console, 'log');
	});

	afterEach(() => {
		calcNumStub.restore();
		consoleLogSpy.restore();
	});

	it("should call Utils.calculateNumber with SUM, 100, 20 and log the result", () => {
		sendPaymentRequestToApi(100, 20);
		expect(calcNumStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
		expect(consoleLogSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
	});
});
