import { Link } from "react-router-dom"

const Navbar = () => {
  return ( 
    <div className="Navbar">
      <a><Link to='/'><img className="navbar-logo" src="./logo.png" alt="TWST logo"/></Link></a>
      <ul>
        <li><Link to='/' className="link">Home</Link></li>
        <li><Link to='/courses' className="link">Courses</Link></li>
        <li><Link to='/about' className="link">About</Link></li>
        <li><Link to='/contact' className="link">Contact</Link></li>
      </ul>
      <div className="underline"></div>
    </div>
   );
}
 
export default Navbar;