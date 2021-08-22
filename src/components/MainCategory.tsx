import { Card, CardActionArea, IconButton, Slide, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Home, List, Photo } from "@material-ui/icons";


const useStyles = makeStyles({
  root: {
    marginLeft:'8px',
  },
  categoryContainer:{
    display:'flex',
    padding:'8px',
    flexDirection:'column',
    backgroundColor:'#FFFFFF',
  },
  categoryItem:{
  }
})

export interface MainCategoryProps{
  setHomeDisplay:(category:string)=>(void)
}

function MainCategory({setHomeDisplay}:MainCategoryProps) {

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Slide direction="down"
        in={true}
        timeout={1500}
      >
    <Card className={classes.categoryContainer}>
      <IconButton className={classes.categoryItem} onClick={()=>setHomeDisplay('Profile')}>
        <Home/>
      </IconButton>
      <IconButton className={classes.categoryItem} onClick={()=>setHomeDisplay('LogList')}>
        <List/>
      </IconButton>
      <IconButton className={classes.categoryItem} onClick={()=>setHomeDisplay('GameList')}>
        <Photo/>
      </IconButton>
    </Card>
    </Slide>
    </div>
  )

}

export default MainCategory;