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

  const handleCreatePost = async () => {
    // Example: Post creation API call
    const response = await fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'New Post',
        content: 'Post content...',
      }),
      credentials: 'include', // Include cookies for session management
    });
    const result = await response.json();
    console.log(result);
  };

  return ( 
    <>

      <div>
        {user ? (
          <>
            <h1>Welcome, {user.displayName}!</h1>
            {user.emails[0].value === 'brianmmccune@gmail.com' && (
              <button onClick={handleCreatePost}>Create New Post</button>
            )}
          </>
        ) : (
          <div>This is the Courses Page</div>
        )}
      </div>
    </>
   );
}
 
export default Courses;