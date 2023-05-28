import React, { useEffect, useState } from 'react';
import '../src/Nav.css';

function Nav() {

    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

/* As we scroll, we trigger transitionNavBar */
    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []) 

  return (
    <div className={`nav ${show && 'nav__black'}`}>

        <div className='nav__contents'>
            <img  src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt='' className='nav__logo'/>
            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png' alt='' className='nav__avatar'/>
        </div>

    </div>
  )
}

export default Nav