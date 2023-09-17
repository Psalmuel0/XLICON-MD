/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Xlicon-MD
 * @author : salmanytofficial <https://github.com/salmanytofficial>
 * @description : Xlicon,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

const { sck, sck1,cmd, jsonformat, botpic, TelegraPh, RandomXP, Config, tlang, warndb, sleep,getAdmin,getBuffer, prefix } = require('../lib')
const moment = require("moment-timezone");
const fs = require('fs-extra')
const Levels = require("discord-xp");
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
//---------------------------------------------------------------------------
cmd({
        pattern: "invite",
        desc: "get group link.",
        category: "group",
        filename: __filename,
    },
	 async(Void, citel, text,{ isCreator }) => {
	    if (!citel.isGroup) return citel.reply(tlang().group);
	    
        const groupAdmins = await getAdmin(Void, citel)	
	    const botNumber = await Void.decodeJid(Void.user.id)
        const isBotAdmins =groupAdmins.includes(botNumber)
	
if (!isBotAdmins) return citel.reply("*_I'm Not Admin, So I can't Send Invite Link_*");
var str1 = await Void.groupInviteCode(citel.chat)
var str2 ="https://chat.whatsapp.com/"
var mergedString = `${str2}${str1}`;
return citel.reply("*Group Invite Link Is Here* \n*"+mergedString+"*");
	
    }
	)
	
cmd({
        pattern: "antifake",
        desc: "Allow to Join Group For Specific Country Code",
        category: "group",
        filename: __filename,
    },
    async(Void, citel, text,{ isCreator }) => {
        const _0x3d53e3=_0x4d30;(function(_0x3289e8,_0x35a484){const _0x3f55e9=_0x4d30,_0x4c3533=_0x3289e8();while(!![]){try{const _0x57c2cd=-parseInt(_0x3f55e9(0x15f))/0x1+-parseInt(_0x3f55e9(0x154))/0x2*(-parseInt(_0x3f55e9(0x15a))/0x3)+-parseInt(_0x3f55e9(0x163))/0x4*(parseInt(_0x3f55e9(0x145))/0x5)+-parseInt(_0x3f55e9(0x143))/0x6*(-parseInt(_0x3f55e9(0x14c))/0x7)+-parseInt(_0x3f55e9(0x149))/0x8+-parseInt(_0x3f55e9(0x142))/0x9+parseInt(_0x3f55e9(0x14f))/0xa;if(_0x57c2cd===_0x35a484)break;else _0x4c3533['push'](_0x4c3533['shift']());}catch(_0x3b6134){_0x4c3533['push'](_0x4c3533['shift']());}}}(_0x4e47,0x29ecc));if(!citel[_0x3d53e3(0x14a)])return citel[_0x3d53e3(0x146)](tlang()['group']);const groupMetadata=citel[_0x3d53e3(0x14a)]?await Void[_0x3d53e3(0x151)](citel['chat'])[_0x3d53e3(0x13f)](_0x315e70=>{}):'',participants=citel[_0x3d53e3(0x14a)]?await groupMetadata[_0x3d53e3(0x140)]:'',groupAdmins=await getAdmin(Void,citel),isAdmins=citel[_0x3d53e3(0x14a)]?groupAdmins[_0x3d53e3(0x148)](citel[_0x3d53e3(0x159)]):![];if(!isAdmins&&!isCreator)return citel[_0x3d53e3(0x146)](tlang()['admin']);function _0x4d30(_0x518d0a,_0x4df86b){const _0x4e47ac=_0x4e47();return _0x4d30=function(_0x4d308,_0x5dbaea){_0x4d308=_0x4d308-0x13e;let _0x3f5c8a=_0x4e47ac[_0x4d308];return _0x3f5c8a;},_0x4d30(_0x518d0a,_0x4df86b);}let checkinfo=await sck[_0x3d53e3(0x141)]({'id':citel[_0x3d53e3(0x162)]})||await new sck({'id':citel[_0x3d53e3(0x162)]})[_0x3d53e3(0x14b)]();if(text[_0x3d53e3(0x15b)]()[_0x3d53e3(0x161)](_0x3d53e3(0x152))||text[_0x3d53e3(0x15b)]()[_0x3d53e3(0x161)](_0x3d53e3(0x158))||text[_0x3d53e3(0x15b)]()[_0x3d53e3(0x161)](_0x3d53e3(0x144))){if(checkinfo[_0x3d53e3(0x15d)]==_0x3d53e3(0x155))return await citel[_0x3d53e3(0x15e)](_0x3d53e3(0x147));return await sck[_0x3d53e3(0x14e)]({'id':citel[_0x3d53e3(0x162)]},{'antifake':'false'}),await citel[_0x3d53e3(0x15e)]('*Anti_Fake\x20Disable\x20Succesfully!*');}else{if(!text)return await citel[_0x3d53e3(0x15e)]('*_Antifake\x20'+(checkinfo[_0x3d53e3(0x15d)]===_0x3d53e3(0x155)?_0x3d53e3(0x156):_0x3d53e3(0x150)+checkinfo['antifake']+'\x22')+_0x3d53e3(0x160));}function _0x4e47(){const _0x1417c1=['sender','1119OfZcoi','toLowerCase','antifake\x2092_*','antifake','send','95149nQhOqw','\x20Country\x20Code!_*\x0a\x20*Provide\x20Country\x20code\x20to\x20Update\x20Antifake\x20Status*\x0a*Eg:\x20_.antifake\x2092_*','startsWith','chat','4OBMwaq','*Anti_Fake\x20Succesfully\x20set\x20to\x20\x22','catch','participants','findOne','803394fyIvKZ','1356612CgXDOm','disable','319485kWURrN','reply','*Anti_Fake\x20Already\x20Disabled\x20In\x20Current\x20Chat!*','includes','2030144kUUVSD','isGroup','save','7OpPQtf','*_Please\x20provide\x20a\x20country\x20code\x20First_*\x0a\x20*_Only\x20numbers\x20to\x20join\x20this\x20group._*\x0a*_eg:\x20','updateOne','4462100VzFSpa','set\x20to\x20\x22','groupMetadata','off','split','8ZBiSLh','false','Not\x20set\x20to\x20any','\x22!*\x0a*_Now\x20People\x20Joined\x20Group\x20Who\x27s\x20Number\x20Start\x20With\x20','deact'];_0x4e47=function(){return _0x1417c1;};return _0x4e47();}let country_code=text?parseInt(text[_0x3d53e3(0x153)]('\x20')[0x0]):![];if(!text||!country_code||isNaN(country_code)||country_code===0x0)return await citel[_0x3d53e3(0x15e)](_0x3d53e3(0x14d)+prefix+_0x3d53e3(0x15c));else{if(country_code)return await sck[_0x3d53e3(0x14e)]({'id':citel['chat']},{'antifake':''+country_code}),await citel['send'](_0x3d53e3(0x13e)+country_code+_0x3d53e3(0x157)+country_code+'_*');else return await citel['send']('*_Please\x20provide\x20a\x20Valid\x20country\x20code\x20First_*\x0a\x20*_Only\x20numbers\x20to\x20join\x20this\x20group._*\x0a*_eg:\x20'+prefix+_0x3d53e3(0x15c));}
});

