import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import { Logger } from 'tslog';
import endpoints from './api';
import { Endpoints } from './interfaces';
import { MessageResponse } from './interfaces/response-interfaces';
import { isDeveloperMode } from './lib/env';
import { errorHandler, notFoundHandler } from './middlewares';

const app = express();

export const appLogger = new Logger({ type: 'pretty', name: 'Application' });

app.use(morgan(isDeveloperMode() ? 'dev' : 'tiny'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get<object, MessageResponse>('/', (req, res) => {
	res.status(200);
	res.json({
		message: 'hm? what you want',
		status: 200,
	});
});

const registerEndpoints = (es: Endpoints, parentRoute: string = '') =>
	es.forEach((e) => {
		const currentRoute = `${parentRoute}${e.route}`;
		appLogger.info('Registering route:', currentRoute);
		if (e.endpoints) {
			registerEndpoints(e.endpoints, currentRoute);
		}
		app.use(currentRoute, e.router);
	});

registerEndpoints(endpoints);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
