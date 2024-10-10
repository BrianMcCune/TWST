const Home = () => {
  return (
    <div className="home">
      <img src="./fireplace.png" alt="Campfire" className="home-image" />
      <div className="home-text">
        <div className="title">Texas Wilderness Survival Training</div>
        <div className="bio">
          Build essential survival skills, connect with nature, and learn how to thrive in the wilderness. Prepare for the unexpected with hands-on training.
        </div>
        <a href="about" className="cta-button">Learn More</a>
      </div>
    </div>
  );
};

export default Home;
