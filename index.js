const Discord = require('discord.js');
const client = new Discord.Client();
const cron = require('node-cron');
const moment = require('moment');
const pm = require('pretty-ms');
const chalk = require('chalk');
const randomPuppy = require('random-puppy');
const Gamedig = require('gamedig');
const prefix = 'h!';
client.on('ready', () => {
    let myGuild = client.guilds.cache.get('617769699521986570');
    let memberCount = myGuild.memberCount;
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('LOADING', { type: 'WATCHING' });
  setInterval(function() {
   client.user.setActivity(`Use ${prefix}help`, { type: 'WATCHING' });
   client.user.setActivity(`💥Members:${memberCount}`, { type: 'WATCHING' });
   client.user.setActivity(`Still Beta`, { type: 'WATCHING' });
}, 5000)
});
client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    if (command === 'meme') {
        let reddit = [
            "meme",
            "animemes",
            "MemesOfAnime",
            "animememes",
            "AnimeFunny",
            "dankmemes",
            "dankmeme",
            "wholesomememes",
            "MemeEconomy",
            "techsupportanimals",
            "meirl",
            "me_irl",
            "2meirl4meirl",
            "AdviceAnimals"
        ]

        let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

        message.channel.startTyping();

        randomPuppy(subreddit).then(async url => {
            await message.channel.send({
                files: [{
                    attachment: url,
                    name: 'meme.png'
                }]
            }).then(() => message.channel.stopTyping());
        }).catch(err => console.error(err));

    };
    if (command === 'type') {
                const owner = client.users.cache.get('532619967837896734');
        const { guild } = message
        const { name, region, memberCount, roles, channels, emojis, ownerID, verificationLevel, premiumSubscriptionCount, premiumTier, voiceStates } = guild
        const icon = guild.iconURL({ size: 2048, dynamic: true })
        const banner = guild.bannerURL({ size: 2048, dynamic: true })
const Loading = new Discord.MessageEmbed()
.addField('Loading...')
.setColor('ff0000')
.setAuthor('LOADING')
message.channel.send(Loading)
.then((message) => {
  setInterval(function() {

    message.edit(new Discord.MessageEmbed()
    .setTitle(`${name}`).setThumbnail(icon)
    .setColor("00FFFF").addField("🌏Server Region:", `${region}`, true)
    .addField("🌐Server Members:", `${memberCount}`, true)
    .addField("<a:gif_10:708752903913078944> Server Roles", `${roles.cache.size}`, true)
    .addField("<a:gif_38:757930271571050496> Server Emojis", `${emojis.cache.size}`, true)
    .addField("📣 Server Channels", `${channels.cache.size}`, true)
    .addField("<a:gif_8:683287662366425138> Server Voices", `${voiceStates.cache.size}`, true)
    .addField("<a:boost:765944412856385567>Server Boosts", `${premiumSubscriptionCount}`, true)
    .addField("<a:boost:765944412856385567>Server Boost Level", `${premiumTier}`, true)
    .addField("👑 Server Owner", `<@${ownerID}>`, true)
    .setFooter(`Codded By ${owner.tag}`, `${owner.displayAvatarURL({size: 2048, dynamic:true})}`)
    .setImage(banner))
 }, 5000)})
    }


    if (command === 'news') {
        message.react('✅')
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send("شما دسترسی لازم برای استفاده این دستور را ندارید :x:");
        }
        if (!args.length) {
            return message.channel.send("**لطفا ایدی چنل خود را مشخص کنید:x:**");
        }
        if (!args[1]) {
            return message.channel.send("**لطفا پیام خود را مشخص کنید:x:**");
        }
        if (args[0]) {
            return client.channels.cache.get(args[0]).send(`||@everyone||` + ` ${args[1]}`)
        }

    }
    if (command === 'kick') {

  if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("شما دسترسی اخراح کردن ندارید <a:738016054651125770:740118761192947755> ");

    const user = message.mentions.users.first();

    if (user) {

      const member = message.guild.member(user);

      if (member) {

        member

          .kick()

          .then(() => {

            const kick = new Discord.MessageEmbed()

           .setDescription(`${user.tag} اخراح شد <a:724267373766508554:740118782055546890>  `)

            message.channel.send(kick);

          })

          .catch(err => {

            

            const kick_err_1 = new Discord.MessageEmbed()

           .setColor('#ff0000')

          .setDescription("نمیتوان این کاربر را اخراج کرد <a:738016054651125770:740118761192947755> ")

            message.channel.send(kick_err_1);

            console.error(err);

          });

      } else {

        

        const kick_err_2 = new Discord.MessageEmbed()

       .setColor('#ff0000')

      .setDescription("این کاربر در این سرور نیست! <a:738016054651125770:740118761192947755> ")

        message.channel.send(kick_err_2);

      }

    } else {

      message.reply("یک کاربر برای اخراج کردن مینشن کنید <a:738016054651125770:740118761192947755> ");

    }

  


    }
    if (command === 'avatar') {
        message.react('✅')
        let embed = new Discord.MessageEmbed();
        if (!message.mentions.users.size) {
            embed.setTitle('Your avatar');
            embed.setDescription(`Links:\n[png](${message.author.displayAvatarURL({format: "png", size: 2048})}) | [jpg](${message.author.displayAvatarURL({format: "jpg", size: 2048})}) | [gif](${message.author.displayAvatarURL({format: "gif", size: 2048, dynamic: true})}) | [webp](${message.author.displayAvatarURL({format: "webp", size: 2048})})`);
            embed.setColor(0x00008b);
            embed.setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL({size: 2048, dynamic:true})}`);
            embed.setImage(message.author.displayAvatarURL({ size: 2048, dynamic: true }));
            message.channel.send(embed);
        } else {
            var randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const user = message.mentions.users.first();
            embed.setTitle(`‹${user.username}›'s avatar`);
            embed.setDescription(`Links:\n[png](${user.displayAvatarURL({format: "png", size: 2048})}) | [jpg](${user.displayAvatarURL({format: "jpg", size: 2048})}) | [gif](${user.displayAvatarURL({format: "gif", size: 2048, dynamic: true})}) | [webp](${user.displayAvatarURL({format: "webp", size: 2048})})`);
            embed.setColor(0x8b0000);
            embed.setTimestamp();
            embed.setFooter(`Requsted By : ${message.author.tag}`, `${message.author.displayAvatarURL({size: 2048, dynamic:true})}`);
            embed.setImage(client.users.cache.get(user.id).displayAvatarURL({ size: 2048, dynamic: true }));
            message.channel.send(embed);
        }
    }
    if (command === 'info') {
        message.react('✅')
        if (!message.mentions.users.size) {
            let now = Date.now(); // timestamp of now
            let createdAt = message.author.createdTimestamp; // timestamp of createdAt bot
            let age = now - createdAt; // diference between now and createdAt -> Gives you the age of the bot
            const owner = client.users.cache.get(process.env.owner);
            var randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const Accinfo = new Discord.MessageEmbed()
                .setColor(randomColor)
                .setThumbnail(message.author.displayAvatarURL({ size: 2048, dynamic: true }))
                .addField("🕒 Account Age :", "`" + `${pm(age, {verbose: false})}` + "`", false)
                .addField("🆔 Client Id :", `${message.author.id}`, true)
                .addField("💦 Avatar :", `[Click Here To Open](${message.author.displayAvatarURL({size: 2048, dynamic:true})})`, true)
                .setFooter(` ${message.author.tag}`, `${message.author.displayAvatarURL({size: 2048, dynamic:true})}`)
            message.channel.send(Accinfo);
        } else {
            const taggedUser = message.mentions.users.first();
            let now = Date.now(); // timestamp of now
            let createdAt = taggedUser.createdTimestamp; // timestamp of createdAt bot
            let age = now - createdAt; // diference between now and createdAt -> Gives you the age of the bot
            const owner = client.users.cache.get(process.env.owner);
            var randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const Accinfo = new Discord.MessageEmbed()
                .setColor(randomColor)
                .setThumbnail(taggedUser.displayAvatarURL({ size: 2048, dynamic: true }))
                .addField("🕒 Account Age :", "`" + `${pm(age, {verbose: false})}` + "`", false)
                .addField("🆔 Client Id :", `${taggedUser.id}`, true)
                .addField("💦 Avatar :", `[Click Here To Open](${taggedUser.displayAvatarURL({size: 2048, dynamic:true})})`, true)
                .setFooter(` ${taggedUser.tag}`, `${taggedUser.displayAvatarURL({size: 2048, dynamic:true})}`)
            message.channel.send(Accinfo);
        }
    }


    if (command === 'help') {
        message.react('✅')
        const owner = client.users.cache.get('532619967837896734');
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        const help = new Discord.MessageEmbed()
            .setTitle("Command List")
            .setColor(randomColor)
            .addField("`" + `🔰${prefix}info` + "`", "**For Get Your Account Info**")
            .addField("`" + `🔰${prefix}ping` + "`", "**For Get Ping**")
            .addField("`" + `🔰${prefix}server` + "`", "**For Get Server info**")
            .addField("`" + `🔰${prefix}avatar` + "`", "**For Get User Avatar**")
            .setFooter(`Codded By ${owner.tag}`, `${owner.displayAvatarURL({size: 2048, dynamic:true})}`)
        message.channel.send(help);
    }
    if (command === 'ping') {
        message.react('✅')
        const owner = client.users.cache.get('532619967837896734');
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        const ping = Date.now() - message.createdTimestamp;
        const pingm = new Discord.MessageEmbed()
            .setTitle("**Server Ping**")
            .setColor(randomColor)
            .setDescription(`\n\nThe server ping is${ping}ms <a:gif_7:683287629340737548>`)
            .setFooter(`Codded By ${owner.tag}`, `${owner.displayAvatarURL({size: 2048, dynamic:true})}`)
            .setThumbnail("https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-1/254000/37-512.png")
        message.channel.send(pingm);
    }
    if (command === 'server') {
        message.react('✅')
        const owner = client.users.cache.get('532619967837896734');
        const { guild } = message
        const { name, region, memberCount, roles, channels, emojis, ownerID, verificationLevel, premiumSubscriptionCount, premiumTier, voiceStates } = guild
        const icon = guild.iconURL({ size: 2048, dynamic: true })
        const banner = guild.bannerURL({ size: 2048, dynamic: true })


        if(!guild.bannerURL()){
        const nobanner = 'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/ce2ece60-9b32-11e6-95ab-00163ed833e7/260663710/the-test-fun-for-friends-screenshot.jpg'
        const server = new Discord.MessageEmbed()
            .setTitle(`${name}`)
            .setThumbnail(icon)
            .setColor("00FFFF")
            .addField("🌏Server Region:", `${region}`, true)
            .addField("🌐Server Members:", `${memberCount}`, true)
            .addField("<a:gif_10:708752903913078944> Server Roles", `${roles.cache.size}`, true)
            .addField("<a:gif_38:757930271571050496> Server Emojis", `${emojis.cache.size}`, true)
            .addField("📣 Server Channels", `${channels.cache.size}`, true)
            .addField("<a:gif_8:683287662366425138> Server Voices", `${voiceStates.cache.size}`, true)
            .addField("<a:boost:765944412856385567>Server Boosts", `${premiumSubscriptionCount}`, true)
            .addField("<a:boost:765944412856385567>Server Boost Level", `${premiumTier}`, true)
            .addField("👑 Server Owner", `<@${ownerID}>`, true)
            .setFooter(`Codded By ${owner.tag}`, `${owner.displayAvatarURL({size: 2048, dynamic:true})}`)
            .setImage(nobanner)
            message.channel.send(server);
}
else{
            const banner = guild.bannerURL({ size: 2048, dynamic: true })
            const server = new Discord.MessageEmbed()
            .setTitle(`${name}`)
            .setThumbnail(icon)
            .setColor("00FFFF")
            .addField("🌏Server Region:", `${region}`, true)
            .addField("🌐Server Members:", `${memberCount}`, true)
            .addField("<a:gif_10:708752903913078944> Server Roles", `${roles.cache.size}`, true)
            .addField("<a:gif_38:757930271571050496> Server Emojis", `${emojis.cache.size}`, true)
            .addField("📣 Server Channels", `${channels.cache.size}`, true)
            .addField("<a:gif_8:683287662366425138> Server Voices", `${voiceStates.cache.size}`, true)
            .addField("<a:boost:765944412856385567>Server Boosts", `${premiumSubscriptionCount}`, true)
            .addField("<a:boost:765944412856385567>Server Boost Level", `${premiumTier}`, true)
            .addField("👑 Server Owner", `<@${ownerID}>`, true)
            .setFooter(`Codded By ${owner.tag}`, `${owner.displayAvatarURL({size: 2048, dynamic:true})}`)
            .setImage(banner)
            message.channel.send(server);
}
        

    }
    if (command === 'log') {
        message.react('✅')
        const { guild } = message
        console.log(guild)
    }
});
client.on('guildMemberAdd', member => {
    const owner = client.users.cache.get('532619967837896734');
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const channel = client.channels.cache.get(process.env.join);
    // Do nothing if the channel wasn't found on this server

    const embed = new Discord.MessageEmbed()
        .setColor(randomColor)
        .setThumbnail(member.user.displayAvatarURL({ size: 2048, dynamic: true }))
        .setAuthor(`User Joined The Server`)
        .setDescription(`Wlcome: ${member}`)
        .setFooter(`Codded By ${owner.tag}`);
    channel.send(embed);
});

