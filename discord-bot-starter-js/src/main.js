require('dotenv/config');
const { MyClient } = require('./client');

const client = new MyClient();

const main = async () => {
	await client.init();
	await client.login(process.env.TOKEN);
};

// eslint-disable-next-line unicorn/prefer-top-level-await
main().catch((error) => {
	client.logger.error('An unexpected error occured: ', error);
});
