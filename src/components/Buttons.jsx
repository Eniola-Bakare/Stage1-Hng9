import {Stack} from '@mui/material'

const Buttons = () => {
    const buttonLinks = [
      {
        'name': '@eebakare',
        'href': 'https://twitter.com/eebakare',
        'id': 'btn__zuri'
      },
      {
        'name': 'Zuri Team',
        'href': 'https://training.zuri.team',
        'id': 'btn__zuri'
      },
      {
        'name': 'Technical Books',
        'href': 'https://books.zuri.team',
        'id': 'books',
        'subtext': 'All books for design and code'
      },
      {
        'name': 'Get Python for Beginners',
        'href': 'https://books.zuri.team/python-for-beginners?ref_id=@EniolaOluwa',
        'id': 'books__python',
        'subtext': 'Learn Python under the hood'
      },
      {
        'name': 'Check in with a Coach',
        'href': 'https://background.zuri.team',
        'id': 'pitch',
        'subtext': 'One to hold you through becoming a dev'
      },
      {
        'name': 'Get a book on Design(Free)',
        'href': 'https://books.zuri.team/design-rules',
        'id': 'book__design',
        'subtext': 'Learn the principles of design expertise'
      },
      
    ]
  return (
    <Stack spacing={3} direction='column' className='btn_div'>
      <Stack spacing={2} direction='column'>
        {
          buttonLinks.map((link) => 
            (
              <a href={link.href} id={link.id} className='btns'> 
                  {link.name}
                  <br/>
                  {/* <span className='btns_subtext'>{link.subtext}</span> */}
              </a>
            )
          )
        }
      </Stack>

      <Stack direction='row' spacing={2} className='slack_git'>
        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111615.png" alt="slack-icon" style={{width: "25px"}} href='https://hng9.slack.com'/>
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="git-icon" style={{width: "25px"}} href='https://github.com/Eniola-Bakare'/>
      </Stack>

    </Stack>
  )
}

export default Buttons