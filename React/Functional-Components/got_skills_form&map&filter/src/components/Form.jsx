import React ,{useState} from 'react'

const Form = (props) => {
    const{usersSkill,setUsersSkill}=props
    const[skill,setSkill]=useState("")
    const[superSkilled,setSuperSkilled]=useState(false)


    // submit the form
        const hundlerSubmit=(e)=>{
            e.preventDefault()
            const skillInfo={skill,superSkilled}
            setUsersSkill([...usersSkill,skillInfo])
            setSkill("")
            setSuperSkilled(false)
        }

    return (
        <div>
            <form onSubmit={(e)=>hundlerSubmit(e)} >
                <div>
                    <label className='skillLabel' htmlFor="skill">Enter your Skill : </label>
                    <input className='skillInput' type="text" name="skill" onChange={(e)=>setSkill(e.target.value)} value={skill}/>
                    <p>

                        {/* keep track of superSkilled to get the value of checked when the user checked or not (true or false) */}
                    <input className='checkSuper' type="checkbox" name="superSkill" checked={superSkilled} 
                    onChange={(e)=>setSuperSkilled(e.target.checked)}
                    value={superSkilled}/>

                    <span className='superSkill'>Are you super skilled at this  ?</span>
                    <br />
                    <input type="submit" value="Add Skill" className='add' />
                    </p>
                    
                </div>
            </form>
        </div>
    )
    }

export default Form