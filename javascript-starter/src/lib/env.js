const { config } = require('dotenv');
const { join } = require('node:path');
const { parseSync } = require('yargs');
const { envLogger } = require('./logger');

class EnvClass {
	/**
	 * @type {'production' | 'development'}
	 */
	NODE_ENV;

	/**
	 * @type {Boolean}
	 */
	BOOLEAN;

	/**
	 * @type {Number}
	 */
	NUMBER;
}

function runChecks() {
	const envClass = new EnvClass();
	const keys = Object.keys(envClass);
	const undefinedKeys = [];

	keys.forEach((key) => {
		// TODO: check the types as well
		const env = exports.getEnv(key);

		if (!env) {
			undefinedKeys.push(key);
		}
	});

	if (undefinedKeys.length > 0) {
		throw new Error(
			`[UNDEFINED_ENV_KEYS] Setup undefined keys: ${undefinedKeys.join(', ')}`
		);
	}
}

exports.isDeveloperMode = () => {
	if (exports.getEnv('NODE_ENV') === 'development') return true;
	return false;
};

// Function that retrieves the value of an environment variable
exports.getEnv = (key) => {
	return process.env[key];
};

// Function that loads the .env file from a specific location
exports.loadEnvFile = (path) => {
	config({ path });
};

// Function that loads the .env file for a specific environment
exports.loadEnvFileForEnv = (env) => {
	exports.loadEnvFile(join(process.cwd(), `.env.${env}`));
};

// Parse command-line arguments using yargs
const { env } = parseSync();

// Load the .env file for the specified environment
if (env) {
	envLogger.info(`Loading the ".env.${env}" file`);
	exports.loadEnvFileForEnv(env);
} else {
	envLogger.info('Loading ".env" file from the current working directory');
	// Load the .env file from the current working directory
	exports.loadEnvFile(join(process.cwd(), '.env'));
}

// Override configuration values using command-line arguments
process.argv.forEach((arg) => {
	const [key, value] = arg.split('=');
	if (key && value) {
		process.env[key] = value;
	}
});

runChecks();
