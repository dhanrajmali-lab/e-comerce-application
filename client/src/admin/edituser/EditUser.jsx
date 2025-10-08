
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from 'react-router-dom';

const EditUser =()=>{

     const { id } = useParams();


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roles, setRoles] = useState("");
  const [address, setAdress] = useState("");
  const [status, setStatus] = useState("");


 
      useEffect(()=>{
        axios.get(`http://localhost:5000/user/${id}`)
        .then((res)=>{
            
            setName(res.data.data.name)
            setEmail(res.data.data.email)
            setRoles(res.data.data.roles)
            setStatus(res.data.data.status)
            setAdress(res.data.data.address)
        
        })

  },[id])

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`http://localhost:5000/user/${id}`, {
        name,
        email,
        password,
        roles,
        address,
        status
      });


      if (response.status == 200) {
        toast.success("user is updated");
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
              <h1>Edit from</h1>
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
                <option  value={roles}>{roles}</option>
                <option value="user">user</option>
                <option value="vendor">vendor</option>
              </select>
            </div>


             <div className="group">
              <label for="status">status</label>
              <br />
              <select
                name="status"
                id="status"
              value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value={status}>{status}</option>
                <option value="active">active</option>
                <option value="deactive">deactive</option>
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

            <button type="submit">update</button>
       

          </form>
        </div>
      </div>
    </>
  );
}


export default EditUser