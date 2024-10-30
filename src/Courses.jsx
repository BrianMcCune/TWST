import { useState, useEffect } from 'react';
import './courses.css';
import { Link } from "react-router-dom";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import course1 from './assets/images/course1.jpg';
import course2 from './assets/images/course2.jpg';
import course3 from './assets/images/course3.jpg';


gsap.registerPlugin(useGSAP);

const Courses = () => {
  const [activeCourse, setActiveCourse] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useGSAP(
    () => {
      gsap.to('.intro-card', { opacity: 1, duration: 0.75, delay: 0.25 });
      gsap.to('.card', { opacity: 1, duration: 0.75, delay: 0.5 });
      
    }
);


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
      image: course1,
      description: 'Wilderness Survival Basics',
      details: 'Learn the fundamentals of wilderness survival, including shelter building, fire making, and foraging for food.',
    },
    {
      id: 2,
      image: course2,
      description: 'Essential Wilderness Skills',
      details: 'Develop essential skills for navigating and thriving in the wilderness safely and effectively.',
    },
    {
      id: 3,
      image: course3,
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
          <Link to="/contact" className="cta-button">Sign Up</Link>
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
