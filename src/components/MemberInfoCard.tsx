import { Card, CardActionArea, CardMedia, Collapse, IconButton, Typography } from "@material-ui/core";
import {  ExpandLessRounded, ExpandMore, GitHub, Home } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";


const useStyles = makeStyles({
  root: {
    width:'210px',
    height:'100px',
  },
  memberInfo: {
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center|left',
  },
  memberImage: {
    width: '100px',
    height: '100px',
    marginRight: '4px',
  },
  iconNotExpand:{
    transform:'rotate(0deg)',
  },
  iconExpanded:{
    transform:'rotate(180deg)',
  },
  nameContainer:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
  },
  linkContainer:{
    display:'flex',    
    alignItems:'center',
    justifyContent:'center',
  },
  memberName:{
    textAlign:'center',
  }
})

export interface MemberInfoProps{
  profileImage:string,
  memberName:string,
  memberIntro:string,
  memberBlog:string,
  memberGithub:string,
}

function MemberInfoCard({ profileImage, memberName, memberIntro,memberBlog,memberGithub }: MemberInfoProps) {
  const classes = useStyles()
  const [isCollapsed,setCollapsed] = useState(false)
  return (
    <div className={classes.root}>

      {/*<CardActionArea onClick={() => { setCollapsed(!isCollapsed) }}>*/}

        <Card className={classes.memberInfo}>
          <CardMedia
            className={classes.memberImage}
            image={profileImage}
            title="profile"
          />
          <div>
          <Typography className={classes.memberName}>
            {memberName}
          </Typography>
          <div className={classes.linkContainer}>
          <IconButton onClick={()=>window.open(memberBlog,'_blank')}><Home/></IconButton>
          <IconButton onClick={()=>window.open(memberGithub,'_blank')}><GitHub/></IconButton>
          </div>
          </div>
        </Card>
      {/*
          <ExpandMore className={isCollapsed?classes.iconExpanded:classes.iconNotExpand}/>
        </Card>
      </CardActionArea>
      */}
      {/*
      <Collapse in={isCollapsed}>
        <Typography style={{ whiteSpace: 'pre-line' }}>{memberIntro}</Typography>

        <Home fontSize="medium" />
        <GitHub fontSize="medium" />
      </Collapse>
      */}
    </div>
  )
}

export default MemberInfoCard;
