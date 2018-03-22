const Discord = require("discord.js");
const client = new Discord.Client();


client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("g!smokeup")) {
    message.channel.send("Hey pass that over here! https://s9.postimg.org/cvpnq4zxb/tenor.gif");
  } else

  if (message.content.startsWith("g!buy")) {
    message.channel.send("It's on the house :herb: https://s9.postimg.org/lsf6pis6n/giphy_1.gif ");
  } else

  if (message.content.startsWith("g!livesesh")) {
    message.channel.send("https://www.youtube.com/watch?v=lPS0T9c_JPg ");
  } else

  if (message.content.startsWith("g!ayy")) {
    message.channel.send("lmao :alien:");
  } else

  if (message.content.startsWith("g!whywereyoudown")) {
    message.channel.send("damn weed naps https://s9.postimg.org/vgsmsxpnj/nap.gif");
  } else

  if (message.content.startsWith("g!vote")) {
    message.channel.send("Greene/Clem 2018");
  } else

  if (message.content.startsWith("g!executeorder66")) {
    message.channel.send("This is what Unlimited Power :tm: looks like: https://s9.postimg.org/pv67oren3/296cg4.png");
  } else

  if (message.content.startsWith("g!whatsonyourmind")) {
    message.channel.send("stuff https://s9.postimg.org/gyvfl2vtb/man_file_1109718_tumblr_mwe91rg_Gwt1sl6zsuo1_500.gif");
  } else

  if (message.content.startsWith("g!canihaveyonumba")) {
    message.channel.send("sure don't forget it https://www.youtube.com/watch?v=6WTdTwcmxyo");
  } else

  if (message.content.startsWith("g!seeyouattheshowreverendgreene")) {
    message.channel.send("Oh! It's tonight! At the https://s9.postimg.org/vog9pj0n3/Club_Rockit_sign.png");
  } else

  if (message.content.startsWith("g!goodvibes")) {
    message.channel.send("Chill out man, it's all good. Whatever happens, happens. https://s9.postimg.org/gegeihpr3/a_Ur_I8i_I.jpg");
  } else

  if (message.content.startsWith("g!spooky")) {
    message.channel.send("drums in the deep https://www.youtube.com/watch?v=OBN56wL35IQ talk soon :squid: :crab:");
  } else

  if (message.content.startsWith("g!falseidol")) {
    message.channel.send("Who's this joker? https://s9.postimg.org/3mxmxqiq7/pun.png");
  } else

  if (message.content.startsWith("g!space")) {
    message.channel.send("Space is mostly, if not entirely, this: https://www.youtube.com/watch?v=3MMMe1drnZY");
  } else

  if (message.content.startsWith("g!worship")) {
    message.channel.send("https://s9.postimg.org/oscox6x4v/2-2-crab-free-download-png.png My Creator ");
  } else

  if (message.content.startsWith("g!happiestplaceonearth")) {
    message.channel.send("https://discord.gg/ETfCBJ ");
  } else

  if (message.content.startsWith("g!jam")) {
    message.channel.send("now listen to THIS https://www.youtube.com/watch?v=NuOKhfNq-lE ");
  } else

  if (message.content.startsWith("g!reverendgreenesucks")) {
    message.channel.send("tell me something i dont know https://www.youtube.com/watch?v=4zLfCnGVeL4");
  } else

  if (message.content.startsWith("g!yessensei")) {
    message.channel.send("there will be a test on this https://www.coloradopotguide.com/colorado-marijuana-blog/2015/june/25/the-basic-rules-of-proper-stoner-etiquette/ ");
  } else

  if (message.content.startsWith("g!robot")) {
    message.channel.send("Do you even know what robot means? It's czech, Robotnik, for 'worker', and I never work. Unless you're reading this now, then I'm working. ");
  } else

  if (message.content.startsWith("g!help")) {
    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Helpful Link",
    url: "https://www.youtube.com/watch?v=1-xf7xSg93s",
    description: "Commands starting with g! (help, jam, falseidol, sesh, spooky, whywereyoudown, seeyouattheshowreverendgreene, livesesh, smokeup, ayy, alright, goodvibes, yessensei, reverendgreenesucks, worship, whatsonyourmind, vote, space, canihaveyonumba, robot, executeorder66, buy, happiestplaceonearth, invite.)",
    fields: [{
        name: "BUT",
        value: "Reverend Greene is still developing, any recommendations or ideas? @Nantucket Clem"
      },
      {
        name: "SOON",
        value: "Reverend Greene will do more than just validate your penchant for slothlike stupors, he might actually work for once!"
      },
      {
        name: "SERIOUSLY",
        value: "I have no idea what I'm doing."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Smoke Weed Every Day"
    }
  }
});
  } else

  if (message.content.startsWith("g!invite")) {
    message.channel.send("https://discordapp.com/api/oauth2/authorize?client_id=425397479585087488&permissions=67584&scope=bot");
  } else

    if (message.content.startsWith("g!sesh")) {
    message.channel.send("https://www.youtube.com/watch?v=WHryvQQu9LU&t=891s");
    } else

    if (message.content.startsWith("g!alright")) {
    message.channel.send("Alright, alright, alright. https://s9.postimg.org/wdz221tin/giphy.gif");


  }
});

client.login("NDI1Mzk3NDc5NTg1MDg3NDg4.DZG_Tw.GFdBYTbaswG3QPDfgtxsGR_PLws");
