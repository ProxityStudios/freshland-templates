const { EmbedBuilder } = require('discord.js');

exports.MessagingService = {
	infoEmbed(message) {
		const embed = new EmbedBuilder();
		embed.setColor('Blue');
		embed.setDescription(message);
		return embed;
	},

	warnEmbed(message) {
		const embed = new EmbedBuilder();
		embed.setColor('Yellow');
		embed.setDescription(message);
		return embed;
	},

	errorEmbed(message) {
		const embed = new EmbedBuilder();
		embed.setColor('Red');
		embed.setDescription(message);
		return embed;
	},
};
