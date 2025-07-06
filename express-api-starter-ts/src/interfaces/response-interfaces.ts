export interface MessageResponse {
	message: string;
	status: number;
}

export interface ErrorResponse extends MessageResponse {
	stack?: string;
}

export interface DataResponse<D> {
	ok: boolean;
	data: D;
}
