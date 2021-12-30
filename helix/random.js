const {MessageEmbed}=require('discord.js');
const {StripIndent}=require('common-tags');
const server = message.guild;
const owner = message.guild.ownerId;
const ownerEmoji = `<a:shiny_owner:902353310613405696>`;
const memberEmoji = `<:blurple_members:899908110934749184>`;
const serverinfo = new MessageEmbed()
.setAuthor(message.guild.name, message.guild.iconURL())
.setTitle(`Information About ${message.guild.name}`)
.addFields(
    { name: `Server ID`, value: `\`${server.id}\``, inline: true},
    { name: `Owner`, value: `<@${owner}>`, inline: true},
    { name: `Total Members`, value: `${server.memberCount}`, inline: true},
    { name: `e`, value: `e`, inline: true},
    { name: `e`, value: `e`, inline: true},
    { name: `e`, value: `e`, inline: true},
    { name: `e`, value: `e`, inline: true},
    { name: `e`, value: `e`, inline: true}
)
.setColor("BLURPLE")
.setFooter(`${message.author.username}`, `${message.author.displayAvatarURL()}`)
.setTimestamp()

if(message.guild.banner) serverinfo.setImage(server.bannerURL());
message.reply({embeds: [serverinfo]});