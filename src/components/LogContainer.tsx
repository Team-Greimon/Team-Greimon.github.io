import { CardActionArea, Card, Typography, IconButton, Collapse, Fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { Home, GitHub, ExpandMore } from '@material-ui/icons';
import { useState } from 'react';

export interface LogContainerProps {
  timeStamp: string,
  message: string,
  username: string,
  fadeTimeout: number,
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '8px',
  },
  messageContainer: {

  },
  logCard: {
    display: 'flex',
    flexDirection: 'row',
  },
  logTitleText: {

  },
  iconNotExpand: {
    transform: 'rotate(0deg)',
  },
  iconExpanded: {
    transform: 'rotate(180deg)',
  },
})

function LogContainer({ timeStamp, username, message, fadeTimeout }: LogContainerProps) {
  const classes = useStyles()
  const [isCollapsed, setCollapsed] = useState(false)

  return (
    <div className={classes.root}>
      <Fade in={true} timeout={fadeTimeout}>
        <CardActionArea onClick={() => { setCollapsed(!isCollapsed) }}>
          <Card className={classes.logCard} style={username === 'cakelemon' ? { backgroundColor: '#f3e9bf' } : { backgroundColor: '#f2cfa5' }}>
            <div>
              <Typography className={classes.logTitleText}>
                {(timeStamp.replaceAll('.txt', '') + '  ' + username + ' Activitiy Log')}
              </Typography>
            </div>
            <ExpandMore className={isCollapsed ? classes.iconExpanded : classes.iconNotExpand} />
          </Card>
        </CardActionArea>
      </Fade>
      <Collapse in={isCollapsed}>
        <Typography style={{ whiteSpace: 'pre-line' }}>{message}</Typography>
      </Collapse>

    </div>
  )
}

export default LogContainer;