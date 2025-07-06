const { Client, Events, GatewayIntentBits } = require('discord.js');
const { Logger } = require('tslog');
const { MessagingService } = require('./services/messaging');
const { CommandsService } = require('./services/commands');

/**
 * @abstract
 */
exports.MyClient = class extends Client {
	services;

	servicesArr;

	logger;

	constructor() {
		super({
			intents: [
				GatewayIntentBits.Guilds,
				GatewayIntentBits.GuildMembers,
				GatewayIntentBits.GuildMessages,
			],
		});

		this.services = {
			messaging: new MessagingService(this),
			commands: new CommandsService(this),
		};
		this.servicesArr = Object.values(this.services);

		this.logger = new Logger({
			type: 'pretty',
			prettyLogTemplate: '{{MM}}:{{ss}} {{logLevelName}} ',
		});

		this.on(Events.ClientReady, (c) => this.onClientReady(c));
	}

	async init() {
		try {
			const servicesPromises = [];

			this.servicesArr.forEach((s) => {
				servicesPromises.push(s.init());
			});

			this.logger.info('Starting services');
			await Promise.all(servicesPromises);
			this.logger.info('All services initialized successfully');
		} catch (error) {
			// TODO: improve error handling
			this.logger.error(`error: Error starting services: ${error}`);
			throw error;
		}
	}

	/**
	 * @private
	 */
	onClientReady(client) {
		this.logger.info(`${client.user.tag} is now ready to serve.`);
	}
};
