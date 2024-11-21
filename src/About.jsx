import './about.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import selfimage from './assets/images/selfimage.jpg';
import camping from './assets/images/camping.jpg';
import { useState } from 'react';

const About = () => {

  const [loaded, setLoaded] = useState(false)

  const handleLoad = () => {
    setLoaded(true)
  }

  useGSAP(
    () => {
        gsap.from('.mission-container > .image-container', { opacity:0, x: 200, duration: 1, delay: 0.25 });

        gsap.from('.expectations-container > .image-container', { opacity:0, x: -200, duration: 1, delay: 0.25 });
    }
);

  return ( 
    <div className="about">
      <div className='mission-container'>
        <div className="mission-statement">
          <h2>Our Mission</h2>
          <p>
            At TWST, our mission is to provide families with immersive, hands-on wilderness survival training in the heart of Texas. We emphasize practical learning experiences that equip participants with essential skills for navigating the outdoors. Our courses inspire a deeper appreciation for nature while empowering families to confidently tackle challenges together.
          </p>
        </div>
        <div className="image-container">
          <img className={`${!loaded ? 'lazy-img' : ''}`} onLoad={handleLoad} src={selfimage} alt='instructors'/>
        </div>
      </div>
      <div className='expectations-container'>
        <div className='image-container'>
          <img className={`${!loaded ? 'lazy-img' : ''}`} onLoad={handleLoad} src={camping} alt='instructors'/>
        </div>
        <div className="expectations">
          <h2>What to Expect</h2>
          <p>
            Join us for an immersive three-day wilderness survival course in [Location], Texas. Under the guidance of our experienced instructor, a retired military professional with [X] years of wilderness survival expertise, you’ll gain practical skills essential for thriving in the outdoors. Expect hands-on training in shelter building, foraging, and navigation, all designed to enhance your confidence and appreciation for nature. Prepare for an unforgettable adventure!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
