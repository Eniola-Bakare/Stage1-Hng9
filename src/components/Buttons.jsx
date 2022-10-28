import {Stack} from '@mui/material'

const Buttons = () => {
    const buttonLinks = [
      {
        'name': 'Twitter',
        'href': 'https://twitter.com/eebakare',
        'id': 'btn_zuri'
      },
      {
        'name': 'Zuri Team',
        'href': 'https://training.zuri.team',
        'id': 'btn_zuri'
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
        // 'subtext': 'All books for design and code'
      },
      {
        'name': 'Check in with a Coach',
        'href': 'https://background.zuri.team',
        'id': 'pitch',
        // 'subtext': 'All books for design and code'
      },
      {
        'name': 'Get a book on Design(Free)',
        'href': 'https://books.zuri.team/design-rules',
        'id': 'book__design',
        // 'subtext': 'All books for design and code'
      },
      
    ]
  return (
    <Stack spacing={3} direction='column' className='btn_div'>
      <Stack spacing={2} direction='column'>
        {
          buttonLinks.map((link) => 
            (
            <a href={link.href} className='btns'> 
              <button id={link.id} >{link.name}</button>
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