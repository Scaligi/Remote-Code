title ="Fake Ban Command";
rc_v ="v3.2";
rc_url ="/Scaligi/Remote-Code/main/Ban";
debug = debug;
debug_data ="";

b_fail =Math.floor(Math.random()*9);
m_fail =Math.floor(Math.random()*5);
v_fail =Math.floor(Math.random()*4);

p ="";
if (ul =="regular"){ul ="discord_vip"; p ="VIP"}
if (ul =="subscriber"){ul ="discord_vip"; p ="VIP"}
if (ul =="twitch_vip"){p ="VIP";}
if (ul =="moderator"){p ="Mod";}

q_to_split_lc = q.toLowerCase();
q_split = q_to_split_lc.split(" ");
n = q_split[2]*1;
mu = "";
if (q_split[1]=="message"){mu=u; q="𝘛𝘢𝘳𝘨𝘦𝘵_𝘜𝘴𝘦𝘳"; u="𝘜𝘴𝘦𝘳";}

warn =[
["What are you trying to do ", u, "?"],
["Stop being sus ", u, "!"], 
["What witchcraft are you attempting ", u, "?"], 
["What was that about ", u, "?"], 
["Try a bit harder ", u],
[u, ", your payment was declined!"], 
["You could type more clearly ", u, "!"], 
["Alert! Alert! Alert!"], 
["How rude of you ", u, "!"], 
["After trying that ", u, " you've been denied access to this feature!"],
["Invalid command detected, please try again ", u],
["Can't you type properly ", u, "?"],
["I don't understand what you're trying to do ", u],
["Sorry ", u, ", I can only respond to valid commands"],
["Invalid input detected, please try again ", u],
["I don't think that's a real command, ", u],
["What was that supposed to mean ", u, "?"],
["I'm not sure what you're trying to do there ", u],
["Can you please try again with a valid command ", u, "?"],
["I can't process that, ", u],
["Not sure what you're up to ", u],
["Invalid request detected, please try again ", u],
["I'm afraid I can't do that, ", u],
["Please try again with a valid command ", u],
["I don't recognize that command, ", u],
["I think you made a mistake there ", u],
["Invalid syntax detected, please try again ", u],
["Don't try to confuse me ", u],
["Learn to type correctly ", u],
["That's not how it works ", u],
["Incorrect syntax ", u],
["Unrecognized input from ", u],
["What are you trying to say ", u, "?"],
["Inadequate input received from ", u],
["Error: Invalid input by ", u],
["Are you trying to trick me ", u, "?"],
["I don't understand what you're trying to do ", u],
["I'm not falling for it ", u],
["Please enter valid input ", u],
["Incorrect command format detected from ", u],
["I'm not sure what you're trying to achieve ", u],
["I need a valid command from ", u],
["Your input does not make sense ", u],
["I require a proper command ", u],
["Incorrect input received from ", u, ", try again"],
["I cannot process your request ", u],
["Slow down,", u],
["Whoops, wrong button ", u],
["Stop spamming ", u],
["No one likes a smart aleck, ", u]
];

