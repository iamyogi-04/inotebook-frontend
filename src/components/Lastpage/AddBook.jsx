import React from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
const AddBook = () => {
    let navigate = useNavigate();

    const [bookname,setBookname]= useState()
    const [author,setAuthor]= useState()
    const [borrowedby,setBorrowedby]= useState()
    const [expectedreturns,setExpectedreturns]= useState()

    const handleSubmit=async(e) => {
        e.preventDefault();
       
        var adddata={bookname:bookname,author:author,borrowedby:borrowedby,expectedreturns:expectedreturns}
        let id = localStorage.getItem("id")
           const postupdate= await Axios.post("http://localhost:5000/api/adddata/"+id, adddata,)
          console.log(postupdate);
        navigate("/Home")
        
      }
  return (
    <>
        <div className="container">
        
        <form action="" onSubmit={handleSubmit}>
        <h2>Add Book Details</h2>
              <input type="text" onChange={(e)=>setBookname(e.target.value)} placeholder='Bookname' name="bookname" />
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

export default AddBook