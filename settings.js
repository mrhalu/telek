const chalk = require("chalk")
const fs = require("fs")

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'
global.openai = "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"

//owmner v card
global.owner = ['6281233959206'] //ur owner number
global.ownernomer = "6281233959206" //ur owner number2
global.ownername = "🦄𝙼𝙰𝚉𝙻𝙰𝙽𝙰 𝙳𝙴𝚅" //ur owner name
global.ytname = "YT: Xeon" //ur yt chanel name
global.socialm = "GitHub: DGXeon" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//new
global.botname = "𝙾𝚁𝙲𝙰 𝙱𝙾𝚃"
global.ownernumber = '6281233959206'
global.ownername = '𝙼𝙰𝚉𝙻𝙰𝙽𝙰 𝙳𝙴𝚅'
global.ownerNumber = ["6281233959206@s.whatsapp.net"]
global.ownerweb = "https://youtube.com/@DGXeon"
global.websitex = "https://youtu.be/ecl-JDVDz3E"
global.wagc = "https://chat.whatsapp.com/HYj9wu5Jrv6CROxyeQbHoS"
global.themeemoji = '🥀'
global.wm = "."
global.botscript = 'https://github.com/DGXeon/CheemsBot-MD7' //script link
global.packname = "Sticker By"
global.author = "Cheems Bot\n\n\nA whatsapp bot developed by\n🦄Dream Guy Xeon\n\n\n\n\n\n\n\n       --------______-------\n\n\n\n\n\n\n\nContact No. : +6281233959206"
global.creator = "6281233959206@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.hituet = 0

//media target
global.thum = fs.readFileSync("./OrcaMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./OrcaMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./OrcaMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./OrcaMedia/theme/cheemspic.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    succes: '𝙷𝚎𝚛𝚎 𝚢𝚘𝚞 𝚐𝚘!',
    admin: '𝚃𝚑𝚒𝚜 𝚏𝚎𝚊𝚝𝚞𝚛𝚎 𝚌𝚘𝚞𝚕𝚍 𝚋𝚎 𝚞𝚜𝚎𝚍 𝚋𝚢 𝚊𝚍𝚖𝚒𝚗𝚜 𝚘𝚗𝚕𝚢!',
    botAdmin: '𝙱𝚘𝚝 𝙼𝚞𝚜𝚝 𝙱𝚎 𝙰𝚍𝚖𝚒𝚗 𝙵𝚒𝚛𝚜𝚝!',
    premime: '𝙿𝚛𝚎𝚖𝚒𝚞𝚖 𝚂𝚙𝚎𝚌𝚒𝚊𝚕 𝙵𝚎𝚊𝚝𝚞𝚛𝚎𝚜 𝙸𝚏 𝚈𝚘𝚞 𝚆𝚊𝚗𝚝 𝚝𝚘 𝚁𝚎𝚐𝚒𝚜𝚝𝚎𝚛 𝚃𝚢𝚙𝚎 𝚁𝚎𝚗𝚝',
    ownee: '𝚃𝚑𝚒𝚜 𝚏𝚎𝚊𝚝𝚞𝚛𝚎 𝚌𝚘𝚞𝚕𝚍 𝚋𝚎 𝚞𝚜𝚎𝚍 𝚋𝚢 𝚘𝚠𝚗𝚎𝚛 𝚘𝚗𝚕𝚢',
    group: '𝙵𝚎𝚊𝚝𝚞𝚛𝚎𝚜 𝚄𝚜𝚎𝚍 𝙾𝚗𝚕𝚢 𝙵𝚘𝚛 𝙶𝚛𝚘𝚞𝚙𝚜!',
    private: '𝙵𝚎𝚊𝚝𝚞𝚛𝚎𝚜 𝚄𝚜𝚎𝚍 𝙾𝚗𝚕𝚢 𝙵𝚘𝚛 𝙿𝚛𝚒𝚟𝚊𝚝𝚎 𝙲𝚑𝚊𝚝!',
    bog: '𝚃𝚑𝚒𝚜 𝚏𝚎𝚊𝚝𝚞𝚛𝚎 𝚌𝚘𝚞𝚕𝚍 𝚋𝚎 𝚞𝚜𝚎𝚍 𝚋𝚢 𝚋𝚘𝚝 𝚘𝚗𝚕𝚢',
    wait: '𝙸𝚗 𝚙𝚛𝚘𝚌𝚎𝚜𝚜...',
    linkm: '𝚆𝚑𝚎𝚛𝚎 𝚒𝚜 𝚝𝚑𝚎 𝚕𝚒𝚗𝚔?',
    endlimit: '𝚈𝚘𝚞𝚛 𝙳𝚊𝚒𝚕𝚢 𝙻𝚒𝚖𝚒𝚝 𝙷𝚊𝚜 𝙴𝚡𝚙𝚒𝚛𝚎𝚍, 𝚃𝚑𝚎 𝙻𝚒𝚖𝚒𝚝 𝚆𝚒𝚕𝚕 𝙱𝚎 𝚁𝚎𝚜𝚎𝚝 𝙴𝚟𝚎𝚛𝚢 𝟷𝟸 𝙷𝚘𝚞𝚛𝚜',
    nsfw: '𝚃𝚑𝚎 𝚗𝚜𝚏𝚠 𝚏𝚎𝚊𝚝𝚞𝚛𝚎 𝚑𝚊𝚜 𝚗𝚘𝚝 𝚋𝚎𝚎𝚗 𝚊𝚌𝚝𝚒𝚟𝚊𝚝𝚎𝚍, 𝚙𝚕𝚎𝚊𝚜𝚎 𝚌𝚘𝚗𝚝𝚊𝚌𝚝 𝚝𝚑𝚎 𝚊𝚍𝚖𝚒𝚗 𝚝𝚘 𝚊𝚌𝚝𝚒𝚟𝚊𝚝𝚎',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})