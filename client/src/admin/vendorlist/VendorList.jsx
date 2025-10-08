import React, { useEffect, useState } from 'react'
import '../Listproduct//Listproduct.css'
import axios from 'axios'
import { useNavigate ,Outlet} from 'react-router-dom'
const VendorList =()=>{

   const navigate = useNavigate();
     const [allproducts,setAllproducts]=useState([]);

  const fetchInfo= async ()=>{
      await axios.get('http://localhost:5000/user/vendorList')
      .then((data)=>{
        console.log(data)
        setAllproducts(data.data.data)
      })
  }

  useEffect(()=>{
    fetchInfo();
  },[])

  const remove_product= async (id)=>{
    await axios.delete(`http://localhost:5000/user/${id}`,{
    
    })
    await fetchInfo();
  }

  const edit_user =async (id) => {
  
    navigate(`edituser/${id}`)

  }

      return (

        <>
        <div className='listproduct'>
      <h1>All vendor List</h1>
      <div className="listproduct-format-main">
        <p>Name</p>
        <p>email</p>
        <p>roles</p>
        <p>Address</p>
        <p>Status</p>
        <p>action</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
      {allproducts.map((product,index)=>{
        return <><div key={index} className="listproduct-format-main listproduct-format">
          <p>{product.name}</p>
          <p>{product.email}</p>
          <p>{product.roles}</p>
          <p>{product.address}</p>
          <p>{product.status}</p>

             <div>
             <i onClick={()=>{remove_product(product.id)}} class="ri-close-large-line"></i>
            <i style={{marginLeft:'15px'}} onClick={()=>{edit_user(product.id)}} class="ri-edit-line"></i></div>
            

           </div>
        <hr />
        </>
      })}
      </div>
      
    </div>
        
         <Outlet/>
        </>
    
  )

}


export default VendorList;