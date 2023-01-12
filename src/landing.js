import './landing.css'
import freelancerLogo from './icons/freelancer.svg'
import upworkLogo from './icons/upwork.svg'
import linkedinLogo from './icons/linkedin.svg'
import githubLogo from './icons/github.svg'
import topIcon from './icons/top.svg'
import mailIcon from './icons/mail.svg'

const handleClickScroll = id => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const isScreenBig = ()=>{
  if (window.innerWidth < 700){
    return false
  }
  else{
    return true
  }
}

function Landing () {
  // if (window.innerWidth < 700) {
  //   const element1 = document.getElementById('top')
  //   if (element1)
  //     element1.style.borderRadius = '0px'
  //   const element2 = document.getElementById('bottom')
  //   if (element2)
  //     element2.style.borderRadius = '0px'
  // }

  return (
    <div
      className={'landing gradient full-height flex inline-wrap justify-center'.concat(isScreenBig()?' upper-border':'')}
      id='top'
    >
      <div className='dib ml10 pl10'>
        <h1 className='intro near-white'>
          Hi! I am <span className='yellow'>Muzzamil</span>, a Civil Engineer,
          Software Developer and Data Scientist.
        </h1>
        <div className='flex inline-wrap'>
          <a
            href='https://pern-my.sharepoint.com/:b:/g/personal/muhammad_1171430_talmeez_pk/EVfiuFO5bpdDg14rx6U2-wcBhi1ANoiapIp71523unyp4A?e=cPGyqo'
            download='muzzamil resume.pdf'
            target='_blank'
            rel='noreferrer'
            className='no-underline'
          >
            <h4 className='f6 grow no-underline br-pill ba ph2 pv2 w25 yellow tc pointer'>
              View Resume
            </h4>
          </a>

          <h4
            className='f6 grow no-underline br-pill ba ph2 pv2 w25 yellow ml2 tc pointer'
            onClick={() => handleClickScroll('certifications')}
          >
            View Cerificates
          </h4>
        </div>
      </div>

      <img
        src='avatar.jpg'
        alt='Muzzamil'
        className='avatar grow dib mr10 pr10'
      />
    </div>
  )
}

function Contact () {
  return (
    <div className={'gradient half-height mt3 tc'.concat(isScreenBig()?' lower-border':'')} id='bottom'>
      <div className='h-25'>
        <img
          src={topIcon}
          className='top pointer'
          onClick={() => handleClickScroll('top')}
          alt='site-icon'
        />
      </div>
      <div className='h-75'>
        <div className='landing justify-center h-75'>
          <a
            href='https://www.freelancer.com/u/cemuzzamil'
            target='_blank'
            rel='noreferrer'
          >
            <img src={freelancerLogo} className='icon grow' alt='site-icon' />
          </a>
          <a
            href='https://www.upwork.com/freelancers/~01c92ee66b66142e29'
            target='_blank'
            rel='noreferrer'
          >
            <img src={upworkLogo} className='icon grow' alt='site-icon' />
          </a>
          <a
            href='https://www.linkedin.com/in/muhammad-muzzamil-3794161b6/'
            target='_blank'
            rel='noreferrer'
          >
            <img src={linkedinLogo} className='icon grow' alt='site-icon' />
          </a>
          <a
            href='https://github.com/ce-muzzamil'
            target='_blank'
            rel='noreferrer'
          >
            <img src={githubLogo} className='icon grow' alt='site-icon' />
          </a>
        </div>
        <div className='landing justify-center h-25'>
          <a href='mailto:ce.muzzamil@gamil.com'>
            <img src={mailIcon} className='top pointer' alt='site-icon' />
          </a>
        </div>
      </div>
    </div>
  )
}

export { Landing, Contact }
