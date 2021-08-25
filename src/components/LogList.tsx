import { makeStyles } from "@material-ui/core";
import GameInfoCard from "./GameInfoCard";
import Logs from "../contents/logs.json"
import LogContainer from "./LogContainer";

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

function LogList() {
  const classes = useStyles()
  var logList = Logs.sort((a, b) => {
    return (a.key < b.key) ? 1 : -1
  })

  return (
    <div className={classes.root}>
      {logList.map((item, value) => {
        return (
          <LogContainer key={value} timeStamp={item.key} username={item.name} message={item.content} fadeTimeout={(value + 1) * 500} />
        )
      })}
    </div>
  )
}

export default LogList;