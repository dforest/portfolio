import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'

import TitleSvg from '../images/title.svg'
import TitleDeactiveSvg from '../images/title_deactive.svg'

const Header = ({location, displayPos}) => {
  const HeaderTitle = location && location.pathname === '/' ? TitleSvg : TitleDeactiveSvg
  const defaultStyle = displayPos ? {visibility: 'hidden'} : {visibility: 'visible'}
  const [style, setStyle] = useState(defaultStyle)

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll)
  })

  const scrollTop = () => {
    return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)
  }

  const onScroll = () => {
    const position = scrollTop()
    const basisPos = displayPos ? displayPos : 0
    if (position >= basisPos) {
      setStyle({visibility: 'visible'})
    } else {
      setStyle(defaultStyle)
    }
  }

  return (
    <header className='navbar px-8' style={style}>
      <div className='container mx-auto max-w-4xl'>
        <ul className='flex items-center space-x-7'>
          <li className='mr-4 md:mr-12'>
            <Link to='/'>
              <img src={HeaderTitle} alt='Mkit lab.' className='w-[125px]' />
            </Link>
          </li>
          <li className={ location.pathname === '/about/' ? 'active' : ''}>
            <Link to='/about'>
              { location.pathname === '/about/' ? 'About.' : 'About' }
            </Link>
          </li>
          <li className={ location.pathname === '/works/' ? 'active' : ''}>
            <Link to='/works'>
              { location.pathname === '/works/' ? 'Works.' : 'Works' }
            </Link>
          </li>
          <li className={ location.pathname === '/posts/' ? 'active' : ''}>
            <Link to='/posts'>
              { location.pathname === '/posts/' ? 'Posts.' : 'Posts' }
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
