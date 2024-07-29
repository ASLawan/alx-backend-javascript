#!/usr/bin/env node

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return 4 when input is (SUM, 1, 3)', function() {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });

    it('should return 5 when input is (SUM, 1, 3.7)', function() {
      assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
    });

    it('should return 5 when input is (SUM, 1.2, 3.7)', function() {
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    });

    it('should return 6 when input is (SUM, 1.5, 3.7)', function() {
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
    });
  });

  describe('SUBTRACT', function() {
    it('should return -2 when input is (SUBTRACT, 1, 3)', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
    });

    it('should return -1 when input is (SUBTRACT, 1, 1.7)', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 1.7), -1);
    });

    it('should return 1 when input is (SUBTRACT, 1.5, 0.7)', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 0.7), 1);
    });
  });

  describe('DIVIDE', function() {
    it('should return 0.3 when input is (DIVIDE, 1, 3)', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 3), 0.3333333333333333);
    });

    it('should return 1 when input is (DIVIDE, 1.5, 1.7)', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.5, 1.7), 1);
    });

    it('should return "Error" when input is (DIVIDE, 1, 0)', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 0), 'Error');
    });

    it('should return 1 when input is (DIVIDE, 3, 3)', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 3, 3), 1);
    });
  });

  describe('Edge Cases', function() {
    it('should throw error for invalid type', function() {
      assert.throws(() => calculateNumber('INVALID', 1, 1), Error, 'Invalid type');
    });
  });
});
