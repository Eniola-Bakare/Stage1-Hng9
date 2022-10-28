import {Stack} from '@mui/material';

const Footer = () => {
  const zuri = require('./assets/zuri.png')
  const ingressive = require('./assets/ingressive.png')

  return (
    <Stack spacing={2} className='footer' direction='row'>
        <img src={zuri} alt='zuri logo' id='zuri'/>
        <p>HNG internship 9 Frontend Task</p>
        <img src={ingressive} alt='ingressive logo'/>
    </Stack>
  )
}

export default Footer