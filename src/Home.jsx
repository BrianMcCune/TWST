import { Link } from "react-router-dom";
import fireplace from './assets/images/fireplace.png';


const Home = () => {
  return (
    <div className="home">
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
