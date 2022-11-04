import { Stack } from "@mui/system"
import { NavLink } from "react-router-dom"


const Nav = () => {
	// 	const navLinkStyles = ({isActive}) => {
	// 		return (
	// 			fontWeight: isActive ? 'bold' : 'normal',
	// 			textDecoration: isActive ? 'none' : 'underline'
	// 		)

	// }
	

  return (
		<nav>
			<Stack direction='row' spacing={2}>
				<NavLink to='/' >Home</NavLink>
				<NavLink to='/about'>About us</NavLink>
				<NavLink to='/profile'>Profile us</NavLink>
			</Stack>
		</nav>
  )
}

export default Nav