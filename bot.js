
const Discord = require("discord.js");
const Client = new Discord.Client();


console.log("Welcome Again  by Fox!");


Client.on("guildMemberRemove", member => {
  member.send(`***
*:small_blue_diamond: - السلام عليكم ورحمة الله وبركاته ..

**ما تعرف يمكن الصدفة تخلق ايام وصحبة حلوة  .. :heart:
( فعاليات .. سوالف .. فرفشة يومية ) 
( فعاليات توزيع رتب وكريدت يومية ).
حياكم رابط السيرفر : 
༺   https://discord.gg/rnPa4gv ༻
**
[${member}]**`);

  });
 

  Client.on('guildMemberAdd', member => {
  member.send(`***:
*:small_blue_diamond: - السلام عليكم ورحمة الله وبركاته ..

**ما تعرف يمكن الصدفة تخلق ايام وصحبة حلوة  .. :heart:
( فعاليات .. سوالف .. فرفشة يومية ) 
( فعاليات توزيع رتب وكريدت يومية )
حياكم رابط السيرفر : 
༺   https://discord.gg/rnPa4gv ༻
**
[${member}]**`);


  });



Client.login("NDczNDYwODA2NTMzNzc1MzYw.DkCQhQ.9uzdehOGqu1lvgE14A6zaDSIrbQ");
