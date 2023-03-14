import React from 'react'
import "./projectBox.css"
interface Props {
    title:string
    description:string
}

const projectBox: React.FC<Props> = () => {
    return (
        <div className='projectBox'>
            <div className='box_content'>
                <h2>Project title</h2>
                <hr />
                <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nihil
                     quod ab, suscipit deleniti libero nam commodi modi corrupti itaque dolore
                      magnam neque eaque error blanditiis! Perferendis ipsum quia dolore.
                </p>
            </div>
            <div className='boxButtons'>

                <button className='btn  btn-outline-primary'>Github</button>
                <button className='btn  btn-outline-primary'>Live</button>

            </div>
        </div>
    )
}

export default projectBox