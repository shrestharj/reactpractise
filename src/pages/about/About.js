import React, { useState } from 'react'

const About = () => {
const[data,setData]= useState({
    name:"",
    school:"",
    subject:"",
    class:"",
    date:"",
    cars:"",
    fav_language:""

});
    const handleChange=(e)=>{
        // e.target.name, e.target.value
        setData({...data,[e.target.name]:e.target.value});
        

    }
    console.log(data);
    
    return (
        <div>
            <form>
                <input type="text" name='name' onChange={handleChange}/>
                <input type="text" name='school' onChange={handleChange} />
                <input type="text" name='subject' onChange={handleChange}/>
                <input type="text" name='class' onChange={handleChange}/>
                <input type="date"name='date'onChange={handleChange}/>
                <label for="cars">Choose a car:</label>

                <select name="cars" id="cars" onChange={handleChange}>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>

                </select >

                <input type="radio" id="html" name="fav_language" value="HTML" onChange={handleChange}/>
                <label htmlFor="html">HTML</label> <br />
                <input type="radio" id="css" name="fav_language" value="CSS" onChange={handleChange} />
                <label htmlFor="css">CSS</label><br />
                <input type="radio" id="javascript" name="fav_language" value="JavaScript" onChange={handleChange} />
                <label htmlFor="javascript">JavaScript</label>
            </form>
        </div>


    )
}

export default About
