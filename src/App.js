import CourseList from './certList'
import {Landing, Contact} from './landing'
import { specializations, courses, seminars, degrees } from './courses.js'
import './App.css'

function App () {
  let subjects = courses
    .map(courses => {
      return courses.type
    })
    .filter((v, i, a) => a.indexOf(v) === i)

  return (
    <div className='container'>
      <Landing />
      <div className='tc' id='certifications'>
        {<CourseList key='Degree' courseList={degrees} subject='Degree' />}
        {
          <CourseList
            key='Specialization'
            courseList={specializations}
            subject='Specialization'
          />
        }
        {subjects.map(subject => {
          return (
            <CourseList
              key={subject}
              courseList={courses.filter((v, i) => v.type === subject)}
              subject={subject}
            />
          )
        })}
        {<CourseList key='Seminars' courseList={seminars} subject='Seminars' />}
      </div>
      <Contact/>
    </div>
  )
}

export default App
