import "./Admin.css";
import { Outlet, Route, Routes } from "react-router-dom";
import Sidebar from "../admin/Sidebar/Sidebar";
import Addproduct from "../admin/addproduct/Addproduct";
import Listproduct from "../admin/Listproduct/Listproduct";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const AdminDashboard = () => {
   const navigate=useNavigate()

   useEffect(()=>{
       const isLoggedIn = localStorage.getItem("token") ;
       if (!isLoggedIn) {

      navigate('/')
      }
   },[])
 
  return (
    <div className="admin" style={{ display: "flex" }}>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default AdminDashboard;
