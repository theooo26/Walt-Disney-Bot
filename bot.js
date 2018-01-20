const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('**PONG!**');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'aide') {
    	 message.channel.sendMessage({
        "embed": {
                title: 'Buienradar',
                url: 'http://www.buienradar.nl/',
                "image": {
                "url": "http://api.buienradar.nl/image/1.0/RadarMapNL?a=.gif",
                }
            }
        });

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
