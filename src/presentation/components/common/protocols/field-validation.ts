import { ValidationErrorType } from '..';

export class ValidationError extends Error {
	constructor(errorName: string, public error: ValidationErrorType) {
		super(errorName)
	}
}