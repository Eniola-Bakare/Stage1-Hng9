import {Stack, Avatar} from '@mui/material'

const Profile = () => {
  const shareBtn = require('./assets/share.png')
  const shareBtnsm = require('./assets/more-icon.png')

  // const [setwindow, setSetwindow] = useState(window.innerWidth);
  // useEffect(() => {
  //   const handleWindowSize = () => {
  //     setSetwindow(window.innerWidth)
  //   }
  // })

  return (
    <Stack className='profile profile_share'>
      <Stack className='profile'>
          <Avatar id='profile__img'
            src='https://github.com/Eniola-Bakare.png'
            alt='Display picture'
            sx={{ width: 150, height: 150 }}
          />
          <p style={{'font-weight': '700', color: '#535353'}}>EniolaOluwa Bakare</p>
          
          {/* Slack username here */}
          {/* <p id="slack">Slack username : EniolaOluwa</p> */}
      </Stack>
      <Stack>
        <img src={shareBtn} alt='share icon' className='share_icon'/>
        {/* {console.log(window.innerWidth)} */}
      </Stack>
    </Stack>

  )
}

export default Profile