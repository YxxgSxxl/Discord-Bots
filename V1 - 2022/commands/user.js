const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Provides information about the user.'),
	async execute(interaction) {
		await interaction.reply(`name : ${interaction.user.username}, joined on : ${interaction.member.joinedAt}.`);
	},
};
