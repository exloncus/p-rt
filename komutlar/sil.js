const Discord = require('discord.js')//Coded ByRoa
const ayarlar = require('../ayarlar.json')//Coded ByRoa
let prefix = ayarlar.prefix//Coded ByRoa

exports.run = async (client, message, args) => { 
     
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için **Mesajları Yönet** yetkisine sahip olmalısın!`);
  if (!args[0] || isNaN(args[0])) {
    
  const temizle = new Discord.MessageEmbed() //Coded ByRoa
  
  .setDescription(`Temizlenecek Mesaj Miktarını Belirtmelisin!\n\n Örnek Kullanım : ${prefix}**sil 10**`)
  .setColor("RANDOM")
  
  return message.channel.send(temizle)
  }//Coded ByRoa
  
  message.delete();
  
  let sayi = Number(args[0]);
  let silinen = 0;
  //Coded ByRoa
  for (var i = 0; i < (Math.floor(sayi/100)); i++) {
    
  message.channel.bulkDelete(100).then(r => silinen+=r.size);//Coded ByRoa
    
  sayi = sayi-100; 
  };
  //Coded ByRoa
  if (sayi > 0)  message.channel.bulkDelete(sayi).then(r => silinen+=r.size);
  //Coded ByRoa
  const sil = new Discord.MessageEmbed()  //Coded ByRoa
  
  .setDescription(`**\`\`${args[0]}\`\` Adet Mesaj Silindi.**`)
  .setColor("RANDOM")
  
  return message.channel.send(sil)
  }

exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: ['temizle','clear','purge','delete'],
    permLevel: 0,
}

exports.help = {
    name: 'sil', 
    description: '',
    usage: 'sil'
}