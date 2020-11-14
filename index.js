const Discord = require('discord.js')

const client = new Discord.Client();

const prefix = 'h!'

client.once('ready' , () =>{
   console.log('you bot is ready'); 
});





client.login(process.env.TOKEN)