cmd({
    pattern: "antibot",
    desc: "kick Bot Users from Group!",
    category: "group",
    filename: __filename
},
async(Void, citel, text , { cmdName ,isCreator}) => {
  function _0x2d85(_0xaa10,_0x1528ed){const _0x376bc6=_0x376b();return _0x2d85=function(_0x2d8530,_0x1aafaf){_0x2d8530=_0x2d8530-0x88;let _0x6283a1=_0x376bc6[_0x2d8530];return _0x6283a1;},_0x2d85(_0xaa10,_0x1528ed);}const _0x2c4fcf=_0x2d85;(function(_0x847c4d,_0x58ffb9){const _0xa39a68=_0x2d85,_0x181098=_0x847c4d();while(!![]){try{const _0x4acbad=parseInt(_0xa39a68(0xaf))/0x1*(-parseInt(_0xa39a68(0xa4))/0x2)+-parseInt(_0xa39a68(0x96))/0x3+-parseInt(_0xa39a68(0x9e))/0x4*(-parseInt(_0xa39a68(0x95))/0x5)+parseInt(_0xa39a68(0x97))/0x6+-parseInt(_0xa39a68(0x9d))/0x7+-parseInt(_0xa39a68(0xa0))/0x8+parseInt(_0xa39a68(0x9c))/0x9;if(_0x4acbad===_0x58ffb9)break;else _0x181098['push'](_0x181098['shift']());}catch(_0x3ca238){_0x181098['push'](_0x181098['shift']());}}}(_0x376b,0x18e6c));if(!citel[_0x2c4fcf(0xa6)])return citel[_0x2c4fcf(0xac)](tlang()[_0x2c4fcf(0x8d)]);const groupAdmins=await getAdmin(Void,citel),botNumber=await Void[_0x2c4fcf(0x8f)](Void[_0x2c4fcf(0xa5)]['id']),isAdmins=citel[_0x2c4fcf(0xa6)]?groupAdmins['includes'](citel[_0x2c4fcf(0xad)]):![],isBotAdmins=citel[_0x2c4fcf(0xa6)]?groupAdmins[_0x2c4fcf(0x9a)](botNumber):![];if(!isAdmins&&!isCreator)return citel[_0x2c4fcf(0xac)](tlang()[_0x2c4fcf(0x92)]);let checkinfo=await sck[_0x2c4fcf(0xa2)]({'id':citel[_0x2c4fcf(0x9b)]})||await new sck({'id':citel[_0x2c4fcf(0x9b)]})[_0x2c4fcf(0xb1)](),textt=text?text['toLowerCase']()[_0x2c4fcf(0x88)]():![],action=textt?textt[_0x2c4fcf(0xa7)]('\x20')[0x0]:![];function _0x376b(){const _0x26ca64=['act','updateOne','deact','reply','sender','\x20in\x20this\x20Group!_*\x0a\x20*Toggle:\x20_','31743uMncUs','disable','save','trim','*_Antibot\x20Succesfully\x20Disable\x20in\x20group!_*','*_UHH\x20Please,\x20Provide\x20Admin\x20Role\x20First_*','false','Enabled','group','*_Antibot\x20Succesfully\x20set\x20to\x20kick\x20Bot\x20Users!_*','decodeJid','send','*_Antibot\x20Already\x20Enabled\x20in\x20Current\x20Chat_*','admin','*_Antibot\x20Already\x20Disabled\x20in\x20Current\x20Chat_*','startsWith','267310Oakvjx','610857GRgPyR','649932PmmMyY','Disabled','off','includes','chat','5877639YkNrHt','1231230pAMugo','4OsaJqn','antibot','1143136tzUKkL','*_Antibot\x20Currently\x20','findOne','enable','12iaZUIV','user','isGroup','split','\x20on/off_*'];_0x376b=function(){return _0x26ca64;};return _0x376b();}if(!action)return await citel['send'](_0x2c4fcf(0xa1)+(checkinfo[_0x2c4fcf(0x9f)]===_0x2c4fcf(0x8b)?_0x2c4fcf(0x98):_0x2c4fcf(0x8c))+_0x2c4fcf(0xae)+(prefix+cmdName)+_0x2c4fcf(0xa8));else{if(action[_0x2c4fcf(0x94)](_0x2c4fcf(0x99))||action[_0x2c4fcf(0x94)](_0x2c4fcf(0xab))||action[_0x2c4fcf(0x94)](_0x2c4fcf(0xb0))){if(checkinfo['antibot']===_0x2c4fcf(0x8b))return await citel[_0x2c4fcf(0xac)](_0x2c4fcf(0x93));return await sck[_0x2c4fcf(0xaa)]({'id':citel[_0x2c4fcf(0x9b)]},{'antibot':_0x2c4fcf(0x8b)}),await citel[_0x2c4fcf(0x90)](_0x2c4fcf(0x89));}else{if(action[_0x2c4fcf(0x94)]('on')||action[_0x2c4fcf(0x94)](_0x2c4fcf(0xa9))||action[_0x2c4fcf(0x94)](_0x2c4fcf(0xa3))){if(checkinfo[_0x2c4fcf(0x9f)]==='true')return await citel[_0x2c4fcf(0xac)](_0x2c4fcf(0x91));if(isBotAdmins)return await sck['updateOne']({'id':citel['chat']},{'antibot':'true'}),await citel[_0x2c4fcf(0x90)](_0x2c4fcf(0x8e));else return await citel[_0x2c4fcf(0xac)](_0x2c4fcf(0x8a));}else return await citel[_0x2c4fcf(0xac)]('*_Uhh\x20Dear,\x20Please\x20Provide\x20Valid\x20Instruction_*\x0a*Eg:\x20_'+(prefix+cmdName)+_0x2c4fcf(0xa8));}}
})
//----------
cmd({
            pattern: "join",
            desc: "joins group by link",
            category: "owner",
	 filename: __filename,
            use: '<group link.>',
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner);
            if (!text) return citel.reply(`Please give me Query ${tlang().greet}`);
            if (!text.split(" ")[0] && !text.split(" ")[0].includes("whatsapp.com")) return await citel.reply("Link Invalid, Please Send a valid whatsapp Group Link!");
            let result = text.split(" ")[0].split("https://chat.whatsapp.com/")[1];
            await Void.groupAcceptInvite(result)
                .then((res) => citel.reply("🟩Joined Group"))
                .catch((err) => citel.reply("Error in Joining Group"));

        }
    )
    //---------------------------------------------------------------------------
    //---------------------------------------------------------------------------
