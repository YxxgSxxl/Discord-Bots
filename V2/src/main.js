// Require the necessary discord.js classes
require('dotenv').config();
const { Client, Events, GatewayIntentBits, IntentsBitField } = require('discord.js');

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

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'hey') {
        interaction.reply ('Hey ' + interaction.user.toString() + ' !');
    }

    if (interaction.commandName === 'ping') {
        interaction.reply ('pong !');
    }
});

// Première commande avec un prefix
// let prefix = "!";

// client.on('messageCreate', (message) => {
//     if (message.content === prefix + 'hello') {
//         message.reply('Hi man !');
//     }
//     console.log(message.content);
// })

client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.login(process.env.TOKEN);