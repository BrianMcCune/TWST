import { useState, useEffect } from 'react';
import './courses.css';

const Courses = () => {
  const [activeCourse, setActiveCourse] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const course = [
    {
      id: 1,
      image: './course1.jpg',
      description: 'Wilderness Survival Basics',
      details: 'Learn the fundamentals of wilderness survival, including shelter building, fire making, and foraging for food.',
    },
    {
      id: 2,
      image: './course2.jpg',
      description: 'Essential Wilderness Skills',
      details: 'Develop essential skills for navigating and thriving in the wilderness safely and effectively.',
    },
    {
      id: 3,
      image: './course3.jpg',
      description: 'Advanced Survival Techniques',
      details: 'Master advanced techniques including tracking, advanced shelter construction, and emergency first aid.',
    },
  ];

  const togglePopup = (id) => {
    if (isMobile) {
      setActiveCourse(activeCourse === id ? null : id);
    }
  };

  return ( 
    <div className='courses'>
      <div className='intro-card'>
        <div className='content'>
          <h2>Hands on courses</h2>
          <p>Be a part of one of our many in-person courses at TWST and start your learning adventure now.</p>
          <a href="contact" className="cta-button">Sign Up</a>
        </div>
      </div>
      <div className='card-list'>
        {course.map(item => (
          <div 
            key={item.id} 
            className='card' 
            onClick={() => togglePopup(item.id)}
            onMouseEnter={() => !isMobile && setActiveCourse(item.id)}
            onMouseLeave={() => !isMobile && setActiveCourse(null)}
          >
            <img src={item.image} alt={`Image for ${item.description}`} className='course-image' />
            <h3 className='description'>{item.description}</h3>
            {activeCourse === item.id && (
              <div className="popup">
                <p>{item.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
