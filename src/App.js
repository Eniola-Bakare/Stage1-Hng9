import { Route, Routes } from 'react-router-dom';
import './App.css';
import Buttons from './components/Buttons';
import Footer from './components/Footer';
import Profile from './components/Profile';


function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path='/contact' element={<}/> */}
      </Routes>
      <Profile />
      <Buttons />
      <Footer />
    </div>
  );
}

export default App;
