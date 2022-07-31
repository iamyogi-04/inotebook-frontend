import React from 'react';
import { useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import axios from "axios";
import './login.css';

const Login = ({setStudent}) => {
    let navigate = useNavigate();
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [login, setLogin] = useState({
        email: "",
        password: "",
    })
    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(email,password)
        try {
            setLogin({...login,email:email,password:password});
            let Login={email:email,password:password}
            let res = await axios.post("http://localhost:5000/api/login", Login);
            let data = res.data;
            console.log(data.dats1);
            setStudent(data.dats1)
            if(data.status==="success"){
                localStorage.setItem("authtoken", data.token)
                localStorage.setItem("id", data.dats1._id)
                alert("User login Successfull")
                navigate("/Home");
            }else{
                alert(data.error)

            }
        } catch (error) {
            alert("User not registered")
            console.log(error)
        }
    }
    
    return (
        <>
        
        <div className="login">
            
            <form className='loginform' onSubmit={handleSubmit}>
            <h1>Login</h1>
                <div className="mb-3 ">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" onChange={(e)=>setEmail(e.target.value)} className="form-control" id="email" placeholder='Email' name='email'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" onChange={(e)=>setPassword(e.target.value)} name="password" className="form-control" id="password" placeholder="Password"/>
                </div>
                <div className="buttons">
                <button type="submit" className="btn btn-secondary but" >Login</button>
                <Link to="/register"><button type="submit" className="btn btn-secondary mx-3">SignUp</button></Link>
                </div>
                
                
            </form>
            </div>

        </>
    )
}

export default Login
