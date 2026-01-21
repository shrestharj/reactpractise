import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Practice1 from './pages/practice/Practice1';
import Practice2 from './pages/practice/Practice2';
import Pagination from './pages/practice/Pagination';
import Register from './pages/practice/Register';
import Comment from './pages/comment/Comment';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/comment' element={<Comment />} />
      </Routes>
      {/* <Practice1 /> */}
      {/* <Practice2 /> */}
      {/* <Pagination/> */}
      {/* <Register/> */}
    </>
  );
}

export default App;
