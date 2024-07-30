#!/usr/bin/env node

const request = require('request');
const app = require('./api');
const { expect } = require('chai');


describe("Index page", () => {

	const url = "http://localhost:7865";


	it("should return the correct status code", (done) => {
		request.get(`${url}/`, (error, resp, body) => {
			expect(resp.statusCode).to.equal(200);
			done();
		});
	});

	it("should return the correct message", (done) => {
		request.get(`${url}/`, (error, resp, body) => {
			expect(body).to.equal("Welcome to the payment system");
			done();
		});
	});
});
