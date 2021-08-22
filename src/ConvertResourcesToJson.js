import fs from 'fs'

var gameFolderList = fs.readdirSync('./src/contents/game_list')
gameFolderList.forEach((folder)=>{
  gameFolderList.push(folder)
})


fs.writeFileSync('./src/contents/test.json','[test]')