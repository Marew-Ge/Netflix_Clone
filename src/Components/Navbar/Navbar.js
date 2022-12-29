import React, { useState, useEffect } from 'react'
// import  components
import './Navbar.css'
import { images } from '../Images/imager';

function Navbar() {

  // const [show, setShow] = useState(false);

  // const scrollHandler = () => {
  //   if (window.scrollY > 100) {
  //     setShow(true)
  //   } else {
  //     setShow(false)
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', scrollHandler)
  //   return () => {
  //     window.removeEventListener('scroll', scrollHandler);
  
  //   };
  
  // }, [show])

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 100) {
  //       setShow(true);
  //     } else setShow(false)
  //     // console.log(show) 
  //     return () => {
  //       window.removeEventListener("scroll");
  //     };
  //   });
  // }, [])

  // import React, { useState, useEffect } from 'react';

    const [scrolled, setScrolled] = useState(false);

    // change state on scroll
    useEffect(() => {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 100;
        if (isScrolled !== scrolled) {
          setScrolled(!scrolled);

        }

      };

      document.addEventListener('scroll', handleScroll, { passive: true });
      console.log(window.scrollTo)
      return () => {
        // clean up the event handler when the component unmounts
        document.removeEventListener('scroll', handleScroll);
        console.log(window.innerHeight)

      };


    }, [scrolled]);
 
    return (
      <div className={`nav ${ scrolled&& "nav_black" }`}
      >
        <img className="nav_log"
          src={images.logo}
          alt="Logo" />

        <img className='nav_avator'
          src={images.avatar}
          alt="avator" />

      </div>
    )
  
}




export default Navbar;
