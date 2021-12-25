const Discord = require('discord.js');//Coded ByRoa
const client = new Discord.Client();//Coded ByRoa
const CSGO = require("csgo-api")//Coded ByRoa
const srv = new CSGO.Server('185.193.165.21', '27015')//Coded ByRoa
	let query = require("source-server-query")//Coded ByRoa

exports.run = async function(client, message, args) {
	const players = await srv.getPlayerCount();//Coded ByRoa
	const serverName = await srv.getServerName();//Coded ByRoa
	const map = await srv.getMap();//Coded ByRoa
	const platform = await srv.getPlatform();//Coded ByRoa
	const maxplayers = await srv.getMaxPlayers();//Coded ByRoa
	const game = await srv.getGame();//Coded ByRoa
	const vac = await srv.getVacEnabled();//Coded ByRoa
  
  const embed = new Discord.MessageEmbed()//Coded ByRoa
  .setAuthor(serverName, client.user.avatarURL())//Coded ByRoa
  .setThumbnail(client.user.avatarURL())//Coded ByRoa
  .setColor('PURPLE')//Coded ByRoa
  .addField('🗺️ Harita',map, true)//Coded ByRoa
  .addField('👥 Oyuncu Sayısı',players+"/"+maxplayers, true)//Coded ByRoa
  .addField('📍 IP - Tıkla Bağlan',"185.193.165.21 - steam://connect/185.193.165.21:27015")//Coded ByRoa
  	var data = await query.players("185.193.165.21", 27015, 1000),//Coded ByRoa
		    text = ``,
		    decode = require("utf8");//Coded ByRoa
  for (let i of data) {
		text += !i.name ? `BOT\n` : decode.decode(i.name)+ "\n";//Coded ByRoa
	}
  embed.addField('✅ Oyuncular', "```\n"+text+"```")//Coded ByRoa
  message.channel.send(embed)
  .catch(e =>console.log(e))
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['durum'],
  permLevel: 0
};

exports.help = {
  name: 'durum',
  description: 'CS:GO Sunucusunun durumunu gösterir.',
  usage: 'durum'
};

console.log