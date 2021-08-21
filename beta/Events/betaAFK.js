const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const moment = require("moment");
const ms = require("ms");

module.exports = async(message) => {

    if(!message.guild) return;
   if (message.content.includes(`afk`)) return;
    let etiket = message.mentions.users.first()
    let uye = db.fetch(`user_${message.author.id}_${message.guild.id}`)
    let nickk = db.fetch(`nick_${message.author.id}_${message.guild.id}`)
    if(etiket){
      let reason = db.fetch(`sebep_${etiket.id}_${message.guild.id}`)
      let uye2 = db.fetch(`user_${etiket.id}_${message.guild.id}`)
      if(message.content.includes(uye2)){
      let time = db.fetch(`afktime_${message.guild.id}`);
      let timeObj = ms(Date.now() - time);
        message.channel.send(new MessageEmbed().setDescription(`${etiket} adlı kullanıcı **${reason}** sebebiyle \`${timeObj}\` süresi boyunca afk.`).setColor("RANDOM"))}}
  if(message.author.id === uye){  
      message.member.setNickname(nickk)
      db.delete(`sebep_${message.author.id}_${message.guild.id}`)
      db.delete(`user_${message.author.id}_${message.guild.id}`)
      db.delete(`nick_${message.author.id}_${message.guild.id}`)
      db.delete(`user_${message.author.id}_${message.guild.id}`);
      db.delete(`afktime_${message.guild.id}`)
      message.reply(`**Başarıyla \`AFK\` modundan çıkış yaptın.**`)
    }  
}

module.exports.configuration = {
    name: "message"
}