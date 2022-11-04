import { Route, Routes } from 'react-router-dom';
import './App.css';
import ContactMe from './components/ContactMe';
import Stage1Task from './components/Stage1Task';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/Stage1-Hng9' element={<Stage1Task />} />
        <Route path='/contact' element={<ContactMe />}/>
      </Routes>
      {/* <Profile />
      <Buttons />
      <Footer /> */}
    </div>
  );
}

export default App;
