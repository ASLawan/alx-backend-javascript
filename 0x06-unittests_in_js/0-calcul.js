#!/usr/bin/env node

function calculateNumber(a, b) {
	// Round both numbers
	const roundedA = Math.round(a);
	const roundedB = Math.round(b);

	return roundedA + roundedB;
}

module.exports = calculateNumber;
