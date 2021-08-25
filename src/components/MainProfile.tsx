import { makeStyles } from '@material-ui/core/styles'
import { Box, Card, Typography, CardMedia, Fade, Slide, CardActionArea, Divider, Collapse } from '@material-ui/core'
import ProfileImageCakelemon from '../assets/profile_image_cakelemon.jpg'
import ProfileImageGreimul from '../assets/profile_image_greimul.jpg'
import { useState } from 'react'
import { GitHub, Home } from '@material-ui/icons'
import memberIntro from '../assets/member-introductions.json'
import MemberInfoCard from './MemberInfoCard'

const useStyles = makeStyles({
  root: {
    maxWidth: '480px',
    height: '480px',
  },
  memberInfoContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
  },
  memberCard: {

  },
  dividerStyle: {
    margin: '4px',
  },
  headerText: {
    fontSize: '25px',
  }
})

export interface MainProfileProps {
  isSlideFinish: boolean
}

function MainProfile({ isSlideFinish }: MainProfileProps) {
  const classes = useStyles()
  const [isTypoFinish, setTypoFinish] = useState(false)
  return (
    <div className={classes.root}>
      <Fade in={isSlideFinish} timeout={1000}
        onEntered={() => { setTypoFinish(true) }}
      >
        <Typography className={classes.headerText}>
          안녕하세요 Team-Greimon 입니다!
        </Typography>
      </Fade>
      <Fade in={isSlideFinish} timeout={2000}>
        <Typography>
          Team-Greimon 은  2인으로 구성된 게임 개발 동아리입니다.
        </Typography>
      </Fade>
      <Fade in={isSlideFinish} timeout={2500}>
        <Typography>
          각자 자유롭게 게임을 만들고 있습니다.
        </Typography>
      </Fade>
      <Divider className={classes.dividerStyle} />
      <div className={classes.memberInfoContainer}>
        <Fade in={isTypoFinish} timeout={1000}>
          <div className={classes.memberCard}>
            <MemberInfoCard profileImage={ProfileImageCakelemon} memberName="Cakelemon" memberIntro={memberIntro.Cakelemon.intro} memberBlog={memberIntro.Cakelemon.blog} memberGithub={memberIntro.Cakelemon.github} />
          </div>
        </Fade>
        <Fade in={isTypoFinish} timeout={2000}>
          <div className={classes.memberCard}>
            <MemberInfoCard profileImage={ProfileImageGreimul} memberName="GreimuL" memberIntro={memberIntro.GreimuL.intro} memberBlog={memberIntro.GreimuL.blog} memberGithub={memberIntro.GreimuL.github} />
          </div>
        </Fade>
      </div>

    </div>
  )
}

export default MainProfile;