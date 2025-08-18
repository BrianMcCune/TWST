import './next-class.css'
import TWSTIcon from './assets/images/TWST-icon.png';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

const NextClass = () => {

  useGSAP(
    () => {
      gsap.to('.next-class', {
        x:-500,
        delay: 0.5,
        duration: 1.5
      });
    }
  )

  const handleClick = () => {
    gsap.to('.next-class', {
      duration: 1.5,
      autoAlpha: 0,
      x: 500
    })
  }

  return (
    <div className="next-class">
      <button onClick={handleClick}>X</button>
      <div className='image-container'>
        <img src={TWSTIcon} alt="TWST Icon"/>
      </div>
      <h1>Sign Up for our next Class</h1>
      <ul>
        <li><strong>Date:</strong> October 24-26</li>
        <li><strong>Location:</strong> Woodsboro Texas</li>
        <li><strong>Course Details:</strong> This is a level 1 class that teaches you the basic foundation to outdoor living and is designed for beginners</li>
      </ul>
      <p>Contact us for more information</p>
      <p><strong>Pricing:</strong> $200 for the first participant, $100 for each additional guest</p>
    </div>
  )
}

export default NextClass