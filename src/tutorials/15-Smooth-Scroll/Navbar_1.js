import React from 'react'
import logo from './logo.svg'
import { links } from './data'


const Navbar = () => {
  
  const handleClick = (e) => {
    e.preventDefault()      // Preventing the scroll event when the link is clicked
    const target = e.target.getAttribute('href')        // getting the value of href attribute i.e. the id of the section
    const location = document.querySelector(target).offsetTop     // returns the height of a particular section

    window.scrollTo({     // For scrolling to the exact location
      left: 0,
      top: location - 64, // 64 px is the default height of navbar
    })
  }
 

  return (
    <nav className='navbar sticky' >
      <div className='nav-center'>
        <img src={logo} alt='smooth scroll' />
        <div>
          {links.map((link) => {
            return (
              <a href={link.url} key={link.id} onClick={handleClick}>
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