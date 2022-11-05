// import { Link, useNavigate } from "react-router-dom"
import {Stack, Typography} from '@mui/material'
import Footer from "./Footer"
import InputFields from './InputFields'


const ContactMe = () => {
  return (
    <>
        <Stack spacing={1} direction='column' className='contact_div'>
          <Stack className='contact_heading'>
            <p className='contact_title' > Contact me </p>
            <p className='contact_subtitle' > Hi there, contact me to ask about anything you have in mind</p>
          </Stack>
          <InputFields />

				</Stack>
				<Footer />
    </>
  )
}

export default ContactMe