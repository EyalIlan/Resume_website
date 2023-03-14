import React from 'react'
import './SkillBox.css'

interface Props {
    imageUrl:string
    title:string
}

const SkillBox:React.FC<Props> = ({imageUrl,title}) => {
  return (
    <div className='skill_box'>
        <p>{title}</p>
        <img src={`/images/${imageUrl}`} alt="" />
    </div>
  )
}

export default SkillBox