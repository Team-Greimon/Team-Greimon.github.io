import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: '480px',
    height: '100px',
  },
  gameImage:{
    minWidth:'100px',
    height:'100px',
  },
  gameInfo:{
    display:'flex',
    alignItems:'center',
  },
  textContainer:{
    display:'flex',
    flexDirection:'column',
    marginLeft:'16px',
  },
  gameTitle:{

  },
  gameDeveloperText:{

  }

})

export interface GameInfoProps{
  link:string,
  image:string,
  name:string,
  developer:string
}

function GameInfo({name,link,image,developer}:GameInfoProps) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <CardActionArea onClick={()=>window.open(link,'_blank')}>
        <Card className={classes.gameInfo}>
        <CardMedia 
            className={classes.gameImage}
            image={image}
            title={name}
          />
          <div className={classes.textContainer}>
          <Typography>
            {name}
          </Typography>
          <Typography>
            {developer}
          </Typography>
          </div>
        </Card>
      </CardActionArea>
    </div>
  )
}

export default GameInfo;