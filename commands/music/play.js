module.exports = ({
    name: "play",
    aliases: ['p'],
    description: "Play some music!",
    usage: "play <song/url>",
    category: "music",
    code: `$title[Song added to the queue!;$songInfo[url]]
    $author[Play Now 🎶 ;https://media.discordapp.net/attachments/945534689484099584/1080115858451476501/logo.gif]
      $addCmdReactions[✅]
      $thumbnail[$userAvatar[$clientID]]
      $description[
      **Music Name** : $playSong[$message;1m;yes;yes]
      $color[RANDOM]
      
      ]
    $footer[Requested by $userTag]
    $addTimestamp
    $onlyIf[$voiceID!=;{color:RANDOM}{description:You must be in a Voice Channel!}]
    $onlyIf[$message!=;{description: You have to specify a song name/url to play!}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]
    $suppressErrors[{color:RANDOM}{description:An error occurred! Please contact the Bot Developer if this keeps happening!}]
    $onlyBotPerms[speak;connect;{description:❌ I require these permissions - **Speak** and **Connect**}{color:RANDOM}]
    $image[https://cdn.discordapp.com/attachments/945534689484099584/1080122892467060896/tenor.gif]
    $botTyping[3s]`   
})