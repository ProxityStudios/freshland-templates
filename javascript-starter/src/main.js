/**
 * If you installed the "TODO Highlighting" extension,
 * you can use the these prefixes:
 *
 * TODO: Something that should be done.
 * BUG: Use this prefix if you write something about the bug.
 * REVIEW: Something that should be reviewed.
 * NOTE: Something that should be noted.
 */

require('./lib/env');
const { mainLogger } = require('./lib/logger');

function main() {
	try {
		mainLogger.silly('Please star and contribute the repository :)');
		mainLogger.silly('https://github.com/ProxityStudios/javascript-starter');

		// DO STUFF
		// mainLogger.info('BEEP OP');
	} catch (error) {
		mainLogger.error(error);
	}
}

main();
