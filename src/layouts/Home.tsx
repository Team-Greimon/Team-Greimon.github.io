import MainProfile from "../components/MainProfile";
import { Container, makeStyles, Box, Card, Slide } from "@material-ui/core";
import MainCategory from "../components/MainCategory";
import { useState } from "react";
import GameList from "../components/GameList";
import LogList from "../components/LogList";

const useStyles = makeStyles({
  root: {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#F7E7B1',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',

  },
  profileCard: {
    width: '480px',
    height: '480px',
    padding: '16px',
    backgroundColor: '#f5f5f5'
  },
})

function homeDisplay(category: string, isSlideFinish: boolean) {
  switch (category) {
    case 'Profile':
      return <MainProfile isSlideFinish={isSlideFinish} />
    case 'LogList':
      return <LogList />
    case 'GameList':
      return <GameList />
    default:
      break;
  }
}



function Home() {
  const classes = useStyles()
  const [isSlideFinish, setSlideFinish] = useState(false)
  const [homeDisplaySwitch, setHomeDisplaySwitch] = useState("Profile")
  return (
    <div className={classes.root}>
      <Slide direction="down"
        in={true}
        timeout={1000}
        onEntered={() => { setSlideFinish(!isSlideFinish) }}>
        <Card className={classes.profileCard}>
          {homeDisplay(homeDisplaySwitch, isSlideFinish)}
        </Card>
      </Slide>
      <MainCategory setHomeDisplay={(category: string) => {
        switch (category) {
          case 'Profile':
            setHomeDisplaySwitch('Profile')
            break
          case 'LogList':
            setHomeDisplaySwitch('LogList')
            break
          case 'GameList':
            setHomeDisplaySwitch('GameList')
            break
          default:
            break
        }
      }} />
    </div>
  )
}

export default Home;