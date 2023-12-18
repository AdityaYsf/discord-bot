const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '!'; // You can change the prefix to your liking

client.once('ready', () => {
  console.log('Bot is online!');
});

client.on('message', (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  // Command handling example
  if (command === 'ping') {
    message.channel.send('Pong!');
  } else if (command === 'hello') {
    message.channel.send(`Hello, ${message.author.username}!`);
  }

  // Add more commands as needed
});

// Replace 'YOUR_BOT_TOKEN' with your actual bot token
client.login('YOUR_BOT_TOKEN');
