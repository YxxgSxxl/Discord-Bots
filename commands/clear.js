const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('clear')
		.setDescription('Clear messages.'),
	async execute(interaction) {
		await interaction.reply(``);
	},
};
