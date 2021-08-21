const { MessageEmbed } = require('discord.js');


exports.beta = async(client, message, args) => {

    let uye = message.mentions.users.first() || client.users.cache.get(args[0]) || (args.length > 0 ? client.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || message.author;
    let avatar = uye.avatarURL({ dynamic: true, size: 2048 });
    message.channel.send(new MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
    .setColor("BLUE")
    .setImage(avatar)
    )
};

module.exports.config = { 
    name: 'avatar',
    aliases: ['avatar', 'pp']
};  