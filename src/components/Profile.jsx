import {Stack, Avatar} from '@mui/material'

const Profile = () => {
  return (
    <Stack className='profile'>
        <Avatar
          id='profile__img'
          src='https://github.com/Eniola-Bakare.png'
          alt='Display picture'
          sx={{ width: 72, height: 72 }}
        />
        <p id='twitter'>@eebakare</p>
        {/* <p id="slack">@EniolaOluwa</p> */}
    </Stack>

  )
}

export default Profile