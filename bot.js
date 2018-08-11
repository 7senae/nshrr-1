
const Discord = require("discord.js");
const Client = new Discord.Client();


console.log("Welcome Again  by Fox!");


Client.on("guildMemberRemove", member => {
  member.send(`
**اهلن فيك في سيرفرنا  تشرفنا 
:heart:  سوف تقام فعاليت كبيره  والسيرفر قيد التحديث 
:kissing_heart:  واتمنه تشرفونا و تدخلون 

ادخل للسيرفر  
https://discord.gg/rnPa4gv
**
***========================================***
** Ahnk you in our server, we are honored
:heart: will be a significant effectiveness and the server is under update
:kissing_heart: And let us have a good time

join server  
https://discord.gg/rnPa4gv


**
[${member}]`);

  });
 

  Client.on('guildMemberAdd', member => {
  member.send(`
**اهلن فيك في سيرفرنا  تشرفنا 
:heart:  سوف تقام فعاليت كبيره  والسيرفر قيد التحديث 
:kissing_heart:  واتمنه تشرفونا و تدخلون 

ادخل للسيرفر  
https://discord.gg/rnPa4gv
**
***========================================***
** Ahnk you in our server, we are honored
:heart: will be a significant effectiveness and the server is under update
:kissing_heart: And let us have a good time

join server  
https://discord.gg/rnPa4gv


**
[${member}]`);


  });



Client.login("NDc2Njg3NDMwNDIzMDE5NTI5.DlB31Q.wKYp7Cc326gdJUu2G9HfTo2Sj7s");
