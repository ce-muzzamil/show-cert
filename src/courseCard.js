import './courseCard.css'

function CourseCard ({ course }) {
  let key = 'IMG'
  let style = {}

  if (course.type === 'Seminar') {
    key = course.title
  } else if (course.type === 'Degree') {
    key = course.title
    style.minWidth = 560
  } else {
    key = course.certificate.split('/')
    key = key[key.length - 1]
  }

  return (
    <div
      className={'course-card dib ma1 grow'.concat(
        course.type === 'Degree' ? ' ba bw2 br3 pa1' : ''
      )}
      style={style}
    >
      <a href={course.link} target='_blank' rel="noreferrer">
        <img src={`certs/${key}.png`} alt={course.title} />
      </a>
    </div>
  )
}

export default CourseCard
