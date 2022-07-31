import React from 'react'
import './bookpage.css'
import {Link} from 'react-router-dom'
import Axios from 'axios'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';


const BookPage = ({bookupdate}) => {
  let navigate = useNavigate();

  const [bookname,setBookna]= useState()
  const [author,setAuthor]= useState()
  const [borrowedby,setBorrowedby]= useState()
  const [expectedreturns,setExpectedreturns]= useState()
 
const bookid = bookupdate._id;

  
  const handleSubmit=async(e) => {
    e.preventDefault();
   
    var updatedata={bookname:bookname,author:author,borrowedby:borrowedby,expectedreturns:expectedreturns}
   
       const postupdate= await Axios.put("http://localhost:5000/api/updatedata/"+bookid, updatedata,)
      console.log(postupdate);
    navigate("/Home")
    
  }

  return (
    <>
    <div className="container">
        
    <form action="" onSubmit={handleSubmit}>
    <h2>Edit Book Details</h2>
          <input type="text" onChange={(e)=>setBookna(e.target.value)} placeholder='Bookname' name="bookname" />
          <hr />
          <input type="text" onChange={(e)=>setAuthor(e.target.value)} placeholder='Author'  name="author"/>
          <hr />
          <input type="text" onChange={(e)=>setBorrowedby(e.target.value)} placeholder='Borrowed By'  name="borrowedby"/>
          <hr />
          <input type="text" onChange={(e)=>setExpectedreturns(e.target.value)} placeholder='eg. 30-07-2022'  name="expectedreturns"/>
          <hr />
          <button>Submit</button>
        </form>
    </div>
    </>
  )
}

export default BookPage