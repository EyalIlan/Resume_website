import React from 'react'
import "./Footer.css"
interface Props {

}

const Footer:React.FC<Props> = () => {
  return (
    <div className='footer'>
        <div>

        
        <p>
            Made by Eyal ILan "love"
        </p>
        <p>
           Phone: 0509599095 
        </p>
        <p>
           Email:  eyalilan8@gmail.com 
        </p>
        </div>
    </div>
  )
}

export default Footer