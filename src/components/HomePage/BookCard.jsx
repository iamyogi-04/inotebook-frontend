import React from 'react'
import "./bookpage.css"
import { useNavigate } from 'react-router-dom';

const BookCard = ({book,setBookup}) => {
  let navigate = useNavigate();
  // console.log(book)

  const handleupdate=async()=>{
    setBookup(book)
    console.log(book)

    navigate("/editbook")
  }
  return (
    <>
   <div className="book-das2">
   <div className='row-name'> {book.bookname}</div>
   <div className='author'>{book.author}</div>           
   <div className='borrowed'>{book.borrowedby}</div>           
   <div className='bdate2'>{book.dateofborrow}</div>            
   <div className='redate'>{book.expectedreturns}</div>           
   <div className='button'><button onClick={handleupdate} >edit</button></div>           
   </div>
              
    </>
  )
}

export default BookCard