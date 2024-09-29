import './App.css'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Courses from './Courses';
import Contact from './Contact';
import About from './About';
import Signup from './Signup';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/courses' element={<Courses />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/signup' element={<Signup />}/>
      </Routes >
    </>
  )
}

export default App
