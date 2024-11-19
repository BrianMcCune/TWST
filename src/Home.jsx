import { Link } from "react-router-dom";
import fireplace from './assets/images/fireplace.png';
import Loading from "./Loading";
import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";



const Home = () => {

  const [shouldPlayAnimation, setShouldPlayAnimation] = useState(false)

  useGSAP(
    () => {
      gsap.to('.underline', {
        width: '100%',
        duration: 0.8,
        ease: 'expo.inout',
        delay: 3
      });
    }
  )


  useEffect(() => {
    // sessionStorage.clear();
    console.log(sessionStorage.getItem('hasPlayedAnimation'));
    const hasPlayed = sessionStorage.getItem('hasPlayedAnimation')
    if (hasPlayed === null) {
      setShouldPlayAnimation(true)
      sessionStorage.setItem('hasPlayedAnimation', 'true')
    } else {
      setShouldPlayAnimation(false)
    }
  }, [])



  return (
    <div className="home">
      {shouldPlayAnimation && (
        <Loading />
      )}
      <img loading="lazy" src={fireplace} alt="Campfire" className="home-image" />
      <div className="home-text">
        <div className="title">Texas Wilderness Survival Training</div>
        <div className="bio">
          Build essential survival skills, connect with nature, and learn how to thrive in the wilderness. Prepare for the unexpected with hands-on training.
        </div>
        <Link to="/about" className="cta-button">Learn More</Link>
      </div>
    </div>
  );
};

export default Home;
