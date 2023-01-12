import './certList.css'
import CourseCard from './courseCard'

export default function CourseList ({ subject, courseList }) {
  return (
    <div className='mt4'>
      <div>
        <h1 className='grow f2 dark-gray subject fw9'>{subject}</h1>
        {courseList
          .map(course => {
            return course.skills
          })
          .flat()
          .filter((v, i, a) => a.indexOf(v) === i)
          .map((skill, i) => {
            return (
              <p key={i} className='f5 grow no-underline br-pill ph3 pv2 mb2 ma1 dib white skill'>
                {skill}
              </p>
            )
          })}
      </div>
      <div>
        {courseList.map((course, i) => {
          return <CourseCard key={i} course={course}/>
        })}
      </div>
    </div>
  )
}
