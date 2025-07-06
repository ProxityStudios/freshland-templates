const { SlashCommandBuilder } = require('discord.js');

exports.Command = class {
	client;

	name;

	description;

	category;

	data;

	constructor(client, props) {
		this.client = client;

		this.name = props.name;
		this.description = props.description;
		this.category = props.category;
		this.data = new SlashCommandBuilder()
			.setName(this.name)
			.setDescription(this.description);
	}

	// eslint-disable-next-line no-unused-vars, class-methods-use-this, no-empty-function
	async execute(interaction, ctx) {}
};
