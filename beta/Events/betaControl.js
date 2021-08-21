const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const config = require("../Settings/Config.json");
const kdb = new db.table("kullanıcı")

module.exports = async(member) => {

    let muteDurum = await kdb.get(`durum.${member.id}.mute`)
    let jailDurum = await kdb.get(`durum.${member.id}.jail`)


    if (muteDurum) {
        member.roles.add(config.Roller.muteRol)
        client.channels.cache.get(config.Log.muteLog).send(new MessageEmbed().setColor('RANDOM').setAuthor(member.user.tag, member.user.avatarURL({ dynamic: true }))
        .setDescription(`
    ${member} __Adlı kullanıcın datada mute cezası bulunduğu için muteli rolleri verildi.__

    \`•\` **Kullanıcı**: ${member} (\`${member.id}\`)`))
    }

    if (jailDurum) {
        member.roles.set([config.Roller.jailRol])
        client.channels.cache.get(config.Log.jailLog).send(new MessageEmbed().setColor('RANDOM').setAuthor(member.user.tag, member.user.avatarURL({ dynamic: true }))
        .setDescription(`
    ${member} __Adlı kullanıcın datada jail cezası bulunduğu için jail rolleri verildi.__

    \`•\` **Kullanıcı**: ${member} (\`${member.id}\`)`))
    }
}

module.exports.configuration = {
    name: "guildMemberAdd"
}