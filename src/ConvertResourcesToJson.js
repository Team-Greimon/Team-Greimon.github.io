var fs = require('fs')

//게임 목록 정리
var game_dir_path = './public/contents/game_list'
var relative_game_dir_path = '../contents/game_list'

var gameDirList = fs.readdirSync(game_dir_path)
var gameFolderList = []
var gameList = []

gameDirList.forEach((folder) => {
  gameFolderList.push(folder)
})

gameFolderList.forEach((content) => {
  var gameImage = relative_game_dir_path + '/' + content + '/image.png'
  var gameInfo = fs.readFileSync(game_dir_path + '/' + content + '/info.json')
  var infoJson = JSON.parse(gameInfo)
  var gameJson = { "image": gameImage, "name": infoJson.name, "link": infoJson.link, "info": infoJson.info, "developer": infoJson.developer }
  gameList.push(gameJson)
})

fs.writeFileSync('./src/contents/games.json', JSON.stringify(gameList), 'utf8')

//로그 목록 정리
var log_dir_path = './public/contents/log_list'

var userList = fs.readdirSync(log_dir_path)
var userLogList = []
userList.forEach((user) => {
  var logList = fs.readdirSync(log_dir_path + '/' + user)
  userLogList.push({ "name": user, "loglist": JSON.stringify(logList) })
})
var logs = []
userLogList.forEach((content) => {
  var loglist = JSON.parse(content.loglist)
  loglist.forEach((log) => {
    var userLog = fs.readFileSync(log_dir_path + '/' + content.name + '/' + log, 'utf8')
    logs.push({ "key": log, "name": content.name, "content": userLog })
  })
})

fs.writeFileSync('./src/contents/logs.json', JSON.stringify(logs), 'utf8')