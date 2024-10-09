
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
      <div>
        <h2></h2>
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