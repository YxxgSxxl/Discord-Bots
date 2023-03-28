// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits, IntentsBitField } = require('discord.js');
require('dotenv').config();

// Create a new client instance
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
});

let prefix = "!";

client.on('messageCreate', (message) => {
    if (message.content === prefix + 'hello') {
        message.reply('Hi man !');
    }
    console.log(message.content);
})

client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.login(process.env.token);