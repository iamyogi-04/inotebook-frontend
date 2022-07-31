import React from 'react'
import { useState, useEffect } from 'react'
import BookCard from './BookCard'
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const BookData = ({setBookup}) => {
  let navigate = useNavigate();

    const [bookdata, setBookData] = useState()  
  let id=localStorage.getItem("id");
  console.log(id);
  if(localStorage.getItem("authtoken")===null){
    navigate('/')
  }
    const fetchdata = async()=>{
      
      let res = await axios.get("http://localhost:5000/api/getdata/"+id,
      
       );
      let data = res.data;
      console.log(data);
      setBookData(data)
        
    }
    useEffect(() => {
        fetchdata()
    },[])
    
   
  return (
    <>
    <div className="book-das">
   <div className='row-name'> BookName</div>
   <div className='author'>Author</div>           
   <div className='borrowed'>Borrowed By</div>           
   <div className='bdate'>Date Of Borrow</div>            
   <div className='redate'>Expected Return</div>
   <div className='button'>EDIT</div>     
    </div>
          <div className="container-fluid2">
              {bookdata?.map((book,idx)=>{return <BookCard  book={book} setBookData={setBookData} setBookup={setBookup} key={idx}/>})}
          </div>

    </>
  )
}

export default BookData