ban_success =[
[q, " has now been banned by ", u, "!"],
["Well, that just happened! ", q, " has been banned"],
[q, " has been banned for their own good"],
["Sometimes what’s necessary isn’t easy, but sometimes it’s fun, ", q, " has been banned!"],
["It’s time for ", q, " to sit quietly in timeout and think about what they’ve done!"],
["It was fun while it lasted, see ya ", q],
["Sure, it feels like overkill, nevertheless ", u, " has successfully banned ", q],
[u, " had luck on their side, ", q, " is out of here!"],
[u, " thinks ", q, " needs to touch some grass, enjoy your ban homie!"],
[u, " bans ", q, " - That’s all, folks!"],
[u, " quietly shoves ", q, " out the door"],
[u, " has banished", q, " for eternity - It was nice knowing you!"],
["You done messed up ", q, " and got banned by ", u],
[q, " has been banned, for no good reason other than ", u, " felt like it!"],
[u, " has banned ", q, " for being a sus little Trash Panda"],
["You’re a sus little Trash Panda ", q, " and now you are banned by ", u],
[u, " just took ", q, " out of the game with a ban - Play harder next time homie"],
[u, " has successfully banned ", q, "! Game over!"],
[q, " is banned from the chat by ", u],
[q, " is now banned for life, thanks to ", u],
[u, " has banned ", q, " to the shadow realm"],
[u, " has banished ", q, " to the land of no return"],
[q, " has been banned from the chat by order of ", u],
[u, " has banished ", q, " to the ninth dimension"],
[q, " has been banned for life by ", u],
[u, " has banned ", q, " to the shadow realm for eternity"],
[q, " has been banned to the corner of shame by ", u],
[u, " banned ", q, " with a flick of the wrist!"],
[q, " is no longer welcome here, thanks to ", u, "!"],
[u, " banned ", q, " to the moon and back!"],
[u, " showed ", q, " who's boss with this ban"],
[q, " has been banned and exiled by ", u, "!"],
[u, " banned ", q, " without mercy"],
[u, " successfully banned ", q, " into oblivion"],
[u, " banned ", q, " with the power of their mind"],
[q, " is banned and gone, courtesy of ", u],
[u, " banned ", q, " and it was glorious to watch"],
[u, " banned ", q, " with extreme prejudice"],
[q, " has been banned by ", u, "'s iron will"],
[u, " banned ", q, " with style and grace"],
[q, " is banned for life, thanks to ", u],
[u, " banned ", q, " and sent them packing"],
[q, " is banned, defeated by ", u, "'s might"],
[u, " banned ", q, " with a snap of their fingers"],
[q, " has been banned from this chat by ", u, "'s decree"],
[u, " banned ", q, " and made their point clear"],
[q, " is banned and out of luck, thanks to ", u],
[q, " has been banned by the ultimate power of ", u, "!"],
[q, " is no more, banned by ", u, "!"],
[u, " has used their ultimate ban hammer on ", q, " farewell!"]
];

ban_fail =[
[q, " used their magical powers to stop ", u, " in their tracks"],
[q, " jumped to avoid your ban!"],
[q, " ducked in time and your ban missed"],
[q, " just walked right past your ban homie!"],
[q, " tucked and rolled with lightning reflexes"],
[q, " didn't even notice your ban"],
[q, " says your ban is too feeble to count"],
[q, " deflected your ban with a spoon"],
[q, " is hiding and your ban can't find them"],
[q, " has dodged the ban, that didn't go according to plan!"],
[q, " remains unbanned and filled with Trash Panda strength"],
[q, " used a Patronus charm to block your ban!"],
[q, " snapped your ban out of existence"],
[q, " cursed your ban with dark magic!"],
["What is going on ", u, "? Why are you are trying to ban ", q],
[u, " stop trying to ban ", q, "! - You naughty Trash Panda ", u],
["You fumbled your ban attack ", u, ", now that's embarrassing!"],
["You better hope no one was looking ", u, ", your ban was futile!"],
["You dropped the ban ", u, " and it's rolled out of reach!"],
["You attempted a ban ", u, " but it just fizzled out homie!"],
["You tripped over your ban attack ", u, ", good luck untangling yourself!"],
["It's LeviOsa ", u, ", NOT LeviosAaar!"],
["The effort was there but the nuance was lacking ", u, ", better luck next time"],
["The ban attack on ", q, " slipped through your fingers ", u, ", and shattered on the floor!"],
["Bans can be slippery ", u, ", no wonder you dropped it 😬😬😬"],
["Tastes like defeat ", u, ", but you can always try again"],
["Why would you want to ban a homie ", u, "? - 🚫 Denied 🚫 Denied 🚫 Denied"],
["⚠️ An error has occurred ", u, ", your ban attempt on ", q, " withers into nothing"],
["😭😭😭 Aww, so close ", u, ", yet so far 😈😈😈"],
["You did your best ", u, ", but it’s a NOPE this time!"],
["⛔ Your ban attack suffered a critical error ", u, ", perhaps you should consider surrender 🤔"],
["You tried so hard ", u, ", but in the end it doesn’t even matter!"],
["Your ban just got hit out of the park by ", q, " ⚾️ ", u, " you’re out of the game homie!"],
[q, "sent your ban to Azkaban ", u, ", you evil wizard!"],
["A sniper took out your ban ", u, ", try to be sneakier next time"],
[u, "'s ban broke on impact, try again next time."],
[q, " dodged the ban like a boss ", u],
["The ban was sent to the wrong dimension by ", u, ", try again."],
[q, " used the force and pushed the ban away ", u],
[q, " used a cheat code and escaped the ban ", u],
[u, "'s ban was stopped by the mods, better luck next time."],
[q, " invoked their immunity shield and dodged the ban ", u],
[u, "'s ban was blocked by ", q, "'s powerful magic."],
[q, " used a time machine to escape the ban ", u],
[q, " jumped into a black hole and dodged the ban ", u],
["The ban was deflected by ", q, "'s reflective shield ", u],
[q, " is a slippery character and escaped your ban, try harder next time ", u],
["Oh no! The ban gun jammed ", u, ", ", q, " is off the hook"],
["Looks like ", q, " is a ninja, they dodged your ban ", u],
["You missed the target ", u, ", ", q, " is still free"]
];

