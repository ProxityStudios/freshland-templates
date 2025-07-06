import { Endpoint, Endpoints } from '../interfaces';
import systemHealthRouter from './system-health';

import v1BaseRouter from './v1/base';

const v1Endpoints: Endpoint = {
	route: '/api/v1',
	router: v1BaseRouter,
	endpoints: [
		{
			route: '/hi',
			router: systemHealthRouter,
			endpoints: [
				{
					route: '/hello',
					router: systemHealthRouter,
				},
			],
		},
	],
};

const endpoints: Endpoints = [
	v1Endpoints,
	{
		route: '/system-health',
		router: systemHealthRouter,
	},
];

export default endpoints;
