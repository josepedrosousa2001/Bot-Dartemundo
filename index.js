
const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const loadCommands = require('./commands/load-commands')
const loadInicial = require('./inicial/load-inicial')



const command = require('./command')
const firstMessage = require('./first-message')
const privateMessage = require('./private-message')


client.on('ready', async () => {
  console.log('Dartemundo está Online!')
  
  loadInicial(client)
  loadCommands(client)
 

  
////////////
  privateMessage(client, 'ola', 'olá')

////////////

  command(client, 'embed', (message) => {
    const logo =
      'https://yt3.ggpht.com/a-/AOh14GgD43Ka7oxkCrxPAXiIuY8-rG3Kb4h9dQuhulOH=s100-c-k-c0xffffffff-no-rj-mo'

    const embed = new Discord.MessageEmbed()
      .setTitle('Example text embed')
      .setURL('https://www.youtube.com/channel/UChPrh75CmPP9Ig6jISPnfNA')
      .setAuthor(message.author.username)
      .setImage(logo)
      .setThumbnail(logo)
      .setFooter('This is a footer')
      .setColor('#00AAFF')
      .addFields(
        {
          name: 'Field 1',
          value: 'Hello world',
          inline: true,
        },
        {
          name: 'Field 2',
          value: 'Hello world',
          inline: true,
        },
        {
          name: 'Field 3',
          value: 'Hello world',
          inline: true,
        },
        {
          name: 'Field 4',
          value: 'Hello world',
        }
      )

    message.channel.send(embed)
  })
})

client.login(config.token)