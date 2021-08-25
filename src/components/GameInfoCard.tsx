import { Card, CardActionArea, CardContent, CardMedia, Fade, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: '480px',
    height: '100px',
    marginBottom: '8px',
  },
  gameImage: {
    minWidth: '100px',
    height: '100px',
  },
  gameInfo: {
    display: 'flex',
    alignItems: 'center',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '16px',
  },
  gameTitle: {

  },
  gameDeveloperText: {
    color: '#908f90',
    fontSize: '12px',
    border: '0.5px solid #e3f0ed',
    borderRadius: '5px',
  }

})

export interface GameInfoProps {
  link: string,
  image: string,
  name: string,
  developer: string,
  fadeTimeout: number,
}

function GameInfo({ name, link, image, developer, fadeTimeout }: GameInfoProps) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Fade in={true} timeout={fadeTimeout}>
        <CardActionArea onClick={() => window.open(link, '_blank')}>
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
              <Typography className={classes.gameDeveloperText}>
                {developer}
              </Typography>
            </div>
          </Card>
        </CardActionArea>
      </Fade>
    </div>
  )
}

export default GameInfo;