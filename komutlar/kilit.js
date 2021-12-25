const Discord = require('discord.js');//Coded ByRoa
 
exports.run = (client, message, args) => {
if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send("Yetkin Yok!");//Coded ByRoa

let channel = message.channel;//Coded ByRoa

let everyone = message.guild.roles.cache.find(a => a.name === '@everyone');//Coded ByRoa
channel.updateOverwrite(everyone, { 'SEND_MESSAGES': false }, 'Kilitleyen '+message.author.tag);//Coded ByRoa
channel.send(new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(":small_blue_diamond: Kanal Kilitlendi "));//Coded ByRoa

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'kilit'
};

console.log