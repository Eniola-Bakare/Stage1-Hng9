import Buttons from './Buttons';
import Footer from './Footer';
import Profile from './Profile';
import { Link } from 'react-router-dom'


 const Stage1Task = () => {
	return (
			<Link to='/Stage1-Hng9'>
				{
				<>
					<Profile />
					<Buttons />
					<Footer />
				</>
				}
			</Link>
	)
}

export default Stage1Task;