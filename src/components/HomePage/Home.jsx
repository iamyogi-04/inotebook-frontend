import React from "react";
import BookData from "./BookData";
import "./home.css";
import { useNavigate } from 'react-router-dom';
import StudentCard from "./StudentCard";

const Home = ({student,setBookup}) => {
  let navigate = useNavigate();
  console.log(localStorage.getItem("authtoken"));
if(localStorage.getItem("authtoken")===null){
  navigate('/')
}
  const handleadd=()=>{
  navigate('/addbook')
  }
  return (
    <>
      <nav className="navbar navbar-dark">
        <div className="container-fluid">
          <p className="navbar-brand heading" href="#">
            Inotebook
          </p>
        </div>
      </nav>
      <div className="container-fluid main">
        <div className="d-flex justify-content-evenly">
          <StudentCard student={student} />
          <div className="right">
            <h2>Books Details</h2>
            <button onClick={handleadd}>Add</button>
            <hr />
            <div className="table2">
            <BookData  setBookup={setBookup}/>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
