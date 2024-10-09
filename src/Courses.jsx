
import './courses.css';

const Courses = () => {

  const course = [
    {
      id:1,
      image: 'image',
      description: 'this'
    },
    {
      id:2,
      image: 'image',
      description: 'this'
    },
    {
      id:3,
      image: 'image',
      description: 'this'
    }
  ];

  return ( 
    <div className='courses'>
      <div className='intro-card'>
        <div className='content'>
          <h2>Hands on courses</h2>
          <p>Be a part of one of our many in person courses and start your learning adventure now.</p>
          <button className='cta-button'>Sign Up</button>
        </div>
      </div>
      <div className='card-list'>
        {course.map(item => (
          <div key={item.id} className='card'>
            <h3>{item.description}</h3>
          </div>
        ))}
      </div>
    </div>
   );
}
 
export default Courses;