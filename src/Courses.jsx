import './courses.css';

const Courses = () => {
  const course = [
    {
      id: 1,
      image: './course1.jpg',
      description: 'Wilderness Survival Basics',
      detailedDescription: 'Learn the essential skills needed for basic wilderness survival.'
    },
    {
      id: 2,
      image: './course2.jpg',
      description: 'Essential Wilderness Skills',
      detailedDescription: 'Master vital skills to thrive in the wilderness environment.'
    },
    {
      id: 3,
      image: './course3.jpg',
      description: 'Advanced Survival Techniques',
      detailedDescription: 'Explore advanced techniques for survival in extreme conditions.'
    }
  ];

  return ( 
    <div className='courses'>
      <div className='intro-card'>
        <div className='content'>
          <h2>Hands-on Courses</h2>
          <p>Be a part of one of our many in-person courses and start your learning adventure now.</p>
          <button className='cta-button'>Sign Up</button>
        </div>
      </div>
      <div className='card-list'>
        {course.map(item => (
          <div key={item.id} className='card'>
            <img src={item.image} alt={`Image for ${item.description}`} className='course-image' />
            <h3 className='description'>{item.description}</h3>
            <div className="popup">
              <p>{item.detailedDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
