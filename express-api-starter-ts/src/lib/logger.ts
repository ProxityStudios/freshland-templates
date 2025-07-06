import { Logger } from 'tslog';

export const appLogger = new Logger({ type: 'pretty', name: 'Application' });
export const envLogger = new Logger({ type: 'pretty', name: 'Environment' });
