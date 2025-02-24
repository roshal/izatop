
import assert from 'node:assert'
import test from 'node:test'

import * as NumberCoder from '.'

test('should correctly encode numbers', () => {

	void assert.strict.equal(NumberCoder.encode(0), '000000')

	void assert.strict.equal(NumberCoder.encode(123456), '002N9C')
	void assert.strict.equal(NumberCoder.encode(135487), '002WJJ')

	void assert.strict.equal(NumberCoder.encode(623714775), 'ABCDEF')
	void assert.strict.equal(NumberCoder.encode(630822635), 'AFKPUZ')

	void assert.strict.equal(NumberCoder.encode(2176782335), 'ZZZZZZ')

})

test('should correctly decode strings', () => {

	void assert.strict.equal(NumberCoder.decode('000000'), 0)

	void assert.strict.equal(NumberCoder.decode('002N9C'), 123456)
	void assert.strict.equal(NumberCoder.decode('002WJJ'), 135487)

	void assert.strict.equal(NumberCoder.decode('ABCDEF'), 623714775)
	void assert.strict.equal(NumberCoder.decode('AFKPUZ'), 630822635)

	void assert.strict.equal(NumberCoder.decode('ZZZZZZ'), 2176782335)

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
