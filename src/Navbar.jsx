import { Link } from "react-router-dom"

const Navbar = () => {
  return ( 
    <div className="Navbar">
      <a><Link to='/'><img className="navbar-logo" src="./logo.png" alt="TWST logo"/></Link></a>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/courses'>Courses</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </div>
   );
}
 
export default Navbar;