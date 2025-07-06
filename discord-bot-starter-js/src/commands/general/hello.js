const { Command } = require('../../command');
const { CommandName, CommandCategory } = require('../../constants');

exports = class extends Command {
	constructor(client) {
		super(client, {
			name: CommandName.Hello,
			description: 'Greets the user.',
			category: CommandCategory.General,
		});
	}

	async execute(interaction) {
		await interaction.reply({
			content: `Hey there, ${interaction.user.username}!`,
		});
	}
};