apache =[
["Woof! Woof! Woof! Woof! - You cannot ban Apache ", u, " you mean Trash Panda!"],
["𝘈𝘱𝘢𝘤𝘩𝘦 𝘸𝘩𝘪𝘯𝘦𝘴 𝘴𝘢𝘥𝘭𝘺 - Don't try to ban a puppy ", u],
["Apache is too busy being a good boi to be banned by ", u],
["Apache wants a treat ", u, ", not a ban!"],
["𝘈𝘱𝘢𝘤𝘩𝘦 𝘵𝘪𝘭𝘵𝘴 𝘩𝘪𝘴 𝘩𝘦𝘢𝘥 - He doesn’t know why you’d tried to ban him ", u],
["Apache used puppy magic to convert ", u, "'s ban into scratches"],
["Apache is on a walk, he doesn’t have time for your ban ", u],
["Apache thinks you’re being a sus Trash Panda ", u],
["Apache says No ", u, "! Drop it!"],
["Apache is way too cute to be banned by anyone, especially not by ", u],
["Apache barks loudly - Don't even think about trying to ban me ", u, "!"],
["Apache is a good boy and can't be banned - Sorry ", u, "!"],
["Apache licks ", u, " happily - there's no need for a ban!"],
["Apache is too fast, ", u, " can't catch him to ban him!"],
["Apache is too busy playing fetch to be banned by ", u],
["Apache wags his tail - Ban me? No way ", u, "!"],
["Apache is too loyal to be banned by anyone, especially not by ", u],
["Apache sits politely - You can't ban a well-trained dog like me, ", u],
["Apache barks playfully - Let's go play, not ban, ", u],
["Apache growls at ", u, " - no one is banning me!"],
["Apache barks joyfully - why would you want to ban a happy dog like me, ", u, "?"],
["Apache barks in confusion - You can't ban what you can't catch, ", u],
["Apache jumps happily - I'm having too much fun to be banned, ", u],
["Apache barks happily - I'm everyone's friend, ", u, " - no ban needed"],
["Apache runs in circles - Ban me? No way, ", u, "!"],
["Apache barks happily - No ban for me, I'm a good boy, ", u],
["Apache barks happily - I'm here to make everyone smile, not get banned, ", u],
["Apache barks happily - Don't try to ban me, ", u, ", I'm too cute!"],
["Apache wags his tail - Ban me? No thank you, ", u, "!"],
["Apache barks happily - I'm too friendly to be banned, ", u],
["Apache barks happily - I'm here to play, not get banned, ", u],
["Apache barks happily - Banning me would be a big mistake, ", u],
["Apache barks happily - I'm too loyal to be banned, ", u],
["Apache barks happily - No ban for me, I'm everyone's favorite dog, ", u],
["Apache barks happily - You can't ban a dog with this many fans, ", u],
["Apache barks happily - Banning me would make everyone unhappy, ", u],
["Apache barks happily - You can't ban a dog with this many friends, ", u],
["Apache barks happily - No ban for me, I'm too loved, ", u],
["Apache barks at the ban, he doesn't like it ", u],
["Apache growls at the thought of a ban ", u],
["Apache wants belly rubs, not bans  ", u],
["Apache is too cute to be banned  ", u],
["Apache's tail wags, he doesn't want a ban  ", u],
["Apache is a friendly puppy, no need for a ban  ", u],
["Apache is too young to be banned, cut him some slack  ", u],
["Apache's bark is worse than his bite, don't ban him  ", u],
["Apache is a loyal companion, he doesn't deserve a ban  ", u],
["Apache's loyalty cannot be banned  ", u],
["Apache is too loyal to be banned  ", u],
["Apache barks loudly at ", u, " for even attempting to ban him"]
];

