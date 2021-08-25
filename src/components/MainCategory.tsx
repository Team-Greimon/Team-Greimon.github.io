import { Card, CardActionArea, IconButton, Slide, Tooltip, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Home, List, Photo } from "@material-ui/icons";


const useStyles = makeStyles({
  root: {
    marginLeft: '8px',
  },
  categoryContainer: {
    display: 'flex',
    padding: '8px',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
  },
  categoryItem: {
  },
  tooltip: {
  }
})

export interface MainCategoryProps {
  setHomeDisplay: (category: string) => (void)
}

function MainCategory({ setHomeDisplay }: MainCategoryProps) {

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Slide direction="down"
        in={true}
        timeout={1500}
      >
        <Card className={classes.categoryContainer}>
          <Tooltip className={classes.tooltip} title="동아리 정보" placement="right" arrow>
            <IconButton className={classes.categoryItem} onClick={() => setHomeDisplay('Profile')}>
              <Home />
            </IconButton>
          </Tooltip>

          <Tooltip className={classes.tooltip} title="활동 로그 목록" placement="right" arrow>
            <IconButton className={classes.categoryItem} onClick={() => setHomeDisplay('LogList')}>
              <List />
            </IconButton>
          </Tooltip>

          <Tooltip className={classes.tooltip} title="개인 작품 목록" placement="right" arrow>
            <IconButton className={classes.categoryItem} onClick={() => setHomeDisplay('GameList')}>
              <Photo />
            </IconButton>
          </Tooltip>

        </Card>
      </Slide>
    </div>
  )

}

export default MainCategory;