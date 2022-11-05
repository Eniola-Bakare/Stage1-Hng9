// import { Link, useNavigate } from "react-router-dom"
import {Stack, Typography} from '@mui/material'
import Footer from "./Footer"
import InputFields from './InputFields'


const ContactMe = () => {
  return (
    <>
        <Stack spacing={2} direction='column' className='contact_div'>
         
          <InputFields />

				</Stack>
				<Footer />
    </>
  )
}

export default ContactMe