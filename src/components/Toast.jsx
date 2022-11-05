import {Snackbar} from '@mui/material'
import {useState} from 'react'

const Toast = (props) => {
   


  return (
    <>
        <Snackbar message='Form submitted successfully!' autoHideDuration={4000} 
        open={props.value}
        onClose={props.close}
        />
    </>
  )
}

export default Toast