const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "{"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('help: {help', {type:"WATCHING"})
});


client.on('message', msg => {
    if (msg.content === prefix + "help"){
      msg.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: 'help for the bot',
        description: 'bot commands',
        fields: [
          {
            name: "{clear 1 > 99",
            value: "clear the channel ask"
          },
          {
              name: "{discord",
              value: "gives the link to join the discord of the bot"
          },
          {
            name: "{kick",
            value: "allowed to kick the person mention"
          },
          {
            name: "{ban",
            value: "allowed to ban the person mention"
          },
          {
            name: "{invite",
            value: "link to invite the bot"
          },
          {
            name: "{donation",
            value: "link for donation"
          },
          {
            name: '}info',
            value: 'gives information about the bot'
          }
        ],
        timestamp: new Date(),
        footer:{
          text: ''
        }
      }})
    }
  })

client.on('message', msg => {
    if(msg.content === prefix + 'discord'){
    var embed = new Discord.RichEmbed()
        .setAuthor(''+ client.user.username)
        .setTitle('(click DISCORD)')
        .setURL('https://discord.gg/H2VEPgk')
        .setDescription('thank you for joining us')
      msg.author.sendMessage(embed)
      msg.reply('look at your private message ')
    }
})

client.on('message', msg => {
    if(msg.content === prefix + 'invite'){
    var embed = new Discord.RichEmbed()
        .setAuthor(''+ client.user.username)
        .setTitle('https://discordapp.com/oauth2/authorize?client_id=570296825496600607&permissions=8&scope=bot')
        .setURL('https://discordapp.com/oauth2/authorize?client_id=570296825496600607&permissions=8&scope=bot')
        .setDescription('merci de minviter sur votre seveur')
      msg.author.sendMessage(embed)
      msg.reply('look at your private message ')
    }
})

client.on('message', msg => {
  if(msg.content === prefix + 'donation'){
  var embed = new Discord.RichEmbed()
      .setTitle('donation')
      .setURL('https://www.patreon.com/teledaybot')
      msg.author.sendMessage(embed)
      msg.reply('look at your private message ')
    }
})

client.on('message', msg => {
  var memberCount = client.users.size;
  var servercount = client.guilds.size;
  if(msg.content === prefix + "info")
  var embed = new Discord.RichEmbed()
      .setTitle("information sur le bot")
      .setColor("ff1b23")
      .addField("You are " + memberCount + " users to use me"," thank you to all of you !", false)
      .addField("I am on "+ servercount + " serveur "," thank you to all of you !", false)
      .setFooter("by TurnBass et oOTeamCocOo")
    msg.channel.send(embed)
})

client.on ("message", message => {
    if(!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "clear") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Bah nan ... It's not even today that you will use this command !!")
        let count = args[1]
        if (!count) return message.channel.send("Did you think I was going to guess how many messages you want to delete? Specifies a potato number.")
        if (isNaN(count)) return message.channel.send("Are you going to write a TRUE number?")
        if (count < 1 || count > 5000) return message.channel.send("Please enter a number between 1 and 5000")
        message.channel.bulkDelete(parseInt(count) + 1)
    }
});

client.on('message', message => {
  if (message.content.startsWith('{kick')) {
    const member = message.mentions.members.first()
    
    if (!message.member.hasPermission('KICK_MEMBERS')) {
      return message.channel.send("Bah nan ... It's not even today that you will use this command !!")
    }
    
    if (!member) {
      return message.reply(`Which user kick? mentioned on !:anguished:`)
    }

    if (!member.kickable) {
      return message.reply(`I can not kick it, sorry ! :disappointed_relieved:`)
    }

    return member
      .kick()
      .then(() => message.reply(`${member.user.tag} User Kick !:white_check_mark:`))
      .catch(error => message.reply(`Sorry, an error occured.`))
  }
})

client.on('message', message => {
  if (message.content.startsWith('{ban')) {
    const member = message.mentions.members.first()

    if (!message.member.hasPermission('BAN_MEMBERS')) {
    return message.channel.send("Bah nan ... It's not even today that you will use this command !!")
    }

    if (!member) {
      return message.reply(`Which user ban ? mentioned on !:anguished:`)
    }

    if (!member.kickable) {
      return message.reply(`Je peux pas le kick. désolé! :disappointed_relieved:`)
    }

    return member
      .ban()
      .then(() => message.reply(`${member.user.tag} User ban !:white_check_mark:`))
      .catch(error => message.reply(`Sorry, an error occured.`))
  }
})

client.login(process.env.TOKEN);
