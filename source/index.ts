
const baseCharset = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const baseCharsetLength = baseCharset.length

const codeLength = 6

const nullCharacter = '0'

const inputNumberLimit = baseCharsetLength ** codeLength

function validateNumber (
	inputNumber: number,
) {

	if (Number.isInteger(inputNumber) === false) {
		throw new Error('number must be integer')
	}

	if (inputNumber < 0) {
		throw new Error('number must be non-negative')
	}

	if (inputNumberLimit <= inputNumber) {
		throw new Error('number is too large')
	}

}

const inputStringPattern = [
	'^[', baseCharset, ']+$',
].join('')

const inputStringRegExp = new RegExp(inputStringPattern)

function validateString (
	inputString: string,
) {

	if (inputStringRegExp.test(inputString) === false) {
		throw new Error('string must be uppercase alphanumeric')
	}

	if (inputString.length !== codeLength) {
		throw new Error('string length must be 6 characters')
	}

}

export function encode (
	inputNumber: number,
): string {

	void validateNumber(inputNumber)

	let currentNumber = inputNumber

	let currentString = ''

	while (0 < currentNumber) {
		const baseCharsetIndex = currentNumber % baseCharsetLength
		const codeCharacter = baseCharset[baseCharsetIndex]
		if (codeCharacter == null) {
			throw new Error()
		}
		currentString = codeCharacter + currentString
		currentNumber = currentNumber / baseCharsetLength << 0
	}

	const finalString = currentString.padStart(codeLength, nullCharacter)

	return finalString

}

export function decode (
	inputString: string,
): number {

	void validateString(inputString)

	let currentIndex = 0

	let currentNumber = 0

	while (currentIndex < inputString.length) {
		const inputStringCharacter = inputString[currentIndex]
		if (inputStringCharacter == null) {
			throw new Error()
		}
		const baseCharsetNumber = baseCharset.indexOf(inputStringCharacter)
		currentNumber = currentNumber * baseCharsetLength + baseCharsetNumber
		currentIndex += 1
	}

	return currentNumber

}
