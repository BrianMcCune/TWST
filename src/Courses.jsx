import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


const Courses = () => {

  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const userInfo = query.get('user');

    if (userInfo) {
      // Parse and set user state
      const userObject = JSON.parse(decodeURIComponent(userInfo));
      setUser(userObject);
      localStorage.setItem('user', userInfo); // Store for persistence
    } else {
      // If no user info, check local storage
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, [location]);

  return ( 
    <>
      This is the Courses Page


      <div>
        {user ? (
          <h1>Welcome, {user.displayName}!</h1>
        ) : (
          <h1>Please log in.</h1>
        )}
      </div>
    </>
   );
}
 
export default Courses;