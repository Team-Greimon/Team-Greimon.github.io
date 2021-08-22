import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useEffect, useState } from "react";
import game_image from "../contents/game_list/NoIdea/image.png"
import game_info from "../contents/game_list/NoIdea/info.json"
import { GameInfo } from "../types/FileTypes";
import GameInfoCard from "./GameInfoCard";
import * as fs from 'fs'

const  useStyles =  makeStyles({
  root:{
    display:'flex',
    width:'480px',
    height:'480px',
  }
})

function  GameList(){
  const classes = useStyles()
  const [gameList,setGameList]= useState<Array<GameInfo>>([])

  return (
    <div className={classes.root}>
      <GameInfoCard name={game_info.name} link={game_info.link} image={game_image} developer={game_info.developer}/>
    </div>
  )
}

export default GameList;