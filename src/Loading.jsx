import './loading.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Compass from './compass';

gsap.registerPlugin(useGSAP);

const Loading = () => {

  useGSAP(
    () => {
        gsap.to('.dial', { 
          rotation:360,
          // x:360,
          repeat: -1,
          duration: 5,
          transformOrigin:"center center",
         })
    }
)


  return ( 
    <div className='loading'>
      This is the loading section
      <Compass />
    </div>
   );
}
 
export default Loading;