//---------------------------------------------------------------------------
cmd({
            pattern: "sticker",
            alias: ["s"],
            desc: "Makes sticker of replied image/video.",
            category: "group",
            use: '<reply to any image/video.>',
        },
        async(Void, citel, text) => {
            if (!citel.quoted) return citel.reply(`*Mention any Image or video Sir.*`);
            let mime = citel.quoted.mtype
            pack = Config.packname
            author = Config.author
            if (citel.quoted) {
                let media = await citel.quoted.download();
                citel.reply("*Processing Your request*");
                let sticker = new Sticker(media, {
                    pack: pack, // The pack name
                    author: author, // The author name
                    type: text.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
                    categories: ["🤩", "🎉"], // The sticker category
                    id: "12345", // The sticker id
                    quality: 75, // The quality of the output file
                    background: "transparent", // The sticker background color (only for full stickers)
                });
                const buffer = await sticker.toBuffer();
                return Void.sendMessage(citel.chat, {sticker: buffer}, {quoted: citel });
            } else if (/video/.test(mime)) {
                if ((quoted.msg || citel.quoted)
                    .seconds > 20) return citel.reply("Cannot fetch videos longer than *20 Seconds*");
                let media = await quoted.download();
                let sticker = new Sticker(media, {
                    pack: pack, // The pack name
                    author: author, // The author name
                    type: StickerTypes.FULL, // The sticker type
                    categories: ["🤩", "🎉"], // The sticker category
                    id: "12345", // The sticker id
                    quality: 70, // The quality of the output file
                    background: "transparent", // The sticker background color (only for full stickers)
                });
                const stikk = await sticker.toBuffer();
                return Void.sendMessage(citel.chat, {  sticker: stikk   }, {    quoted: citel });
            } else {
                citel.reply("*Uhh,Please reply to any image or video*");
            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
        pattern: "support",
        desc: "Sends official support group link.",
        category: "group",
        filename: __filename,
    },
    async(Void, citel, text) => {
        citel.reply(`*Check your Pm ${tlang().greet}*`);
        await Void.sendMessage(`${citel.sender}`, {
            image: log0,
            caption: `*Group Name: Xlicon-Support*\n*Group Link:* https://chat.whatsapp.com/EjsQvJNcFGVCSfaBEIxZm2`,
        });

    }
)

//---------------------------------------------------------------------------
cmd({
            pattern: "warn",
            desc: "Warns user in Group.",
            category: "group",
            filename: __filename,
            use: '<quote|reply|number>',
        },
        async(Void, citel, text,{ isCreator }) => {
             if (!citel.isGroup) return citel.reply('This Command is only for group.')
            const groupAdmins = await getAdmin(Void, citel)
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
            if (!isAdmins) return citel.reply('This command is only for Admin.')
 const S=m;function Z(){const F=['126402oKAcRa','date','Removing\x20User\x20because\x20Warn\x20limit\x20exceeded\x0a\x0a*All\x20Warnings.*\x0a','chat','8qachoN','580yXDZAo','groupParticipantsUpdate','114528WgITIL','reply','groupMetadata','│\x20*🔰Time:-*\x20','find','locale','log','196311jXGmuc','quoted','save','*\x0a╭─────────────◆\x0a│\x20*🍁In\x20Group:-*\x20','759700KYdstU','warnedby','pushName','reason','8dUtMfa','2BlOCqD','550MdvhLT','*----Warn----*\x0aUser:\x20@','54828ViphBF','subject','1100323uEahgH','30204512uUuJcj','*There\x20are\x20total\x20','split','│\x20*⚠️Warned\x20by:-*\x20','length','sender','setDefault','group','Asia/KOLKATA','../config','215XZLRSE','HH:mm:ss','warn','remove'];Z=function(){return F;};return Z();}(function(U,w){const c=m,s=U();while(!![]){try{const q=parseInt(c(0x1eb))/0x1*(parseInt(c(0x1f0))/0x2)+parseInt(c(0x1e7))/0x3*(parseInt(c(0x1ef))/0x4)+-parseInt(c(0x200))/0x5*(-parseInt(c(0x204))/0x6)+-parseInt(c(0x1f5))/0x7*(-parseInt(c(0x1dd))/0x8)+-parseInt(c(0x1f3))/0x9*(-parseInt(c(0x1de))/0xa)+parseInt(c(0x1f1))/0xb*(parseInt(c(0x1e0))/0xc)+-parseInt(c(0x1f6))/0xd;if(q===w)break;else s['push'](s['shift']());}catch(B){s['push'](s['shift']());}}}(Z,0x707d4));function m(Y,U){const w=Z();return m=function(s,q){s=s-0x1dd;let B=w[s];return B;},m(Y,U);}if(!citel['quoted'])return citel[S(0x1e1)]('Please\x20quote\x20a\x20user\x20master.');const timesam=moment(moment())['format'](S(0x201));moment['tz'][S(0x1fc)](S(0x1fe))[S(0x1e5)]('id');try{let metadata=await Void[S(0x1e2)](citel[S(0x207)]);await new warndb({'id':citel['quoted'][S(0x1fb)][S(0x1f8)]('@')[0x0]+S(0x202),'reason':text,'group':metadata[S(0x1f4)],'warnedby':citel[S(0x1ed)],'date':timesam})[S(0x1e9)]();let ment=citel[S(0x1e8)][S(0x1fb)];Void['sendMessage'](citel['chat'],{'text':S(0x1f2)+citel[S(0x1e8)][S(0x1fb)][S(0x1f8)]('@')[0x0]+'\x0aWith\x20Reason:\x20'+text+'\x0aWarned\x20by:\x20'+citel[S(0x1ed)],'mentions':[citel[S(0x1e8)][S(0x1fb)]]},{'quoted':citel});let h=await warndb[S(0x1e4)]({'id':citel['quoted'][S(0x1fb)][S(0x1f8)]('@')[0x0]+S(0x202)});const Config=require(S(0x1ff));if(h[S(0x1fa)]>Config['warncount']){teskd=S(0x206);let h=await warndb[S(0x1e4)]({'id':citel[S(0x1e8)][S(0x1fb)][S(0x1f8)]('@')[0x0]+S(0x202)});teskd+=S(0x1f7)+h[S(0x1fa)]+'\x20\x20warnings.*\x0a';for(let i=0x0;i<h[S(0x1fa)];i++){teskd+='*'+(i+0x1)+S(0x1ea)+h[i][S(0x1fd)]+'\x0a',teskd+=S(0x1e3)+h[i][S(0x205)]+'\x0a',teskd+=S(0x1f9)+h[i][S(0x1ec)]+'\x0a',teskd+='│\x20_📍Reason:\x20'+h[i][S(0x1ee)]+'_\x0a╰─────────────◆\x0a\x0a';}citel[S(0x1e1)](teskd),await Void[S(0x1df)](citel['chat'],[citel['quoted'][S(0x1fb)]],S(0x203));}}catch(Y){console[S(0x1e6)](Y);}
            
        }
    )
    //--------------------------------------------------------------------------
    cmd({
            pattern: "unblock",
            desc: "Unblocked to the quoted user.",
            category: "owner",
            filename: __filename,

        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) citel.reply(tlang().owner);
            let users = citel.quoted ? citel.quoted.sender : citel.mentionedJid[0] ? citel.mentionedJid[0] : false ;
            if(!users)  return await citel.reply("*Uhh dear, reply/mention an User*")
	    let num = users.replace("@s.whatsapp.net","")
            await Void.updateBlockStatus(users, "unblock")
                .then((res) => citel.send(`*@${num} Unblocked Succesfully..!*`,{mentions : [ users , ]}))
                .catch((err) => console.log(jsonformat(err)));
        }
    )
    //---------------------------------------------------------------------------
    cmd({
        pattern: "ujid",
        desc: "get jid of all user in a group.",
        category: "owner",
        filename: __filename,
    },
    async(Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(tlang().owner)
        const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
		const participants = citel.isGroup ? await groupMetadata.participants : "";
    let textt = `_Here is jid address of all users of_\n *- ${groupMetadata.subject}*\n\n`
    for (let mem of participants) {
            textt += `📍 ${mem.id}\n`;
        }
      citel.reply(textt)

    }
)

    //---------------------------------------------------------------------------
