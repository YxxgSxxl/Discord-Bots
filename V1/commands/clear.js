const { SlashCommandBuilder, TextChannel } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('clear')
        .setDescription('Clear messages'),
    async execute(interaction) {
        await interaction.reply("Cleaning...")
		.then(msg => {
			setTimeout(() => msg.delete(), 1000)
		  })
		  .catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
		// await interaction
    },
};