client.on('guildMemberRemove', member => {
    const owner = client.users.cache.get('532619967837896734');
    // Send the message to a designated channel on a server:
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const channel = client.channels.cache.get(process.env.left);
    // Do nothing if the channel wasn't found on this server

    const embed = new Discord.MessageEmbed()
        .setColor(randomColor)
        .setThumbnail(member.user.displayAvatarURL({ size: 2048, dynamic: true }))
        .setAuthor(`User Left The Server`)
        .setDescription(`Bye: ${member}`)
        .setFooter(`Codded By ${owner.tag}`);
    channel.send(embed);
});
client.on('messageDelete', async message => {
    // ignore direct messages
    if (!message.guild) return;

    const fetchedLogs = await message.guild.fetchAuditLogs({
        type: 'MESSAGE_DELETE'
    });

    let entry = fetchedLogs.entries.first();

    const owner = client.users.cache.get('532619967837896734');
    const Log = new Discord.MessageEmbed()

    .setColor('#ff5100')
        .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL({size: 2048})}`)
        .setFooter(`DeVeloPeD By ${owner.username}`, `${owner.displayAvatarURL({size: 2048, dynamic:true})}`)
        .setDescription(`🗑 **Message** Sent By <@${message.author.id}> \n** Deleted ** in ${message.channel} by ${entry.executor}`)
        .addField("💈 Message Content :", "`" + `${message.content}` + "`", false);

    return client.channels.cache.get(process.env.del).send(Log);


});
cron.schedule('* 10 * * * *', function() {
    const meme = client.channels.cache.get(process.env.meme);
    let reddit = [
        "meme",
        "animemes",
        "MemesOfAnime",
        "animememes",
        "AnimeFunny",
        "dankmemes",
        "dankmeme",
        "wholesomememes",
        "MemeEconomy",
        "techsupportanimals",
        "meirl",
        "me_irl",
        "2meirl4meirl",
        "AdviceAnimals"
    ]

    let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

    meme.startTyping();

    randomPuppy(subreddit).then(async url => {
        await meme.send({
            files: [{
                attachment: url,
                name: 'meme.png'
            }]
        }).then(() => meme.stopTyping());
    }).catch(err => console.error(err));

    console.log("Meme Sended")
});
client.login(process.env.token);

/*
var d = new Date.now()
        var g_h = d.getHours();
        var g_m = d.getMinutes();
        var g_s = d.getSeconds();
*/

