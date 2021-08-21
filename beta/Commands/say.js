const { MessageEmbed } = require('discord.js');
const moment = require("moment");
require("moment-duration-format");


exports.beta = async(client, message, args) => {

    if(!message.member.hasPermission('ADMINISTRATOR')) return;

    let beta = "✧";    

    const taglı = message.guild.members.cache.filter(r => r.user.username.includes(beta)).size;
    const toplam = message.guild.memberCount;
    const Online = message.guild.members.cache.filter(off => off.presence.status !== 'offline').size;
    const ses = message.guild.channels.cache.filter(channel => channel.type == 'voice').map(channel => channel.members.size).reduce((a,b) => a + b);
    const BoostLevel = message.guild.premiumTier;
    const Booster = message.guild.member.premiumSubscriptionCount;
    const BoosterMember  = message.guild.members.cache.filter(b => b.roles.cache.get("878398396556251156")).size || 0;


    message.channel.send(new MessageEmbed()
    .setColor("BLUE")
    .setAuthor(message.guild.name, message.guild.iconURL({ dynamic:true }))
    .setDescription(`
    \`˃\` Sunucumuda **${toplam}** adet üye var.
    \`˃\` Sunucumuda **${Online}** aktif üye var.
    \`˃\` Şu anda toplam **${ses}** kişi seslide.
    \`˃\` Toplamda **${taglı}** kişi tagımızı alarak bizi desteklemiş.
    \`˃\` Sunucumuzda toplamda **${BoosterMember}** kişi boost basmış var ve **${BoostLevel}** level.
`)
    );
};
module.exports.config = { 
    name: 'say',
    aliases: ['say']
};  