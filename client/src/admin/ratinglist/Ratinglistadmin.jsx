import React, { useEffect, useState } from 'react'
import './Ratinglistadmin.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Ratinglistadmin =()=>{

 const navigate = useNavigate();

  const [allproducts,setAllproducts]=useState([]);

  const fetchInfo= async ()=>{
     axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
      await axios.get('http://localhost:5000/rating/getbyadmin')
      .then((data)=>{
        console.log(data.data.data)

        setAllproducts(data.data.data)
      })
  }

  useEffect(()=>{
    fetchInfo();
  },[])

  const remove_product= async (id)=>{
    await axios.delete(`http://localhost:5000/rating/${id}`,{
    
    })
    await fetchInfo();
  }

    return(
        <>
        <div className='listproduct'>
      <h1> Products Rating List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>name</p>
        <p>star</p>
        <p>comment</p>
        <p>given by</p>
        <p>vendor name</p>
        <p>action</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
      {allproducts.map((product,index)=>{
        return <><div key={index} className="listproduct-format-main listproduct-format">
          <img src={`http://localhost:5000/uploads/${product.product.image}`} alt="" className="listproduct-product-icon" />
          <p>{product.product.name}</p>
          <p>{product.star}</p>
          <p>{product.text}</p>
          <p>{product.user.name}</p>
          <p>{product.product.user.name}</p>

             <div>
             <i onClick={()=>{remove_product(product.id)}} style={{cursor:'pointer'}} class="ri-close-large-line"></i>
            </div>

           </div>
        <hr />
        </>
      })}
      </div>
    </div>
        </>
    )
}



export default Ratinglistadmin