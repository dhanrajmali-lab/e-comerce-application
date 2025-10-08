import './login.css';
import axios from "axios"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const ForgotPassword =()=>{

    const navigate = useNavigate()
    const[email,setEmail] =useState('')
    const[password,setPassword] = useState('')
    const[confirmPassword,setconfirmepassword]= useState('')

    const handleSubmit=async(event)=>{
    event.preventDefault();

    if(password === confirmPassword)
    {
       
        await axios.post("http://localhost:5000/user/forgot", {
        email,
        password,
      })
      .then((res)=>{

            if(res.status == 200)
            {
              toast.success("password is forgot")
              navigate('/')
            }
      })
      .catch((er)=>{
        console.log(er)
      })
    }
    else{

        console.log("password is not matched")
    }

    }
    return(
        <>
         <div class="main">
        <div class="box">
            <form onSubmit={handleSubmit}>
                <div class="heading">
                    <h1>Fogot password </h1>
                </div>
                
                <div class="group">
                      <label for="Email"> Email </label> <br/>
                       <input
                       type="email"
                       id="email"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                         required
                        />
                </div>
                <div class="group">
                      <label for="password"> password </label> <br/>
                     <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
                </div>
                 <div class="group">
                      <label for="confirm password"> confirm password </label> <br/>
                        <input
                type="password"
                id="conpassword"
                value={confirmPassword}
                onChange={(e) => setconfirmepassword(e.target.value)}
                required
              />
                </div>

                <button type="submit"> Confirm</button>
         
            </form>
        </div>
    </div>
        </>
    )
}

export default ForgotPassword;