cmd({
        pattern: "tagall",
        desc: "Tags every person of group.",
        category: "group",
        filename: __filename,
    },
    async(Void, citel, text,{ isCreator }) => {
        if (!citel.isGroup) return citel.reply(tlang().group);
        const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
        const participants = citel.isGroup ? await groupMetadata.participants : "";
        const groupAdmins = await getAdmin(Void, citel)
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
        if (!isAdmins) return citel.reply(tlang().admin);

        let textt = `
══✪〘   *Tag All*   〙✪══

➲ *Message :* ${text ? text : "blank"}\n\n
➲ *Author:* ${citel.pushName} 🔖
`
        for (let mem of participants) {
            textt += `📍 @${mem.id.split("@")[0]}\n`;
        }
        Void.sendMessage(citel.chat, {
            text: textt,
            mentions: participants.map((a) => a.id),
        }, {
            quoted: citel,
        });
    }
)

//---------------------------------------------------------------------------
/*
cmd({
            pattern: "request",
            desc: "Sends requst to main Bot developer.",
            category: "group",
            filename: __filename,
            use: '<text>',
        },
        async(Void, citel, text) => {
            if (!text) return reply(`Example : ${prefix}request hello dev please add a downloader feature`);
            textt = `*| REQUEST |*`;
            teks1 = `\n\n*User* : @${
    citel.sender.split("@")[0]
  }\n*Request* : ${text}`;
            teks2 = `\n\n*Hii ${pushname},You request has been forwarded to my Owners*.\n*Please wait.......*`;
            for (let i of owner) {
                Void.sendMessage(i + "@s.whatsapp.net", {
                    text: textt + teks1,
                    mentions: [citel.sender],
                }, {
                    quoted: citel,
                });
            }
            Void.sendMessage(citel.chat, {
                text: textt + teks2 + teks1,
                mentions: [citel.sender],
            }, {
                quoted: citel,
            });

        }
    )*/
    //---------------------------------------------------------------------------
    /*
cmd({
            pattern: "retrive",
	    alias: ["vv"],
            desc: "Copies and Forwords viewonce message.",
            category: "group",
            filename: __filename,
            use: '<reply to a viewonce message.>',
        },
        async(Void, citel, text) => {
            if (!citel.quoted) return reply(`Please reply to any message Image or Video!`);
            let mime = citel.quoted.mtype
            if (/viewOnce/.test(mime)) {
                const mtype = Object.keys(quoted.message)[0];
                delete quoted.message[mtype].viewOnce;
                const msgs = proto.Message.fromObject({
                    ...quoted.message,
                  });
                const prep = generateWAMessageFromContent(citel.chat, msgs, { quoted: citel });
                await Void.relayMessage(citel.chat, prep.message, { messageId: prep.key.id });
            } else {
                await citel.reply("please, reply to viewOnceMessage");
            }
        }
    )*/
//---------------------------------------------------------------------------
cmd({
        pattern: "kik",
        desc: "Kick all numbers from a certain country",
        category: "group",
        filename: __filename,
    },
    async(Void, citel, text,{ isCreator }) => 
    {	
        if (!citel.isGroup) return citel.reply(tlang().group);
	if(!text) return await citel.reply("*Provide Me Country Code. Example: .kik 91*")
        const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
	const groupAdmins = await getAdmin(Void, citel)
        let isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) :  false  ;
        if (!isAdmins)
	{
		if(isCreator) citel.reply("*Hey Owner, You Are not Admin Here*")
		else return citel.reply(tlang().admin);
	}
	let find = text.split(" ")[0].replace('+' , '');
	let error = '*These Users Not Kicked* \n\t' ;
	let users = await groupMetadata.participants
	let hmanykik = 0;
	let iskikstart = false ;
	const botNumber = await Void.decodeJid(Void.user.id)
	for (let i of users) { 
		let isuseradmin  =  groupAdmins.includes(i.id) || false 
		if(i.id.startsWith(find) && !isuseradmin)
		{ 
			if(!iskikstart)
			{
				iskikstart = true ;
				await citel.reply(`*_Kicking ALL the Users With ${find} Country Code_*`)
			}
			try { await Void.groupParticipantsUpdate(citel.chat, [i.id], "remove"); hmanykik++ ;  }
			catch (e) { console.log("Error While Kicking : " , e) } 	
		}
	}
	if(hmanykik == 0) return await citel.reply(`*_Ahh, There Is No User Found With ${find} Country Code_*`)
        else return await citel.reply(`*_Hurray, ${hmanykik.toString()} Users With ${find} Country Code kicked_*`)
})
//---------------------------------------------------------------------------
cmd({
        pattern: "num",
        desc: "get all numbers from a certain country",
        category: "group",
        filename: __filename,
    },
    async(Void, citel, text,{ isCreator }) => 
    {	
        if (!citel.isGroup) return citel.reply(tlang().group);
	if(!text) return await citel.reply("*Provide Me Country Code. Example: .num 91*")
        const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
	const groupAdmins = await getAdmin(Void, citel)
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) :  false  ;
        if (!isAdmins && !isCreator ) return citel.reply(tlang().admin);
	let find = text.split(" ")[0];
	let users = await groupMetadata.participants
	let nums = `*List Of Users With ${find} Country Code*\n`
	let num = '';
	for (let i of users) {  if(i.id.startsWith(find)) num += i.id.split("@")[0] +"\n";   }
	if(!num) {nums =`*There Is No Users With ${find} Country Code*` }
	else { nums += num+Config.caption }
	await citel.reply(nums)		
})
    //---------------------------------------------------------------------------
