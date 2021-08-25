var fs = require('fs')

//게임 목록 정리
var game_dir_path = './public/contents/game_list'

var gameDirList = fs.readdirSync(game_dir_path)
var gameFolderList = []
var gameList = []

gameDirList.forEach((folder)=>{
  gameFolderList.push(folder)
})

gameFolderList.forEach((content)=>{
  var gameImage= game_dir_path+'/'+content+'/image.png'
  var gameInfo = fs.readFileSync(game_dir_path+'/'+content+'/info.json')
  var infoJson = JSON.parse(gameInfo)
  var gameJson = {"image":gameImage,"name":infoJson.name,"link":infoJson.link,"info":infoJson.info,"developer":infoJson.developer}
  gameList.push(gameJson)
})

fs.writeFileSync('./src/contents/games.json',JSON.stringify(gameList),'utf8')

//로그 목록 정리
