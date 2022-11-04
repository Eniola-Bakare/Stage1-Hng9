import { Route, Routes } from 'react-router-dom';
import './App.css';
import Buttons from './components/Buttons';
import Footer from './components/Footer';
import Profile from './components/Profile';
import About from './ReactRoutersPractice/About';
import Home from './ReactRoutersPractice/Home';
import Nav from './ReactRoutersPractice/Nav';
import { NoMatchRoute } from './ReactRoutersPractice/NoMatchRoute';
import OrderSummary from './ReactRoutersPractice/OrderSummary';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about'element={<About />} />
        <Route path='order-summary'element={<OrderSummary />} />
        <Route path='*' element={<NoMatchRoute />} />
        {/* <Route path='profile' element={<Profile />}  /> */}
      </Routes>
      <Profile />
      <Buttons />
      <Footer />
    </div>
  );
}

export default App;
