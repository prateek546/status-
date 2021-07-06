
const mySecret = process.env['token']


const express = require('express');
const app = express();
const port = 3000;
 
app.get('/', (req, res) => res.send('Hello World Im here  '));
 
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
// ================= START BOT CODE ===================
const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

client.user.setPresence({ game: { name: 'with depression' }, status: 'online' }); bot. user. setGame('with depression', 'https://www.twitch.tv/monstercat');

 client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong!');
  }
});
// You really don't want your token here since your repl's code
// is publically available. We'll take advantage of a Repl.it 
// feature to hide the token we got earlier. 
client.login(process.env.token)