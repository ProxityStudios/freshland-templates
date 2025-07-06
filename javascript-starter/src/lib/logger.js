const { Logger } = require('tslog');

exports.mainLogger = new Logger({ type: 'pretty', name: 'Main' });
exports.envLogger = new Logger({ type: 'pretty', name: 'Environment' });
