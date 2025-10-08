import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Singup = () => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roles, setRoles] = useState("");
  const [address, setAdress] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/user/create", {
        name,
        email,
        password,
        roles,
        address,
      });

      if (response.status == 200) {
        toast.success("user is created");
      } else {
        toast.error(`user creation  failed: ${response.data}`);
      }
    } catch (error) {
      console.error("registration error:", error || "An error occurred");
      toast.error(`registration failed: ${error}`);
    }
  };

  return (
    <>
      <div className="main">
        <div className="box">
          <form onSubmit={handleSubmit}>
            <div className="heading">
              <h1>Singup Form</h1>
            </div>
            <div className="group">
              <label for="Name">Name</label>
              <br />
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="group">
              <label for="Email">Email </label> <br />
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
              <br />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="group">
              <label for="roles">roles</label>
              <br />
              <select
                name="roles"
                id="roles"
                value={roles}
                onChange={(e) => setRoles(e.target.value)}
              >
                <option value=""></option>
                <option value="user">user</option>
                <option value="vendor">vendor</option>
              </select>
            </div>

            <div className="group">
              <label for="address">Address</label>
              <br />
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAdress(e.target.value)}
              />
            </div>

            <button type="submit">Singup</button>
            <h4 className="link">
              already have account? <Link to="/">Login now</Link>
            </h4>
            <ToastContainer />
          </form>
        </div>
      </div>
    </>
  );
};

export default Singup;
