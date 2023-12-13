import React from 'react'

const Display = (props) => {
    const{usersSkill,setUsersSkill}=props


    // delete skill from the susersSkill list
    const removeSkill=(index)=>{
        const updatedSkill=usersSkill.filter((_skill,idx)=> index !== idx )
        setUsersSkill(updatedSkill)
    }


    return (
        <div className='skillsInfo'>
            {
                // mapping through the sksusersSkillill list to display info belogs to it
                usersSkill.map((allInfoSkill,index)=>(
                    <div key={index}>
                        {console.log(allInfoSkill)}
                        <p>Skill : {allInfoSkill.skill}</p>
                        <p>this user is super at this skill : <span className='resultSuper'>{allInfoSkill.superSkilled +" !!"}</span></p>
                        <button className='removeSkill' onClick={()=>removeSkill(index)}>Remove Skill</button>
                    </div>
                ))
            }
        </div>
    )
}
export default Display