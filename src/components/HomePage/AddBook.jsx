import React from 'react'
import Axios from 'axios'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
const AddBook = ({student}) => {
    let navigate = useNavigate();

    const [bookname,setBookna]= useState()
    const [author,setAuthor]= useState()
    const [borrowedby,setBorrowedby]= useState()
    const [expectedreturns,setExpectedreturns]= useState()
    console.log(student);
    const handleSubmit=async(e) => {
      try {
        let id=student._id
        // _id: '62e56b2ee93907a87466e103
        e.preventDefault();
       
        var adddata={bookname:bookname,author:author,borrowedby:borrowedby,expectedreturns:expectedreturns}
       
           const postupdate= await Axios.post("http://localhost:5000/api/adddata/"+id, adddata,)
          console.log(postupdate);
        navigate("/Home")
        
      } catch (error) {
        
      }
        
      }
  return (
    <>
        <div className="container">
        
        <form action="" onSubmit={handleSubmit}>
        <h2>Add Book Details</h2>
              <input type="text" required onChange={(e)=>setBookna(e.target.value)} placeholder='Bookname' name="bookname" />
              <hr />
              <input type="text" required onChange={(e)=>setAuthor(e.target.value)} placeholder='Author'  name="author"/>
              <hr />
              <input type="text" required onChange={(e)=>setBorrowedby(e.target.value)} placeholder='Borrowed By'  name="borrowedby"/>
              <hr />
              <input type="text"  required onChange={(e)=>setExpectedreturns(e.target.value)} placeholder='eg. 30-07-2022'  name="expectedreturns"/>
              <hr />
              <button>Submit</button>
            </form>
        </div>
    </>
  )
}

export default AddBook