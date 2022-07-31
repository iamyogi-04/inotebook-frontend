import React from 'react'
import Login from './components/Login/Login'
import { useState,useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './components/Register/Register'
import Home from './components/HomePage/Home'
import NamePage from './components/Lastpage/NamePage'
import BookPage from './components/Lastpage/BookPage'
import AddBook from './components/Lastpage/AddBook';

const App = () => {
  const [student,setStudent]=useState("")
  const[bookupdate,setBookup]=useState()
  useEffect(() => {
    setBookup()
    
  
      
  }, [])
  
  
  return (
    <>
    
      <BrowserRouter>
        
          <Routes>
            <Route path="/" element={<Login setStudent={setStudent}/>} />
            <Route path="/register" element={<Register  />} />

            <Route path="/Home" element={<Home student={student} setBookup={setBookup} />} />
            <Route path='/addbook' element={<AddBook student={student}/>}/>
            <Route path="/editdata" element={<NamePage student={student} setStudent={setStudent} />}/>
            <Route path="/editbook" element={<BookPage student={student} bookupdate={bookupdate} />}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App