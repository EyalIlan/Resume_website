import React from 'react'
import "./Navbar.css"

interface Props  {

}

const Navbar:React.FC<Props> = () => {
  return (
    <div className='navbar'>
            
            <div id='navbar_container'>
                <div className='logo'>
                    <h2>Eyal Ilan</h2>
                </div>
                <div className='links'>
                        <a href="/">About</a>
                        <a href="/">Projects</a>
                        <a href="/">Contact</a>
                </div>
            </div>
           
    </div>
  )
}

export default Navbar