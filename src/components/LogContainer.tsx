import {makeStyles} from '@material-ui/core/styles'

export interface LogContainerProps{
  timeStamp: string,
  message: string,
}

const useStyles =makeStyles({
  root:{
    
  },
  messageContainer:{

  }
})

function LogContainer({timeStamp, message}:LogContainerProps){

}

export default LogContainer;