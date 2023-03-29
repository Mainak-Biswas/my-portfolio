import React from 'react'

const Skills = ({skillName, skillNumber}) => {
  return (
    <div className="skils__data">
        <div className="skills__titles">
            <h3 className="skills__name">{skillName}</h3>
            <span className="skills__number">{skillNumber}%</span>
        </div>
        
        <div className="skills__bar">
            <span className="skills__percentage" 
              style={{width: ((skillNumber)+"%"), backgroundColor: ("#"+(Math.floor(Math.random()*16777215).toString(16)))}} >
            </span>
        </div>
    </div>
  )
}

export default Skills