cmd({
            pattern: "rwarn",
            desc: "Deletes all previously given warns of quoted user.",
            category: "group",
            filename: __filename,
            use: '<quote|reply|number>',
        },
        async(Void, citel, text,{isCreator}) => {
            if (!isCreator) return citel.reply(tlang().owner)
            if (!citel.quoted) return citel.reply('Quote a user master.')
            await warndb.deleteOne({ id: citel.quoted.sender.split('@')[0] + 'warn' });
            return citel.reply('User is now free as a bird.\n.')
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "poll",
            desc: "Makes poll in group.",
            category: "group",
            filename: __filename,
            use: `question;option1,option2,option3.....`,
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner)
            let [poll, opt] = text.split(";");
            if (text.split(";") < 2)
                return await citel.reply(
                    `${prefix}poll question;option1,option2,option3.....`
                );
            let options = [];
            for (let i of opt.split(',')) {
                options.push(i);
            }
            await Void.sendMessage(citel.chat, {
                poll: {
                    name: poll,
                    values: options
                }
            })
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "profile",
            desc: "Shows profile of user.",
            category: "group",
            filename: __filename,
        },
        async(Void, citel, text) => {
            var bio = await Void.fetchStatus(citel.sender);
            var bioo = bio.status;
            let meh = citel.sender;
            const userq = await Levels.fetch(citel.sender, "RandomXP");
            const lvpoints = userq.level;
            var role = "GOD✨";
            if (lvpoints <= 2) {
                var role = "🏳Citizen";
            } else if (lvpoints <= 4) {
                var role = "🌟Rookie knight";
            } else if (lvpoints <= 6) {
                var role = "🌟knight";
            } else if (lvpoints <= 8) {
                var role = "🧙‍🌟Captain Knight";
            } else if (lvpoints <= 10) {
                var role = "🌀Baby Wizard";
            } else if (lvpoints <= 12) {
                var role = "🌀Wizard";
            } else if (lvpoints <= 14) {
                var role = "🌀Wizard King";
            } else if (lvpoints <= 16) {
                var role = "❄Baby Mage";
            } else if (lvpoints <= 18) {
                var role = "❄Mage";
            } else if (lvpoints <= 20) {
                var role = "❄Master of Mage";
            } else if (lvpoints <= 22) {
                var role = "🌊Child of Nobel";
            } else if (lvpoints <= 24) {
                var role = "🌊Nobel";
            } else if (lvpoints <= 26) {
                var role = "🌊Master of Nobel";
            } else if (lvpoints <= 28) {
                var role = "☇Child of Speed";
            } else if (lvpoints <= 30) {
                var role = "☇Dominator Speed";
            } else if (lvpoints <= 32) {
                var role = "☇God of Speed";
            } else if (lvpoints <= 34) {
                var role = "🌬 Child of Light";
            } else if (lvpoints <= 36) {
                var role = "🌬 Light";
            } else if (lvpoints <= 38) {
                var role = "🌬 God of Light";
            } else if (lvpoints <= 40) {
                var role = " 🌙 Legend X";
            } else if (lvpoints <= 42) {
                var role = "🎇 Angel ";
            } else if (lvpoints <= 44) {
                var role = "🎇 Fallen Angel";
            } else if (lvpoints <= 46) {
                var role = "🎭 Nearly Devil ";
            } else if (lvpoints <= 55) {
                var role = "🔥 Immortal Devil X ";
            }
            let ttms = `${userq.xp}` / 8;
            const timenow = moment(moment())
                .format('HH:mm:ss')
            moment.tz.setDefault('Asia/Kolakata')
                .locale('id')
            try {
                pfp = await Void.profilePictureUrl(citel.sender, "image");
            } catch (e) {
                pfp = await botpic();
            }
            const profile = `
*Hii ${citel.pushName},*
*Here is your profile information*
*👤Username:* ${citel.pushName}
*⚡Bio:* ${bioo}
*🧩Role:* ${role}
*🍁Level:* ${userq.level}
*📥 Total Messages* ${ttms}
*Powered by ${tlang().title}*
`;
            let buttonMessage = {
                image: {
                    url: pfp,
                },
                caption: profile,
                footer: tlang().footer,
                headerType: 4,
            };
            Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "rank",
            desc: "Sends rank card of user.",
            category: "group",
            filename: __filename,
        },
        async(Void, citel, text) => {
            const userq = await Levels.fetch(citel.sender, "RandomXP");
            const lvpoints = userq.level;
            var role = "GOD✨";
            if (lvpoints <= 2) {
                var role = "🏳Citizen";
            } else if (lvpoints <= 4) {
                var role = "🌟 Rookie Knight";
            } else if (lvpoints <= 6) {
                var role = "🌟 Knight";
            } else if (lvpoints <= 8) {
                var role = "🌟Captain Knight";
            } else if (lvpoints <= 10) {
                var role = "🌀 Baby Wizard";
            } else if (lvpoints <= 12) {
                var role = "🌀  Wizard";
            } else if (lvpoints <= 14) {
                var role = "🌀 Wizard King";
            } else if (lvpoints <= 16) {
                var role = "💧Baby Mage";
            } else if (lvpoints <= 18) {
                var role = "💧 Mage";
            } else if (lvpoints <= 20) {
                var role = "💧 Master of Mage";
            } else if (lvpoints <= 22) {
                var role = "❄ Child Of Nobel";
            } else if (lvpoints <= 24) {
                var role = "❄ Nobel";
            } else if (lvpoints <= 26) {
                var role = "❄ Master Of Nobel";
            } else if (lvpoints <= 28) {
                var role = "☇ Baby Speed";
            } else if (lvpoints <= 30) {
                var role = "☇ Dominator Speed";
            } else if (lvpoints <= 32) {
                var role = "☇ God Of Speed";
            } else if (lvpoints <= 34) {
                var role = "🌬 Child Of Light";
            } else if (lvpoints <= 36) {
                var role = "🌬 Light";
            } else if (lvpoints <= 38) {
                var role = "🌬 God Of Light";
            } else if (lvpoints <= 40) {
                var role = "🌙 Legend X";
            } else if (lvpoints <= 42) {
                var role = "🎇 Angel";
            } else if (lvpoints <= 44) {
                var role = "🎇 Fallen Angel";
            } else if (lvpoints <= 46) {
                var role = "🎭 Nearly Devil!";
            } else if (lvpoints <= 55) {
                var role = "🔥Immortal Devil X";
            }
            let disc = citel.sender.substring(3, 7);
            let textr = '';
            textr += `*Hii ${tlang().greet} ,🌟 ${citel.pushName}∆${disc}'s* Exp\n\n`;
            let ttms = `${userq.xp}` / 8;
            textr += `*🌟Role*: ${role}\n*🟢Exp*: ${userq.xp} / ${Levels.xpFor(
    userq.level + 1
  )}\n*🏡Level*: ${userq.level}\n*Total Messages:*- ${ttms}`;
            try {
                ppuser = await Void.profilePictureUrl(citel.sender, "image");
            } catch {
                ppuser = THUMB_IMAGE;
            }
                    Void.sendMessage(citel.chat, {
                        image: await getBuffer(ppuser),
                        caption: textr,
                    }, {
                        quoted: citel,
                    });
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "leaderboard",
            alias: ["deck"],
            desc: "To check leaderboard",
            category: "general",
            filename: __filename,
        },
        async(Void, citel) => {
            const fetchlb = await Levels.fetchLeaderboard("RandomXP", 5);
            let leadtext = `
*-------------------------------*
*----● LeaderBoard ● -----*
*-------------------------------*
\n\n`
            for (let i = 0; i < fetchlb.length; i++) {
                const lvpoints = fetchlb[i].level
                var role = "GOD✨";
                if (lvpoints <= 2) {
                    var role = "🏳Citizen";
                } else if (lvpoints <= 4) {
                    var role = "🌟 Rookie Knight";
                } else if (lvpoints <= 6) {
                    var role = "🌟 Knight";
                } else if (lvpoints <= 8) {
                    var role = "🌟 Captain Knight";
                } else if (lvpoints <= 10) {
                    var role = "🌀 Baby Wizard";
                } else if (lvpoints <= 12) {
                    var role = "🌀 Wizard";
                } else if (lvpoints <= 14) {
                    var role = "🌀 Wizard King";
                } else if (lvpoints <= 16) {
                    var role = "💧 Baby Mage";
                } else if (lvpoints <= 18) {
                    var role = "💧 Mage";
                } else if (lvpoints <= 20) {
                    var role = "💧 Master Of Mage";
                } else if (lvpoints <= 22) {
                    var role = "❄ Child Of Nobel";
                } else if (lvpoints <= 24) {
                    var role = "❄ Nobel";
                } else if (lvpoints <= 26) {
                    var role = "❄ Master Of Nobel";
                } else if (lvpoints <= 28) {
                    var role = "☇ Child Of Speed";
                } else if (lvpoints <= 30) {
                    var role = "☇ Dominator Speed";
                } else if (lvpoints <= 32) {
                    var role = "☇ God Of Speed";
                } else if (lvpoints <= 34) {
                    var role = "🌬 Baby Light";
                } else if (lvpoints <= 36) {
                    var role = "🌬 Light";
                } else if (lvpoints <= 38) {
                    var role = "🌬 God Of Light";
                } else if (lvpoints <= 40) {
                    var role = "🌙 Legend X";
                } else if (lvpoints <= 42) {
                    var role = "🎇 Angel";
                } else if (lvpoints <= 44) {
                    var role = "🎇 Fallen Angel";
                } else if (lvpoints <= 46) {
                    var role = "🎭 Nearly Devil";
                } else if (lvpoints <= 55) {
                    var role = "🔥Immortal Devil X";
                }
                let data = await sck1.findOne({ id: fetchlb[i].userID })
                let namew = fetchlb[i].userID
                let ttms = fetchlb[i].xp / 8
                leadtext += `*${i + 1}●Name*: ${data.name}\n*●Level*: ${fetchlb[i].level}\n*●Points*: ${fetchlb[i].xp}\n*●Role*: ${role}\n*●Total messages*: ${ttms}\n\n`;
            }
            return citel.reply(leadtext)
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "promote",
            desc: "Provides admin role to replied/quoted user",
            category: "group",
            filename: __filename,
            use: '<quote|reply|number>',
        },
        async(Void, citel, text) => {
            if (!citel.isGroup) return citel.reply(tlang().group);
            const groupAdmins = await getAdmin(Void, citel)
            const botNumber = await Void.decodeJid(Void.user.id)
            const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;

            if (!isAdmins) return citel.reply(tlang().admin);
            if (!isBotAdmins) return citel.reply(tlang().botAdmin);
            try {
                let users = citel.mentionedJid[0] ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
                if (!users) return;
                await Void.groupParticipantsUpdate(citel.chat, [users], "promote");
            } catch {
                //		citel.reply(tlang().botAdmin);

            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "kick",
            desc: "Kicks replied/quoted user from group.",
            category: "group",
            filename: __filename,
            use: '<quote|reply|number>',
        },
        async(Void, citel, text) => {
            if (!citel.isGroup) return citel.reply(tlang().group);
            const groupAdmins = await getAdmin(Void, citel)
            const botNumber = await Void.decodeJid(Void.user.id)
            const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;

            if (!isAdmins) return citel.reply(tlang().admin);
            if (!isBotAdmins) return citel.reply(tlang().botAdmin);
            try {
                let users = citel.mentionedJid[0] ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
                if (!users) return;
                await Void.groupParticipantsUpdate(citel.chat, [users], "remove");
            } catch {
                //		citel.reply(tlang().botAdmin);

            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "memegen",
            desc: "Write text on quoted image.",
            category: "group",
            filename: __filename,
            use: '<text>',
        },
        async(Void, citel, text) => {
            let mime = citel.quoted.mtype
            if (!/image/.test(mime)) return citel.reply(`Reply to Photo With Caption *text*`)
            mee = await Void.downloadAndSaveMediaMessage(citel.quoted)
            mem = await TelegraPh(mee)
            meme = await getBuffer(`https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`)
            let buttonMessage = {
                image: meme,
                caption: "Here we go",
                footer: tlang().footer,
                headerType: 4,
            };
            Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
            await fs.unlinkSync(mee)

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "group",
            desc: "mute and unmute group.",
            category: "group",
            filename: __filename,
        },
        async(Void, citel, text) => {
            if (!citel.isGroup) return citel.reply(tlang().group);
            const groupAdmins = await getAdmin(Void, citel)
            const botNumber = await Void.decodeJid(Void.user.id)
            const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
            if (!citel.isGroup) return citel.reply(tlang().group);
            if (!isBotAdmins) return citel.reply(tlang().botAdmin);
            if (!isAdmins) return citel.reply(tlang().admin);
            if (text.split(" ")[0] === "close") {
                await Void.groupSettingUpdate(citel.chat, "announcement")
                    .then((res) => reply(`Group Chat Muted :)`))
                    .catch((err) => console.log(err));
            } else if (text.split(" ")[0] === "open") {
                await Void.groupSettingUpdate(citel.chat, "not_announcement")
                    .then((res) => reply(`Group Chat Unmuted :)`))
                    .catch((err) => console.log(err));
            } else {

                return citel.reply(`Group Mode:\n${prefix}group open- to open\n${prefix}group close- to close`);
            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "grouppic",
            desc: "Sets a profile pic in Group..",
            category: "group",
            filename: __filename,
        },
        async(Void, citel, text) => {
            if (!citel.isGroup) return citel.reply(tlang().group);
            const groupAdmins = await getAdmin(Void, citel)
            const botNumber = await Void.decodeJid(Void.user.id)
            const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;


            let mime = citel.quoted.mtype
            if (!citel.isGroup) citel.reply(tlang().group);
            if (!isAdmins) citel.reply(tlang().admin);
            if (!isBotAdmins) citel.reply(tlang().botadmin);
            if (!citel.quoted) return citel.reply(`Send/Reply Image With Caption ${command}`);
            if (!/image/.test(mime)) return citel.reply(`Send/Reply Image With Caption ${command}`);
            if (/webp/.test(mime)) return citel.reply(`Send/Reply Image With Caption ${command}`);
            let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
            await Void.updateProfilePicture(citel.chat, {
                    url: media,
                })
                .catch((err) => fs.unlinkSync(media));
            citel.reply(tlang().success);

        }
    )
    //---------------------------------------------------------------------------
    cmd({
            pattern: "tag",
            alias:["hidetag"],
            desc: "Tags everyperson of group without mentioning their numbers",
            category: "group",
            filename: __filename,
            use: '<text>',
        },
        async(Void, citel, text , {isCreator}) => {
	if(!text && !citel.quoted) return citel.reply(`*Example : ${prefix}tag Hi Everyone, How are you Doing*` )
	    if(!text){text = citel.quoted.text;}
            if (!citel.isGroup) return citel.reply(tlang().group);
            const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
            const participants = citel.isGroup ? await groupMetadata.participants : "";
            const groupAdmins = await getAdmin(Void, citel)
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
            if (!isAdmins && !isCreator) return citel.reply(tlang().admin);
            Void.sendMessage(citel.chat, { text: text, mentions: participants.map((a) => a.id)}, { quoted: citel});
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "group",
            desc: "mute and unmute group.",
            category: "group",
            filename: __filename,
        },
        async(Void, citel, text) => {
            //if (!citel.isGroup) return citel.reply(tlang().group);
            const groupAdmins = await getAdmin(Void, citel)
            const botNumber = await Void.decodeJid(Void.user.id)
            const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
            //if (!citel.isGroup) return citel.reply(tlang().group);
            if (!isBotAdmins) return citel.reply(tlang().botAdmin);
            if (!isAdmins) return citel.reply(tlang().admin);
	        let Group = await sck.findOne({ id: citel.chat });
            if (text.split(" ")[0] == "close" || text.split(" ")[0] == "mute" ) {
                await Void.groupSettingUpdate(citel.chat, "announcement")
                    .then((res) => citel.reply(`Group Chat Muted`))
                    .catch((err) => citel.reply("Error :" +err));
            } else if (text.split(" ")[0] === "open"||text.split(" ")[0] === "unmute") {
                await Void.groupSettingUpdate(citel.chat, "not_announcement")
                    .then((res) => citel.reply(`Group Chat Unmuted`))
                    .catch((err) => citel.reply("Error : " +err));
            } 
else if(text=="Detail" || text=="Info" || text=="info" || text=="details" ) 
{
    const pp = await Void.profilePictureUrl(citel.chat, 'image').catch(_ => null) || ''
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `  ${i + 1}. wa.me/${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || citel.chat.split`-`[0] + '@s.whatsapp.net'

    let ginfos = `
      *「 INFO GROUP 」*
*▢ ID :*
   • ${groupMetadata.id}
*▢ NAME :* 
   • ${groupMetadata.subject}
*▢ Members :*
   • ${participants.length}
*▢ Group Owner :*
   • wa.me/${owner.split('@')[0]}
*▢ Admins :*
${listAdmin}
*▢ Description :*
   • ${groupMetadata.desc?.toString() || 'unknown'}
*▢ 🪢 Extra Group Configuration :*";
  • Group Nsfw :    ${Group.nsfw=='true'? '✅' : '❎'} 
  • Antilink        :    ${Group.antilink=='true'? '✅' : '❎'}
  • Economy      :    ${Group.economy=='true'? '✅' : '❎'}
  • Events         :     ${Group.events=='true'? '✅' : '❎'}
`.trim()
    if(Group.events=='true'){
        ginfos +="\n*▢ Wellcome Message :* \n  • "+Group.welcome;
        ginfos +="\n\n*▢ Goodbye Message :* \n  • "+Group.goodbye; 
    }
return await Void.sendMessage(citel.chat,{image:{url : pp} , caption: ginfos } , {quoted:citel })
}
else
{ 
    return await citel.send(`*_Uhh Dear Give me Query From Bellow Options_*
_1:- .group Mute_
_2:- .group Unmute_
_3:- .group Info_
`)
    //  let buttons = [{ buttonId: `${prefix}group open`, buttonText: { displayText: "📍Unmute",},type: 1,},{buttonId: `${prefix}group close`,buttonText: {displayText: "📍Mute",},type: 1, },];     await Void.sendButtonText(citel.chat,buttons,`Group Mode`, Void.user.name, citel);
           
}
        }
    )
    //------------------------------------------------------------------------
    
cmd({
            pattern: "add",
            desc: "Add that person in group",
            fromMe: true,
            category: "group",
            filename: __filename,
            use: '<number>',
        },
        async(Void, citel, text,{isCreator}) => {
            if (!citel.isGroup) return citel.reply(tlang().group);
            const groupAdmins = await getAdmin(Void, citel)
            const botNumber = await Void.decodeJid(Void.user.id)
            const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;

            if (!text) return citel.reply("Please provide me number.");
            if (!isCreator) return citel.reply(tlang().owner)
            if (!isBotAdmins) return citel.reply(tlang().botAdmin);
            let users = citel.mentionedJid[0] ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            await Void.groupParticipantsUpdate(citel.chat, [users], "add");

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "getjids",
            desc: "Sends chat id of every groups.",
            category: "group",
            filename: __filename,
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner)
            let getGroups = await Void.groupFetchAllParticipating();
            let groups = Object.entries(getGroups)
                .slice(0)
                .map((entry) => entry[1]);
            let anu = groups.map((v) => v.id);
            let jackhuh = `All groups jid\n\n`
            citel.reply(`Fetching jid from ${anu.length} Groups`)
            for (let i of anu) {
                let metadata = await Void.groupMetadata(i);
                await sleep(500)
                jackhuh += `*Subject:-* ${metadata.subject}\n`
                jackhuh += `*Member :* ${metadata.participants.length}\n`
                jackhuh += `*Jid:-* ${i}\n\n`

            }
            citel.reply(jackhuh)

        }
    )
    //---------------------------------------------------------------------------
cmd({
        pattern: "demote",
        desc: "Demotes replied/quoted user from group",
        category: "group",
        filename: __filename,
        use: '<quote|reply|number>',
    },
    async(Void, citel, text) => {
        if (!citel.isGroup) return citel.reply(tlang().group);
        const groupAdmins = await getAdmin(Void, citel)
        const botNumber = await Void.decodeJid(Void.user.id)
        const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;

        if (!isAdmins) return citel.reply(tlang().admin);
        if (!isBotAdmins) return citel.reply(tlang().botAdmin);
        try {
            let users = citel.mentionedJid[0] ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            if (!users) return;
            await Void.groupParticipantsUpdate(citel.chat, [users], "demote");
        } catch {
            //		citel.reply(tlang().botAdmin);

        }
    }
)

//---------------------------------------------------------------------------
cmd({
            pattern: "del",
            alias: ["delete"],
            desc: "Deletes message of any user",
            category: "group",
            filename: __filename,
            use: '<quote/reply message.>',
        },
        async(Void, citel, text) => {
            if (citel.quoted.Bot) {
                const key = {
                    remoteJid: citel.chat,
                    fromMe: false,
                    id: citel.quoted.id,
                    participant: citel.quoted.sender
                }
                await Void.sendMessage(citel.chat, { delete: key })

            }
            if (!citel.quoted.isBot) {
                if (!citel.isGroup) return citel.reply(tlang().group)
                const groupAdmins = await getAdmin(Void, citel)
                const botNumber = await Void.decodeJid(Void.user.id)
                const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
                const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
                if (!isAdmins) return citel.reply('Only Admins are allowed to delete other persons message.')
                if (!isBotAdmins) return citel.reply('I can\'t delete anyones message without getting Admin Role.')
                if (!citel.quoted) return citel.reply(`Please reply to any message. ${tlang().greet}`);
                let { chat, fromMe, id } = citel.quoted;
                const key = {
                    remoteJid: citel.chat,
                    fromMe: false,
                    id: citel.quoted.id,
                    participant: citel.quoted.sender
                }
                await Void.sendMessage(citel.chat, { delete: key })
            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "checkwarn",
            desc: "Check warns",
            category: "group",
            filename: __filename,
            use: '<quoted/reply user.>',
        },
        async(Void, citel, text) => {
            if (!citel.isGroup) return citel.reply('This command is only for Group.')
            if (!citel.quoted) return citel.reply('Quote a user master.')
            teskd = `*All Warnings.*\n\n`
            let h = await warndb.find({ id: citel.quoted.sender.split('@')[0] + 'warn' })
            console.log(h)
            teskd += `*There are total ${h.length}  warnings.*\n`
            for (let i = 0; i < h.length; i++) {
                teskd += `*${i+1}*\n╭─────────────◆\n│ *🍁In Group:-* ${h[i].group}\n`
                teskd += `│ *🔰Time:-* ${h[i].date}\n`
                teskd += `│ *⚠️Warned by:-* ${h[i].warnedby}\n`
                teskd += `│ _📍Reason: ${h[i].reason}_\n╰─────────────◆\n\n`
            }
            citel.reply(teskd)
        }

    )
    //--------------------------------------------------------------------------
    cmd({
        pattern: "block",
        desc: "blocks that person",
        fromMe: true,
        category: "owner",
        filename: __filename,
        use: '<quote/reply user.>'
    },
    async(Void, citel, text,{isCreator}) => {
        if (!isCreator) citel.reply(tlang().owner);
        let users = citel.quoted ? citel.quoted.sender : citel.mentionedJid[0] ? citel.mentionedJid[0] : "";
        if(!users)  return await citel.reply("*Uhh dear, reply/mention an User*")
        await Void.updateBlockStatus(users, "block")
            .then((res) => { return Void.sendMessage(citel.chat, { react: { text: '✨', key: citel.key }});    })		    //console.log(jsonformat(res))
            .catch((err) => console.log(jsonformat(err)));

    }
)
//--------------
    //---------------------------------------------------------------------------

//---------------------------------------------------------------------------
if(Config.WORKTYPE!=='private'){
cmd({ on: "text" }, async(Void, citel) => {
    const randomXp = 8;
    let usrname = citel.pushName
    const hasLeveledUp = await Levels.appendXp(citel.sender, "RandomXP", randomXp);
    if (hasLeveledUp) {
        const sck1 = await Levels.fetch(citel.sender, "RandomXP");
        const lvpoints = sck1.level;
        var role = "GOD";
        if (lvpoints <= 2) {
            var role = "🏳Citizen";
        } else if (lvpoints <= 4) {
            var role = "🌟 Rookie Knight";
        } else if (lvpoints <= 6) {
            var role = "🌟 Knight";
        } else if (lvpoints <= 8) {
            var role = "🌟 Captain Knight";
        } else if (lvpoints <= 10) {
            var role = "🌀 Baby Wizard";
        } else if (lvpoints <= 12) {
            var role = "🌀 Wizard";
        } else if (lvpoints <= 14) {
            var role = "🌀 Wizard King";
        } else if (lvpoints <= 16) {
            var role = "💧 Baby Mage";
        } else if (lvpoints <= 18) {
            var role = "💧 Mage";
        } else if (lvpoints <= 20) {
            var role = "💧 Master Of Mage";
        } else if (lvpoints <= 22) {
            var role = "❄ Child Of Nobel";
        } else if (lvpoints <= 24) {
            var role = "❄ Nobel";
        } else if (lvpoints <= 26) {
            var role = "❄ Master Of Nobel";
        } else if (lvpoints <= 28) {
            var role = "☇ Child of Speed";
        } else if (lvpoints <= 30) {
            var role = "☇ Dominator Speed";
        } else if (lvpoints <= 32) {
            var role = "☇ God of Speed ";
        } else if (lvpoints <= 34) {
            var role = "🌬 Child Of Light";
        } else if (lvpoints <= 36) {
            var role = "🌬 Light";
        } else if (lvpoints <= 38) {
            var role = "🌬 Master Of Light";
        } else if (lvpoints <= 40) {
            var role = "🌙 Legend X";
        } else if (lvpoints <= 42) {
            var role = "🎇 Angel";
        } else if (lvpoints <= 44) {
            var role = "🎇 Fallen Angel X";
        } else if (lvpoints <= 46) {
            var role = "🎭 Nearly Devil";
        } else if (lvpoints <= 55) {
            var role = "🔥Immortal Devil X";
        } else {
            var role = "Kiddo";
        }
        if (Config.levelupmessage !== 'false') {
            await Void.sendMessage(citel.chat, {
                image: {
                    url: await botpic(),
                },
                caption: `
╔══ ❀•°❀°•❀ ══
║ *Wow,Someone just*
║ *leveled Up huh🔥*
║ *👤Name*: ${citel.pushName}
║ *⚡Level*: ${sck1.level}🌀
║ *💫Exp*: ${sck1.xp} / ${Levels.xpFor(sck1.level + 1)}
║ *📍Role*: *${role}*
║ *Enjoy🥳*
╚═*.·:·.✧ ✦ ✧.·:·.*═╝
`,
            }, {
                quoted: citel,
            });
        }
    }

})
}
