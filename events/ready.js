const Discord = require('discord.js');//Coded ByRoa
const moment = require('moment');//Coded ByRoa
const chalk = require('chalk');//Coded ByRoa
const { prefix } = require('../ayarlar.json')//Coded ByRoa
const CSGO = require("csgo-api")//Coded ByRoa
const srv = new CSGO.Server('185.193.165.21', '27015')//Coded ByRoa
module.exports = client => {
	const map = srv.getMap();//Coded ByRoa
    
          setInterval(()=>{
            srv.getPlayerCount().then(oyuncu => { srv.getMap().then(map => { client.user.setActivity(`👥 ${oyuncu}/22 Kişi | 🗺️ ${map} `) }) })
            },2000)//Coded ByRoa
  
  setInterval(function() {

}, 2 * 30000);//Coded ByRoa
  
  client.user.setStatus("dnd"); //dnd, idle, online, offline
  
}

console.log