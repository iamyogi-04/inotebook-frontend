import React from 'react'
import { useState, useEffect } from 'react'
import BookCard from './BookCard'
import axios from "axios";

const BookData = ({setBookup}) => {
    const [bookdata, setBookData] = useState()  
    //  62e56b2ee93907a87466e103
  let id=localStorage.getItem("id");
  console.log(id);
    // const host= "http://localhost:4040/api/v1/getdata"
    const fetchdata = async()=>{
      let token=localStorage.getItem("token")
      
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
   <div className='row'> BookName</div>
   <div className='row'>Author</div>           
   <div className='row'>Borrowed By</div>           
   <div className='row'>Date Of Borrow</div>            
   <div className='row'>Expected Return</div>     
    </div>
          <div className="container-fluid">
              {bookdata?.map((book,idx)=>{return <BookCard  book={book} setBookup={setBookup} key={idx}/>})}
              {/* <BookCard/> */}
          </div>

    </>
  )
}

export default BookData