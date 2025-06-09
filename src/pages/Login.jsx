import { useNavigate } from "react-router-dom";
import React, { useState }from 'react';



const Login = () => {

    const[err,setErr] = React.useState(false);
    const navigate = useNavigate();




const handleSubmit = async (e) => {
    e.preventDefault();
    
    const email = e.target[0].value;
    const password = e.target[1].value; 
    


  try{
    



  } catch(err) {
    setErr(true);
    
  }





}


    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Chat App</span>
                <span className="title">Login</span>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    
                    <button>Sign In</button>
                </form>
                {/* <button>Sign Up</button> */}
                <p>You don't have an account? Register</p>
                {/* <form>
                    <input type="text" placeholder="display Name" />
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="Password" />
                    <input type="file" />

                </form> */}

            </div>
        </div>
    )

}

export default Login;