const settings = require('../settings.json');
const chalk = require ('chalk');
exports.run = (client, message, params) => {
  if (params[0] === null || params[1] === null) return message.reply("`ERROR` See Manual!")
  if (params[0] === "green") {
    var slice = 20
    var slCol = 0x96E000
  } else if (params[0] === "red") {
    var slice = 18
    var slCol = 0xAB0000
  } else if (params[0] === "yellow") {
    var slice = 21
    var slCol = 0xFFED48
  } else if (params[0] === "blue") {
    var slice = 19
    var slCol = 0x0049C0
  } else return message.reply("`ERROR` See Manual!")
  if (message.mentions.members.first() !== undefined) {
    let person = message.mentions.members.first()
    var authName = person.displayName
    var authIcon = client.user.avatarURL
    var slice = slice + 23
  } else {
    var authName = message.member.displayName
    var authIcon = message.author.avatarURL
  }
  let msg = message // ADD REACTS!
  message.delete()
  data = message.content.substring(slice, 1024)
  msg.channel.send({ embed: {
    color: slCol,
    timestamp: new Date(),
    footer: {
      text: msg.member.displayName, // client.user.username
      icon_url: msg.author.avatarURL // client.user.avatarURL
    },
    author: {
      name: authName,
      icon_url: authIcon
    },
    fields: [
      {
        name: `:large_orange_diamond: Achievement Unlocked!`,
        value: `${data}`
      }
    ]
  }})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ACHIEVEMENT'],
  permLevel: 1
};

exports.help = {
  name: 'achievement',
  description: 'Give someone a cookie today. PermLVL 1.',
  usage: 'achievement [blue/yellow/red/green] [text]'
};