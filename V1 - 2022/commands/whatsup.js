const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('whatsup')
		.setDescription('how the bot is ?'),
	async execute(interaction) {
		await interaction.reply(`I'm fine and you ?`);
	},
};
