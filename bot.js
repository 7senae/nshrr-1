
const Discord = require("discord.js");
const Client = new Discord.Client();


console.log("Welcome Again  by Fox!");


Client.on("guildMemberRemove", member => {
  member.send(`***
@everyone || @here 
**FoxBot اخيرا تم افتتاح سيرفر  :white_check_mark: 
الرسمي  :rose: 
اتمنه دخولكم للسيرفر  واذا وصلنه 100 عضو  :kissing_closed_eyes: 
بسوي قيف اوي على  :wink: 
10 بوتات  :small_orange_diamond: 
على خادم لمدة سنه :smile: 
VPS و7  :heart: 
و 3 سيرفرات ماين كرافت  :money_mouth: 
و 20 ريج ايديت  :smile: 
فعاليه على  :slight_smile: 
6-
1 الف :heart_eyes: 
5-     
3 الف :thumbsup:  
4- 
7 الف :relaxed: 
3- 
10 الف :crown: 
2-
رانك مود :heart: 
1- 
بوت نشر لمدة اسبوع :trident: 

https://discord.gg/ZJAaxe

**
[${member}]**`);

  });
 

  Client.on('guildMemberAdd', member => {
  member.send(`***:
@everyone || @here 
**FoxBot اخيرا تم افتتاح سيرفر  :white_check_mark: 
الرسمي  :rose: 
اتمنه دخولكم للسيرفر  واذا وصلنه 100 عضو  :kissing_closed_eyes: 
بسوي قيف اوي على  :wink: 
10 بوتات  :small_orange_diamond: 
على خادم لمدة سنه :smile: 
VPS و7  :heart: 
و 3 سيرفرات ماين كرافت  :money_mouth: 
و 20 ريج ايديت  :smile: 
فعاليه على  :slight_smile: 
6-
1 الف :heart_eyes: 
5-     
3 الف :thumbsup:  
4- 
7 الف :relaxed: 
3- 
10 الف :crown: 
2-
رانك مود :heart: 
1- 
بوت نشر لمدة اسبوع :trident: 

https://discord.gg/ZJAaxe

**
[${member}]**`);


  });



Client.login("NDczNDYwODA2NTMzNzc1MzYw.DkCQhQ.9uzdehOGqu1lvgE14A6zaDSIrbQ");
