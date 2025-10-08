import React from 'react'
import './Sidebar.css'
import { Link,useNavigate } from 'react-router-dom';

const Sidebar = () => {

 const navigate = useNavigate()
  const logout=()=>{

    localStorage.removeItem('token')
    navigate('/')
  }
  return (
    <div className='sidebar'>
      < Link to={'addproduct'} style={{textDecoration:"none"}}>
      <div className="sidebar-item">
        <img src=""  alt=''/>
        <p>Add Product</p>
      </div>
      </Link>

      < Link to='listprodut' style={{textDecoration:"none"}}>
      <div className="sidebar-item">
        <img src=""  alt=''/>
        <p>Product List</p>
      </div>
      </Link>


      
      < Link to={'userList'} style={{textDecoration:"none"}}>
      <div className="sidebar-item">
        <img src=""  alt=''/>
        <p>user List</p>
      </div>
      </Link>


      
      < Link to={'vendorList'} style={{textDecoration:"none"}}>
      <div className="sidebar-item">
        <img src=""  alt=''/>
        <p>vendor List</p>
      </div>
      </Link>


       < Link to={'ratinglistadmin'} style={{textDecoration:"none"}}>
      <div className="sidebar-item">
        <img src=""  alt=''/>
        <p>Rating List </p>
      </div>
      </Link>

      < Link to={'orderlistadmin'} style={{textDecoration:"none"}}>
      <div className="sidebar-item">
        <img src=""  alt=''/>
        <p>Order List </p>
      </div>
      </Link>


      <div className="sidebar-item" onClick={logout}>
        <p>Logout </p>
      </div>

    </div>
  )
}

export default Sidebar