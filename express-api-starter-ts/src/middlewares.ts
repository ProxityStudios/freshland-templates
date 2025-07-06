import { NextFunction, Request, Response } from 'express';

import { ErrorResponse } from './interfaces/response-interfaces';
import { isDeveloperMode } from './lib/env';

export function notFoundHandler(
	req: Request,
	res: Response<ErrorResponse>,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	next: NextFunction
) {
	res.status(404);
	const error = new Error(`Not Found - ${req.originalUrl}`);
	res.json({
		status: 404,
		message: error.message,
		stack: error.stack,
	});
}

export function errorHandler(
	err: Error,
	req: Request,
	res: Response<ErrorResponse>,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	next: NextFunction
) {
	const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
	res.status(statusCode);
	res.json({
		message: err.message,
		status: statusCode,
		stack: isDeveloperMode() ? err.stack : 'An error occured. Try again...',
	});
}
