import React, { useEffect, useState } from 'react'
import './Listproduct.css'
import axios from 'axios'
import { Outlet, useNavigate } from 'react-router-dom'

const Listproduct = () => {

    const navigate = useNavigate();

  const [allproducts,setAllproducts]=useState([]);

  const fetchInfo= async ()=>{
     axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
      await axios.get('http://localhost:5000/product/getProductUser')
      .then((data)=>{
        console.log("hello")
        setAllproducts(data.data.data)
      })
  }

  useEffect(()=>{
    fetchInfo();
  },[])

  const remove_product= async (id)=>{
    await axios.delete(`http://localhost:5000/product/${id}`,{
    
    })
    await fetchInfo();
  }
   const edit_user =async (id) => {
  
    navigate(`editproduct/${id}`)

  }
  return (
   <div style={{display:'flex'}}>
     <div className='listproduct'>
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Titel</p>
        <p>description</p>
        <p>New Price</p>
        <p>Category</p>
        <p>action</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
      {allproducts.map((product,index)=>{
        return <><div key={index} className="listproduct-format-main listproduct-format">
          <img src={`http://localhost:5000/uploads/${product.image}`} alt="" className="listproduct-product-icon" />
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>RS:{product.price}</p>
          <p>{product.categories}</p>
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
   </div>
  )
}

export default Listproduct