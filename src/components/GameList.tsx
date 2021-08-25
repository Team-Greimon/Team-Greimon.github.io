import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useEffect, useState } from "react";
import game_info from "../contents/games.json"
import { GameInfo } from "../types/FileTypes";
import GameInfoCard from "./GameInfoCard";

const useStyles = makeStyles({
  root: {
    display: 'flex',
    width: '480px',
    height: '480px',
    flexDirection: 'column',
    overflow: 'auto',
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
      display: 'none'
    },
  },
})

function GameList() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {game_info.map((item, value) => {
        return (
          <GameInfoCard key={value} name={item.name} link={item.link} image={item.image} developer={item.developer} fadeTimeout={(value + 1) * 300} />
        )
      })}
    </div>
  )
}

export default GameList;