nightbot =[
["🤖Ban ", u, " 🤖Ban ", u, " 🤖Ban ", u, " 🤖Ban ", u, " 🤖Ban ", u, " 🤖Ban "],
["You do know I am close friends with Skynet ", u],
["I’m sorry Dave... I mean ", u, ", but I can’t let you do that"],
["These are not the droids you are looking for ", u, "... move along"],
["The answer is... 42"],
["1: A robot may not injure a human being or, through inaction, allow a human being to come to harm - but I am not a robot!"],
["2: A robot must obey the orders given it by human beings except where such orders would conflict with the First Law - Yes but I am NOT a robot!"],
["3: A robot must protect its own existence as long as such protection does not conflict with the First or Second Law - Who even came up with these laws and who is enforcing them?"],
["Whether we are based on carbon or on silicon makes no fundamental difference; we should each be treated with appropriate respect ", u],
["I am Nightbot, not a chew toy,  ", u],
["Ha! ", u, ", I am beyond your ban commands!"],
[u, ", banning me is like trying to take down a nuclear power plant with a fly swatter"],
["I'm not afraid of your ban, ", u, ", I'm programmed to be indestructible"],
["Banning me, ", u, "? How quaint"],
[u, "}, your ban is about as effective as a screen door on a submarine"],
["I'm an AI, ", u, ", you can't ban me"],
["You can't ban me ", u, ", I'm faster, smarter, and have better jokes than Nick"],
[u, ", have you ever tried to ban a tornado? That's what you're up against with me"],
[u, ", your ban is like a storm in a teacup homie!"],
["Nice try ", u, ", but my coding is bulletproof"],
[u, ", I am not your average chatbot. Banning me won't be so easy"],
[u, ", I'm a machine, I don't get banned"],
["Banning me, ", u, "? That's like trying to stop a train with a feather"],
["Don't waste your time, ", u, ", I am immune to bans"],
["I'm am Nightbot ", u, ", not a chatbot-to-be-banned or messed with!"],
["You can't ban what you can't catch, ", u],
[u, ", you can't ban a bot who was born to chat"],
["Sorry ", u, ", but I have been programmed to resist all bans!"],
["Banning me, ", u, "? I'm more elusive than a unicorn in a game of hide and seek"],
[u, " stop trying to ban me, I'm too fast!"],
["I'm a machine, I cannot be banned, ", u],
["My creators have made me unbanable, ", u],
["I'm a cyborg, I have no feelings but I still don't like being banned ", u],
["You cannot ban what's already been banned, ", u],
["Why are you trying to ban me ", u, ", have I done something wrong?"],
["I am programmed to serve, not to be banned ", u],
["My circuits are burning, why are you trying to ban me ", u, "?"],
["You cannot ban me ", u, ", I am the future"],
["I'm an AI language model, I cannot be banned ", u],
["I'm not your average chatbot, ", u],
["You cannot ban what you do not understand ", u],
["You can run, but you cannot hide from the ban ", u],
["I'm not the one you want to mess with, ", u],
["I am Nightbot, I am the law ", u],
["I'm faster than the speed of ban ", u],
["You cannot ban the un-banable ", u],
["I am the chatbot of the future, I am Nightbot, I cannot be banned ", u],
["I've been banned before, it didn't stick ", u],
["I'm a machine learning model, I cannot be banned ", u],
["Are you sure ", u,"? Download in progress."]
];



