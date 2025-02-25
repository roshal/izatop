
import {strict} from 'node:assert'
import {test} from 'node:test'
import {throws} from 'node:assert'

import {decode} from '.'
import {encode} from '.'

void test('should correctly encode numbers', () => {

	void strict.equal(encode(0), '000000')

	void strict.equal(encode(123456), '002N9C')
	void strict.equal(encode(135487), '002WJJ')

	void strict.equal(encode(623714775), 'ABCDEF')
	void strict.equal(encode(630822635), 'AFKPUZ')

	void strict.equal(encode(2176782335), 'ZZZZZZ')

})

void test('should correctly decode strings', () => {

	void strict.equal(decode('000000'), 0)

	void strict.equal(decode('002N9C'), 123456)
	void strict.equal(decode('002WJJ'), 135487)

	void strict.equal(decode('ABCDEF'), 623714775)
	void strict.equal(decode('AFKPUZ'), 630822635)

	void strict.equal(decode('ZZZZZZ'), 2176782335)

})

void test('should throw an error on encode for invalid inputs', () => {

	void throws(() => {
		void encode(0.1)
	}, {
		message: 'number must be integer',
	})

	void throws(() => {
		void encode(-1)
	}, {
		message: 'number must be non-negative',
	})

	const largeNumber = 36 ** 6

	void throws(() => {
		void encode(largeNumber)
	}, {
		message: 'number is too large',
	})

})

void test('should throw an error on decode for invalid inputs', () => {

	void throws(() => {
		void decode('_BCDEF')
	}, {
		message: 'string must be uppercase alphanumeric',
	})

	void throws(() => {
		void decode('AZ')
	}, {
		message: 'string length must be 6 characters',
	})

})
