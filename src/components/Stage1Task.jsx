import Buttons from './Buttons';
import Footer from './Footer';
import Profile from './Profile';
import { Link } from 'react-router-dom'
import '../App.css';


 const Stage1Task = () => {
	return (
				<>
					<Profile />
					<Buttons />
					<Footer />
				</>
	)
}

export default Stage1Task;