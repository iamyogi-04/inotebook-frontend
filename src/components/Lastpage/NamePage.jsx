import React from 'react'
import {useState} from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'
const NamePage = () => {
  const [post, setpost] = useState({ firstname: "", lastname: "" })

  const onTextFieldChange = (e) => {
    // console.log(e.target.value)
    setpost({ ...post, [e.target.name]: e.target.value }) // post.title
}
  const addname=(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('firstname', post.firstname)
    formData.append('location', post.lastname)
    const postadd = async () => {
        await Axios.post("http://localhost:4040/api/v1/updatestudent", formData, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" }
        }).then(res => console.log(res)).catch(err => console.log(err))
        alert("Post added successfully")

    }
    postadd();
    console.log(formData);
  }
  return (
    <>
      <div className="container">
        <form action="" onSubmit={addname}>
          <h2>Edit Name details</h2>
          <input type="text" onChange={onTextFieldChange} placeholder='firstname' name="firstname" />
          <hr />
          <input type="text" onChange={onTextFieldChange} placeholder='lastname'  name="lastname"/>
          <hr />
          <Link to="/lastpage"><button>Submit</button></Link>
        </form>
      </div>
    </>
  )
}

export default NamePage