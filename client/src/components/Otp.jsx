import { useState,useEffect } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import {toast } from "react-toastify";
import axios from "axios";
const Otp =()=>{

    const [otpd,setOtp] = useState('')
  
     const navigate = useNavigate();

    const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
      const response = await axios.post("http://localhost:5000/user/otp",{
        otpd })
      if (response.status == 200) {
        if (response.data.roles === "admin") {
             
          toast.success("admin Login successful!");
          navigate('/adminDashboard')

        } else if (response.data.roles === "vendor") {
          toast.success("vendor Login successful!");
          navigate('/vendor')

        } else {
          toast.success(" user Login successful!");
          navigate('/user')

        }
      } 
      else {
        toast.error(`Login failed: ${response.data}`);
      }
    } catch (err) {
      console.error(
        "Login error:",
        err
      );
      toast.warning("error");
    }
  };

    return(
        <>
           <div className="main">
        <div className="box">
          <form onSubmit={handleSubmit}>
            <div className="heading">
              <h1>otp verify</h1>
            </div>
            <div className="group">
              <label for="otp">Enter Otp </label>
              <input
                type="text"
                id="otp"
                value={otpd}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>

            <button type="submit">verify</button>

          </form>
        </div>
      </div>
        </>
    )
}


export default Otp;