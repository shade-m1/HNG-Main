const Discord = require('discord.js')

const client = new Discord.Client();

const prefix = 'h!'
client.on('message', message => {
   if (message.content === '+ping') {  
     message.channel.send(`🏓Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
   }
 });
client.once('ready' , () =>{
   console.log('you bot is ready'); 
});





client.login(process.env.TOKEN)
