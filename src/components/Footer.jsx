// import {Stack} from '@mui/material';

const Footer = () => {
  const zuri = require('./assets/zuri.png')
  const ingressive = require('./assets/ingressive.png')

  return (
    <div className='footer'>
        <img src={zuri} alt='zuri logo' id='zuri'/>
        <p>HNG internship 9 Frontend Task</p>
        <img src={ingressive} alt='ingressive logo'/>
    </div>
  )
}

export default Footer