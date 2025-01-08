import { useState, useEffect } from 'react';
import './courses.css';
import { Link } from "react-router-dom";
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
import course1 from './assets/images/course1.jpg';
import course2 from './assets/images/course2.jpg';
import course3 from './assets/images/course3.jpg';


// gsap.registerPlugin(useGSAP);

const Courses = () => {

  const [loadedmain, setLoadedmain] = useState(false)
  const [loaded, setLoaded] = useState(false)

  const handleLoad = () => {
    setLoaded(true)
  }

  const [activeCourse, setActiveCourse] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

//   useGSAP(
//     () => {
//       gsap.to('.intro-card', { opacity: 1, duration: 0.75, delay: 0.25 });
//       gsap.to('.card', { opacity: 1, duration: 0.75, delay: 0.5 });
      
//     }
// );


  useEffect(() => {

    const img = new Image();
    img.src = './assets/images/animal.jpg'
    img.onload = setLoadedmain(true)

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
      details: "This class covers essential outdoor survival skills, including what to carry and why. You'll learn shelter building, fire starting in tough conditions, and how to locate and purify drinking water. Basic navigation is also covered. The course is low-impact, with some walking involved. It's hands-on, with a focus on using your primary cutting tool for various tasks to apply your skills.",
    },
    {
      id: 2,
      image: course2,
      description: 'Essential Wilderness Skills',
      details: "In Level 2, you'll put everything learned in Level 1 into practice. The gear list is limited, and the physical demands are slightly more challenging. This course focuses on primitive skills that require minimal equipment. You'll rely on the gear you’re allowed to bring, cook your own meals over an open fire, and practice advanced techniques like primitive trapping, shelter building, and starting fires using friction methods.",
    },
    {
      id: 3,
      image: course3,
      description: 'Advanced Survival Techniques',
      details: 'to be determined',
    },
  ];

  const togglePopup = (id) => {
    if (isMobile) {
      setActiveCourse(activeCourse === id ? null : id);
    }
  };

  return (
    <div className='courses'>
      <div className={`intro-card ${!loadedmain ? 'lazy-img' : ''}`}>
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
            <img src={item.image} alt={`Image for ${item.description}`} className={`course-image ${!loaded ? 'lazy-img' : ''}`} onLoad={handleLoad} />
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
