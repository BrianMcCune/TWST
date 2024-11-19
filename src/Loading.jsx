import './loading.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Compass from './compass';
import { useState, useEffect } from 'react';

gsap.registerPlugin(useGSAP);

const Loading = () => {

  
  const [shouldPlayAnimation, setShouldPlayAnimation] = useState(false)

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

  useGSAP(
    () => {
      // const tl = gsap.timeline({})

      gsap.to ('.line-left, .line-center1', {
        transformOrigin: 'top',
        scaleY: 0,
        delay: 1,
        duration: .6,
        ease: "expo.inout",
      })

      gsap.to ('.line-right, .line-center2', {
        transformOrigin: 'bottom',
        scaleY: 0,
        delay: 1,
        duration: 0.8,
        ease: "expo.inout",
      })

        gsap.fromTo('.dial', {
          rotation: -45,
          transformOrigin:"center center",
        }, { 
          rotation: 325,
          duration: 1,
          transformOrigin:"center center",
          delay: 1,
          ease: "expo.inout",
         })

         gsap.to('.compass', {
          autoAlpha: 0,
          delay: 1.4,
          duration: 0.8,
          ease: "power1.in",
         })

         gsap.to('.left-curtain', {
          xPercent: -100,
          duration: 1,
          delay: 2,
          ease: "power3.in",
         })
         gsap.to('.right-curtain', {
          xPercent: 100,
          duration: 1,
          delay: 2,
          ease: "power3.in",
         })

         gsap.to('.loading', {
          autoAlpha: 0,
          delay: 3,
          duration: 0.1
         })

         gsap.to('.underline', {
          width: '100%',
          duration: 0.8,
          ease: 'expo.inout',
          delay: 3
        });
    }
)


return (
  shouldPlayAnimation && (
    <div className="loading">
      <div className="curtain left-curtain"></div>
      <div className="curtain right-curtain"></div>
      <Compass />
      <div className="line-left"></div>
      <div className="line-center1"></div>
      <div className="line-center2"></div>
      <div className="line-right"></div>
    </div>
  )
);
};

 
export default Loading;