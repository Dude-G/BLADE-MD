const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '2348055700661'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://ahil1:787191784abhi@ahil1.kzr1tt3.mongodb.net/?retrywrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'maxdavid126@gmail.com'
global.github = 'https://github.com/Bladeh4x/BLADE-MD'
global.location = 'Lahore pakistan'
global.gurl = 'https://instagram.com/alex_david/' // add your username
global.sudo = process.env.SUDO || "2348069553870"
global.devs = '2348069553870'
global.website = 'https://github.com/Bladeh4x/BLADE-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3f3ae4aace2d012c11509.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUMxVE5LVm1pcWx3SHc1Tkh2S2k5VmRuRTdDMFBGWUZOYmtmaTU2SkwzYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSEtQTkJWeUN4cENkbXgvT0hnTG1BVEJBUTU2VU5hNjR2U2t3SlVuMTFTdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjQnVrSFBvaXhkdkNDNXNic3JtNDVKdVg1dGdmT3V4U2xyUXgzQ2tIQVZjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvSU1xaXV5dHFCNUVLWkFZMmh1Q2lmTE4yNHdlNzYvZEJsaDNVUEF2ZFIwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNJMktTL2V0LzNOa1FWRzcxWWNmMG85TUN0bTZ4TVpwS3NRV3l5eEZpRU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im93ek4wZloza1krbXpWeWlQQ3dVZE52ZUlqVkpWT2VhWlhIYXFxVndHbjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUJFcDJJQnlIbE5KTldoMDdFZ0hJMlFLZXRoZ1Fpdngvcy90YkJ3amFHbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMHZBZ0pSaTZQaHlwcVdlUnFZQW0wSks3MFIzdGtyOStSaHhQSUVIWXJ3TT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJTTW1uWThBdGswS2RMd1JCUTR2U0Q5WEdWbk1SaXhjV2xybkNkRXBwc29VOEhsSUwzTnI3QzZWeG8vbEltWHpzMlJDb0lHMkRZdEJwaE90Q1EzaER3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA3LCJhZHZTZWNyZXRLZXkiOiJtZi9iNVlTMUszbHA3RHpqeEI4eU1oYVVUdFY3VVc1UHpyQ0UrQWQ5a1BvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6OTQsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo5NCwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJoc3A5NGZ2blQzTzZpUjdMa0J0TXF3IiwicGhvbmVJZCI6IjMzNmRkNzQyLTc0YzMtNDc4MC04MTJmLTk3ZDFjM2IyNjA5NSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVRVZ5Wjg1MWJHd3d4R3JzUHBCOXdadUQzdVE9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlduaThmUmIxQVJUakIwbThuVXN2MzZsMm9oTT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tyb2pOUUJFTVBBckxBR0dCY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImpmY1BDV2haZGhYc1gxaUt6VTB0ZmRybEtPT1ZLRm9oWDc3RE44dDV6VVE9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImFDZXZJbzVROXFvM3pqRDlNSUl4YWNGdnh1WVpqL2FldU9nOXlHU214WDJNZWJYcFF2cThMTFppb2M3TGw1QU8wb2lJUUNYekFwblJ6WmFIVWh1UkFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIzY0c1K3JMUDNxdWZrM2NucXJmUytYTUtadUhyMnZyVzh3K1lBUkFISWN2VERhRStUUjNubzJJREw4djdsanQxWWNxQ3UrTWM3K25CR3MyQzNaTlNCZz09In0sIm1lIjp7ImlkIjoiMjM0ODA1NTcwMDY2MToyMEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZS78J2VpvCdlZXwnZWW8J2UviJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MDU1NzAwNjYxOjIwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlkzM0R3bG9XWFlWN0Y5WWlzMU5MWDNhNVNqamxTaGFJVisrd3pmTGVjMUUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTIwMDUyNTd9",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'BLADE BOT',
  packname:  process.env.PACK_NAME || 'MADE BY ALEX DAVID',
  
  botname:   process.env.BOT_NAME === undefined ? "BLADE-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'DudeG' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? true : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʙʟᴀᴅᴇ-²²¹-ᴍᴅ•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
