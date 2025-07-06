const { Command } = require('../../command');
const { CommandName, CommandCategory } = require('../../constants');

exports = class extends Command {
	constructor(client) {
		super(client, {
			name: CommandName.Help,
			description: 'Displays a list of available commands.',
			category: CommandCategory.General,
		});
	}

	async execute(interaction, ctx) {
		const embed = ctx.messaging.infoEmbed(
			'This is a list of commands you can use.'
		);

		const commands = ctx.commands.commands.sort((a, b) =>
			a.name.localeCompare(b.name)
		);

		// Group the commands by category and add them to the embed fields
		const commandCategories = Object.values(CommandCategory);
		commandCategories.forEach((commandCategory) => {
			const categoryCommands = commands.filter(
				(c) => c.category === commandCategory
			);
			if (categoryCommands.length > 0) {
				const commandList = categoryCommands.map((c) => c.name).join(', ');
				embed.addFields({ name: commandCategory, value: commandList });
			}
		});

		await interaction.reply({ embeds: [embed] });
	}
};
