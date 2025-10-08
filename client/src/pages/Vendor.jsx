import { Link, Outlet } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
const Vendor =()=>{

   const navigate=useNavigate()

   useEffect(()=>{
       const isLoggedIn = localStorage.getItem("token") ;
       if (!isLoggedIn) {

      navigate('/')
      }
   },[])

     const logout=()=>{
   
       localStorage.removeItem('token')
       navigate('/')
     }

    return(
      <>
        <div style={{display:'flex'}}>
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

       < Link to='orderlist' style={{textDecoration:"none"}}>
      <div className="sidebar-item">
        <img src=""  alt=''/>
        <p>Order List</p>
      </div>
      </Link>

      < Link to='ratinglist' style={{textDecoration:"none"}}>
      <div className="sidebar-item">
        <img src=""  alt=''/>
        <p>product rating list</p>
      </div>
      </Link>

       <div className="sidebar-item" onClick={logout}>
        <p>Logout </p>
      </div>


    </div>
      <Outlet/>
        </div>
     
        </>
    )
}


export default Vendor