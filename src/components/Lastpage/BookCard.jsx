import React from 'react'
import "./bookpage.css"
import { useNavigate } from 'react-router-dom';

const BookCard = ({book,setBookup}) => {
  let navigate = useNavigate();

  const handleupdate=async(obj)=>{
    setBookup(obj)
    navigate("/editbook")
    
  }
    // const {book}=props
  return (
    <>
   <div className="book-das">
   <div className='row'> {book.bookname}</div>
   <div className='row'>{book.author}</div>           
   <div className='row'>{book.borrowedby}</div>           
   <div className='row'>{book.dateofborrow}</div>            
   <div className='row'>{book.expectedreturns}</div>           
   <div className='row'><button onClick={handleupdate(book)} className="editbook" >edit</button><button className='bookadd'>Add Book</button></div>           
   </div>
              
    </>
  )
}

export default BookCard