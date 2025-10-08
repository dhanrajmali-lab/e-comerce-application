import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const [jwt, setJwt] = useState("");
  useEffect(() => {
    localStorage.setItem("token", jwt);
  }, [jwt]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/user/login", {
        email,
        password,
      });

      if (response.status == 200) {
        setJwt(response.data.jwt);
        navigate("/otp");
      } else {
        toast.error(`Login failed: ${response.data}`);
      }
    } catch (err) {
      console.error(
        "Login error:",
        err.response?.data?.message || "An error occurred"
      );
      toast.warning("Login is not  successful!");
    }
  };

  return (
    <>
      <div className="main">
        <div className="box">
          <form onSubmit={handleSubmit}>
            <div className="heading">
              <h1>Login Form</h1>
            </div>
            <div className="group">
              <label for="Email">Email </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="group">
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <h4 className="forgot-link">
              {" "}
              <Link to="/forgot">Forgot Password?</Link>
            </h4>

            <button type="submit">LOGIN</button>

            <h4 className="link">
              Not a member? <Link to="/singup">Singup now</Link>
            </h4>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
