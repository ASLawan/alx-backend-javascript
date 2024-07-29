#!/usr/bin/env node

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return 4 when input is (1, 3)', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when input is (1, 3.7)', function() {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 when input is (1.2, 3.7)', function() {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 when input is (1.5, 3.7)', function() {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should handle negative numbers', function() {
    assert.strictEqual(calculateNumber(-1.2, -3.7), -5);
  });

  it('should handle zero', function() {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should handle large numbers', function() {
    assert.strictEqual(calculateNumber(1000000.1, 2000000.2), 3000000);
  });

  it('should handle small numbers', function() {
    assert.strictEqual(calculateNumber(0.1, 0.2), 0);
  });
});
