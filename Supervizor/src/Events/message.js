const { Discord, MessageEmbed, Client, Collection } = require('discord.js')
const settings = require('../Config/Striga')
module.exports = async(message) => {

const SRol = require('../Config/RolesConfig.json')
const SKanal = require('../Config/ChannelsConfig.json')
const SEmoji = require('../Config/EmojisConfig.json')

const embed = new MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL({dynamic:true})).setColor(client.generalColor()).setFooter(`deep was here.`)
const nembed = new MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL({dynamic:true})).setColor(client.warnColor()).setFooter(`deep was here.`) 

if([".tag","!tag"].includes(message.content.toLowerCase())){ return message.channel.send("`"+settings.sunucuTag+"`")}

if (!message.guild || message.author.bot || message.channel.type === 'dm') return;
let prefix = settings.prefix.filter(p => message.content.startsWith(p))[0]; 
if (!prefix) return;
let config = settings;
let args = message.content.split(' ').slice(1);
let command = message.content.split(' ')[0].slice(prefix.length); 
let stg = client.commands.get(command) || client.commands.get(client.aliases.get(command));
if (stg){
stg.stg(client, message, args, config, embed, nembed, SRol, SKanal, SEmoji);}



}
module.exports.conf = {name: "message"}