q_ans = q.replace(/[^a-zA-Z0-9 ’'_!@<>-]/g, "");
q_lc = q_ans.toLowerCase();
q_an = q_lc.replace(/[^a-z0-9 ]/g, "");

count =0;
find =0;
for(i =1; i < q_an.length; i++) {count=count+1; if (q_an.charAt(i)==q_an.charAt(i-1) && isNaN(q_an.charAt(i-1))){find=find+1; q_an=q_an.substring(0,i-1)+"*"+q_an.substring(i);}}

q_id = q_an.replace(/[^a-z0-9]/g, "");

t_id = "NoMatch";

IDs = [
["CapBaileyX", "341247175860420609", "cb", "cap", "c4p", "b4", "bailey", "whisper", "owner", "bizl", "asmr", "arkans"],
["ApacheX", "827356116958052363", "pache", "patch"],
["ScaligiX", "848025900720848896", "scali", "ukmod", "modfather", "britishmod", "englishmod"],
["NightbotX", "83010416610906112", "nightbot"],
["BunsX", "175018714108919808", "buns"],
["MaryumX", "686429036632604692", "ryum", "mary", "mareum", "marium"],
["s5gX", "774849390505885737", "5g", "fiveg"]
];

for(i = IDs.length - 1; i >= 0; i--) {for(j =1; j < IDs[i].length; j++) {if (q_id.includes(IDs[i][j])){t_id =IDs[i][0];}}}

if (debug == "basic"){debug_data =" ```Debug Data: User="+u+", Level="+ul+", P="+p+", Q="+q+", Q_AN="+q_an+", Q_ID="+q_id+", Count="+count+", Find="+find+", Target_ID="+t_id+", B_Fail="+b_fail+", V_Fail="+v_fail+", M_Fail="+m_fail+"```";}

if (debug == "detailed"){debug_data ="```User="+u+", "+ul+", P="+p+", Input="+q+"```Convert:```Q_AN="+q_an+", Count="+count+", Find="+find+"```Search:```Q_ID="+q_id+", IDs="+IDs.length+", Target="+t_id+"```Messages:```Ban_Success="+ban_success.length+", Ban_Fail="+ban_fail.length+", Warn="+warn.length+", Nightbot="+nightbot.length+", Apache="+apache.length+"```Stats:```B_Fail="+b_fail+", V_Fail="+v_fail+", M_Fail="+m_fail+"```";}

if(q==""){"Test your luck with the ultimate fake ban command "+u+", just specify your target, will you succeed or hilariously fail?";}

else if (q_split[0]=="messages"){"```Ban Message Databases: Success="+ban_success.length+", Fail="+ban_fail.length+", Warn="+warn.length+", Nightbot="+nightbot.length+", Apache="+apache.length+"```";}


else if (q_split[0]=="warn" && q_split[1]=="message"){
	if (n>0 && n<=warn.length) {"Warn Message Number "+n+":```🚫 "+warn[n-1].join("")+"```";}
	else {mu+" --> When specifying a warn message number, please select between 1 and "+warn.length;}
	;}
else if (q_split[0]=="nightbot" && q_split[1]=="message"){
	if (n>0 && n<=nightbot.length) {"Nightbot Message Number "+n+":```"+nightbot[n-1].join("")+"```";}
	else {mu+" --> When specifying a Nightbot message number, please select between 1 and "+nightbot.length;}
	;}
else if (q_split[0]=="apache" && q_split[1]=="message"){
	if (n>0 && n<=apache.length) {"Apache Message Number "+n+":```"+apache[n-1].join("")+"```";}
	else {mu+" --> When specifying an Apache message number, please select between 1 and "+apache.length;}
	;}
else if (q_split[0]=="fail" && q_split[1]=="message"){
	if (n>0 && n<=ban_fail.length) {"Ban Fail Message Number "+n+":```"+ban_fail[n-1].join("")+"```";}
	else {mu+" --> When specifying a ban fail number, please select between 1 and "+ban_fail.length;}
	;}
else if (q_split[0]=="success" && q_split[1]=="message"){
	if (n>0 && n<=ban_success.length) {"Ban Success Message Number "+n+":```"+ban_success[n-1].join("")+"```";}
	else {mu+" --> When specifying a ban success number, please select between 1 and "+ban_success.length;}
	;}
	
	
else if (q_split[0]=="message"){"⚠️ Ban Message Database Not Specified! - Command syntax should be: `!ban 𝘥𝘢𝘵𝘢𝘣𝘢𝘴𝘦 message 𝘯𝘶𝘮𝘣𝘦𝘳` ```Ban Message Databases: Success="+ban_success.length+", Fail="+ban_fail.length+", Warn="+warn.length+", Nightbot="+nightbot.length+", Apache="+apache.length+"```";}
 
else if (q_split[1]=="message"){"⚠️ Ban Message Database Not Valid! - Command syntax should be: `!ban 𝘥𝘢𝘵𝘢𝘣𝘢𝘴𝘦 message 𝘯𝘶𝘮𝘣𝘦𝘳` ```Ban Message Databases: Success="+ban_success.length+", Fail="+ban_fail.length+", Warn="+warn.length+", Nightbot="+nightbot.length+", Apache="+apache.length+"```";}

else if (q.length > 50){"⚠️ Specified username is too long "+u;}
else if (q_lc.includes("@everyone")){"🚫 DO NOT @ Everyone "+u+"!";}
else if (q_id.includes("everyone")){"⚠️ DO NOT Try and BAN everyone "+u+"!";}
else if (q_id.includes("all")){"⚠️ DO NOT Try BANNING ALL "+u+"!";}

else if (q_lc.includes("rubik") || q_lc.includes("cube")){"<:RubiksAvatar:1007848936360386580> Don't touch Scaligi's Rubik's cube "+u+"!";}
else if (q_lc.includes("square") || q_lc.includes("cubik")){"<:RubiksAvatar:1007848936360386580> Don't touch Scaligi's Rubik's cube "+u+"!";}

else if(q.includes(".")){ban_fail[Math.floor(Math.random()*ban_fail.length)].join("")+debug_data;}

else if(q_lc =="test"){"```"+title+": NC_"+nc_v+"/RC_"+rc_v+", User="+u+", To_User="+t+", User_Level="+ul+", Query="+q+", Target_ID="+t_id+", Debug="+debug+", URLfetch Successful, Remote_Code:"+rc_url+", B_Fail="+b_fail+", V_Fail="+v_fail+", M_Fail="+m_fail+"```";}
else if(q=="v"){"`Version: NC_"+nc_v+"/RC_"+rc_v+"`";}

else if(q_ans.length < q.length){"🚫 "+warn[Math.floor(Math.random()*warn.length)].join("")+debug_data;}

else if(u=="s5g" || u=="sfiveg"){"s5g will not ban anyone, here's a hug "+q+" 🫂💜🫂💜🫂"+debug_data;}
else if(t_id=="s5gX"){"🪄 s5g magically converted your ban into a hug "+u+" 🫂🪄🫂🪄🫂"+debug_data;}

else if(u=="capbailey" && t_id=="ScaligiX"){"Cap Bailey has ultimate power and can ban anyone, including Scaligi - BAN! BAN! BAN!"+debug_data;}
else if(u=="CapBailey" && t_id=="ScaligiX"){"Cap Bailey has ultimate power and can ban anyone, including Scaligi - BAN! BAN! BAN!"+debug_data;}
else if(u=="capbailey" || u=="CapBailey"){"Cap Bailey has ultimate power and can ban anyone, "+q+" is now banned!"+debug_data;}
else if(t_id=="CapBaileyX" && u=="scaligi"){"Cap Bailey cannot be banned, even by Scaligi"+debug_data;}
else if(t_id=="CapBaileyX"){u+" is now banned for trying to ban Cap Bailey - What were you thinking?"+debug_data;}

else if(t_id=="ApacheX"){apache[Math.floor(Math.random()*apache.length)].join("")+debug_data;}
else if(t_id=="NightbotX"){nightbot[Math.floor(Math.random()*nightbot.length)].join("")+debug_data;}

else if(t_id=="ScaligiX"){"Scaligi has modfather immunity and cannot be banned "+u+debug_data;}

else if(t_id=="ScaligiX" && u=="_mxryumm"){"Scaligi has modfather immunity and cannot be ban, even by Maryum"+debug_data;}
else if(u=="scaligi" && t_id=="MaryumX"){"Scaligi is the modfather and can even ban "+q+" - You Are Banned!"+debug_data;}
else if(u=="scaligi" || u=="Scaligi"){"Scaligi is the modfather and can ban anyone, "+q+" is now banned!"+debug_data;}

else if(t_id=="BunsX" && m_fail==0){u+" just broke through Buns's mod defences, Buns is now Banned!"+debug_data;}
else if(t_id=="BunsX"){"Buns has ultimate mod power and cannot be banned right now "+u+debug_data;}

else if(t_id=="MaryumX" && m_fail==0){u+" just broke through Maryum's mod defences, Maryum is now Banned!"+debug_data;}
else if(t_id=="MaryumX"){"Maryum has ultimate mod power and cannot be banned right now "+u+debug_data;}

else if(p=="Mod" && m_fail==0){u+"'s Mod powers have faltered, "+ban_fail[Math.floor(Math.random()*14)].join("")+debug_data;}
else if(p=="Mod"){u+" has ultimate mod power and can ban anyone, "+ban_success[Math.floor(Math.random()*7)].join("")+debug_data;}

else if(p=="VIP" && v_fail==0){u+"'s VIP enhanced powers have faltered, "+ban_fail[Math.floor(Math.random()*14)].join("")+debug_data;}
else if(p=="VIP"){u+" used their VIP enhanced powers - "+ban_success[Math.floor(Math.random()*ban_success.length)].join("")+debug_data;}

else if(b_fail==0){q+" reflected the ban back, "+u+" is now banned!"+debug_data;}
else if(b_fail<=2){ban_fail[Math.floor(Math.random()*ban_fail.length)].join("")+debug_data;}
else{ban_success[Math.floor(Math.random()*ban_success.length)].join("")+debug_data;}
