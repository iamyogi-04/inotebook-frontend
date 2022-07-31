import React from 'react'
import {Link} from 'react-router-dom'


const StudentCard = ({student}) => {
  
  return (
    <>
    <div className="left">
            <h2>Student Details</h2>
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
              
                <td><Link to="/editdata"><button >edit</button></Link></td>
              </tr>
              
            </table>
            </div>
            
          </div>
    </>
  )
}

export default StudentCard