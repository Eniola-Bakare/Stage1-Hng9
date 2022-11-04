import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Buttons from './components/Buttons';
// import Footer from './components/Footer';
// import Profile from './components/Profile';
import Stage1Task from './components/Stage1Task';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/Stage1-Hng9' element={<Stage1Task />} />
      </Routes>
      {/* <Profile />
      <Buttons />
      <Footer /> */}
    </div>
  );
}

export default App;
