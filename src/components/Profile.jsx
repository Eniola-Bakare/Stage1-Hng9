import {Stack, Avatar} from '@mui/material'

const Profile = () => {
  return (
    <Stack className='profile'>
        <Avatar id='profile__img'
          src='https://github.com/Eniola-Bakare.png'
          alt='Display picture'
          sx={{ width: 72, height: 72 }}
        />
        <p style={{'font-weight': '700', color: '#535353'}}>EniolaOluwa Bakare</p>
        
        {/* Slack username here */}
        {/* <p id="slack">Slack username : EniolaOluwa</p> */}
    </Stack>

  )
}

export default Profile