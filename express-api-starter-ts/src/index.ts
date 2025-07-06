import app from './application';
import { getEnv } from './lib/env';
import { appLogger } from './lib/logger';

const port = getEnv('PORT') || 5000;
app.listen(port, () => {
	appLogger.info(`Listening at: http://localhost:${port}`);
});
