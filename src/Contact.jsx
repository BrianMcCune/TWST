import './contact.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Contact = () => {

  useGSAP(
    () => {
        gsap.to('.tent-container > img', { opacity: 1, duration: 1.5, delay: 0.5 });
    }
  );

  return ( 
    <div className="contact">
      <div className="tent-container">
        <img loading="lazy" src="./tent.jpg" className="tent" alt="Tent" />
        <div className="overlay-text">How Can We Help</div>
      </div>
      <div className="information">
        <div className='join'>
          <h2>Join the Course</h2>
          <p>Ready to start your wilderness adventure?</p>
        </div>
        <div className='enroll'>
          <h2>How to Enroll</h2>
          <p>To secure your spot, contact our instructor directly for more details and upcoming dates.</p>
        </div>
        <div className='more-info'>
          <p><i className="fas fa-phone-alt"></i>254-681-7543</p>
          <p><i className="fas fa-envelope"></i>Bert.mccune@hotmail.com</p>
        </div>
      </div>
    </div>
  );
}
 
export default Contact;
