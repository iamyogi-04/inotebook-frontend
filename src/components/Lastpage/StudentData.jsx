import React ,{useState,useEffect}from 'react'
import StudentCard from './StudentCard';
const StudentData = () => {
    // const [data, setData] = useState()

    // const host= "http://localhost:4040"
    // const fetchdata=async()=>{
    //     const response = await fetch(`${host}/api/v1/getstudentdata`, {
    //         method: "GET",
    //         headers: { 
    //           "Content-Type": "application/json",
    //         },
    //       });
    //     const json = await response.json();
    //     console.log(json);
    //     setData(json)
    // }
    // useEffect(() => {
    //     fetchdata()
    // })
    

  return (
    <>
    <div className="container-fluid">
        {/* {data.map((post)=>{return <StudentCard  post={post} key={post._id}/>})} */}
        <StudentCard/>
    </div>

    </>
  )
}

export default StudentData
