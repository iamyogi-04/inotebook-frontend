import React from "react";
import BookData from "./BookData";
import "./lastpage.css";
import StudentCard from "./StudentCard";
const LastPage = ({student,setBookup}) => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <p className="navbar-brand" href="#">
            inotebook
          </p>
        </div>
      </nav>
      <div className="container-fluid main">
        <div className="d-flex justify-content-evenly">
          <StudentCard student={student} />
          <div className="right">
            <h2>Books Details</h2>
            <hr />
            <div className="table">
            <BookData  setBookup={setBookup}/>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default LastPage;
