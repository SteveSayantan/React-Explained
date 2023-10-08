import React from 'react'
import logo from './logo.svg'
import { links } from './data'
import { useRef } from 'react'
import { useEffect } from 'react'

// !! DON'T USE THIS ONE , AS HOOKS ARE USED UNNECESSARILY !!!!
const Navbar = () => {
  
  const navRef= useRef(null);       // to target the nav element
  const handleSmoothScroll= ()=>{
    const navHeight= navRef.current.getBoundingClientRect().height;     
    document.documentElement.style.setProperty('scroll-padding-top',`${navHeight}px`)   // setting the property on html element dynamically
  }

 useEffect(handleSmoothScroll,[])   // To execute on initial render

 useEffect(()=>{
  window.addEventListener('resize', handleSmoothScroll);    // To execute on resize, as due to resize the height of nav may change
  return ()=>{
    window.removeEventListener('resize', handleSmoothScroll)
  }
 })

  return (
    <nav className='navbar sticky' ref={navRef}>
      <div className='nav-center'>
        <img src={logo} alt='smooth scroll' />
        <div>
          {links.map((link) => {
            return (
              <a href={link.url} key={link.id} onClick={handleSmoothScroll}>
                {link.text}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar