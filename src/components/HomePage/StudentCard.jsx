import React from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const StudentCard = ({student}) => {
  let navigate = useNavigate();

  const handlelogout=()=>{
    localStorage.clear()
    navigate("/")
  }
  return (
    <>
    <div className="left">
            <h2>Student Details</h2>
            
            <button  className='logout' onClick={handlelogout}>Logout</button>
            <hr />
            <div className="inner">
            <table className="table" >
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                
              </tr>
              <hr />
              <tr>
                 <td>{student.firstname}</td> 
                <td>{student.lastname}</td> 
              
                <td><Link to="/editdata"><button className='editbutton' >edit</button></Link></td>

              </tr>
              
            </table>
            </div>
            
          </div>
    </>
  )
}

export default StudentCard