import { Router } from 'express';

export interface Endpoint {
	route: string;
	router: Router;
	endpoints?: Endpoint[];
}
export type Endpoints = Endpoint[];
