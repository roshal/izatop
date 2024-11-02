
import assert from 'node:assert'
import test from 'node:test'

import * as NumberCoder from '.'

test('should correctly encode numbers', () => {

	void assert.strict.equal(NumberCoder.encode(0), 'AAAAAA')

	void assert.strict.equal(NumberCoder.encode(123456), 'AACXJM')
	void assert.strict.equal(NumberCoder.encode(135487), 'AAC6TT')

	void assert.strict.equal(NumberCoder.encode(1776965), 'ABCDEF')
	void assert.strict.equal(NumberCoder.encode(8884825), 'AFKPUZ')

	void assert.strict.equal(NumberCoder.encode(2176782335), '999999')

})

test('should correctly decode strings', () => {

	void assert.strict.equal(NumberCoder.decode('AAAAAA'), 0)

	void assert.strict.equal(NumberCoder.decode('AACXJM'), 123456)
	void assert.strict.equal(NumberCoder.decode('AAC6TT'), 135487)

	void assert.strict.equal(NumberCoder.decode('ABCDEF'), 1776965)
	void assert.strict.equal(NumberCoder.decode('AFKPUZ'), 8884825)

	void assert.strict.equal(NumberCoder.decode('999999'), 2176782335)

})

test('should throw an error on encode for invalid inputs', () => {

	void assert.throws(() => {
		void NumberCoder.encode(0.1)
	}, {
		message: 'number must be integer',
	})

	void assert.throws(() => {
		void NumberCoder.encode(-1)
	}, {
		message: 'number must be non-negative',
	})

	const largeNumber = 36 ** 6

	void assert.throws(() => {
		void NumberCoder.encode(largeNumber)
	}, {
		message: 'number is too large',
	})

})

test('should throw an error on decode for invalid inputs', () => {

	void assert.throws(() => {
		void NumberCoder.decode('_BCDEF')
	}, {
		message: 'string must be uppercase alphanumeric',
	})

	void assert.throws(() => {
		void NumberCoder.decode('AZ')
	}, {
		message: 'string length must be 6 characters',
	})

})
