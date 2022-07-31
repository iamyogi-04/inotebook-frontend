import React from 'react'
import {useState} from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './namepage.css'

const NamePage = ({student,setStudent}) => {
  let navigate = useNavigate();
  // console.log(student)

  const [firstname,setFirstname]= useState()
  const [lastname,setlastname]= useState()
  
  const addname=async(e) => {
    try {
      e.preventDefault();
      console.log(student._id)
      let id=student._id;
   
    var updatedata={firstname:firstname,lastname:lastname}
   
       const postupdate= await Axios.put("http://localhost:5000/api/updatestudent/"+id, updatedata,)
      console.log(postupdate);
      // console.log(postupdate.data.data);

      setStudent(postupdate.data.data)
      alert("success")
    navigate("/Home")
    } catch (error) {
      console.log(error)
    }
    
  }
  return (
    <>
      <div className="container namepage">
        <form action="" onSubmit={addname}>
          <h2>Edit Name details</h2>
          <input type="text" onChange={(e)=>setFirstname(e.target.value)} placeholder='firstname' name="firstname" />
          <hr />
          <input type="text" onChange={(e)=>setlastname(e.target.value)} placeholder='lastname'  name="lastname"/>
          <hr />
          <button className='submit'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default NamePage