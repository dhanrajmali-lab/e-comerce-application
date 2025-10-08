import React, { useEffect, useState } from 'react'
// import './Ratinglistadmin.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Orderlist =()=>{

  const [allproducts,setAllproducts]=useState([]);

  const fetchInfo= async ()=>{
     axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
      await axios.get('http://localhost:5000/order/getorderdetail')
      .then((data)=>{
        console.log(data.data)

        setAllproducts(data.data)
      })
  }

  useEffect(()=>{
    fetchInfo();
  },[])

  const remove_product= async (id)=>{
    await axios.delete(`http://localhost:5000/order/cancel/${id}`,{
    
    })
    await fetchInfo();
  }
  const updatestatus= async(id,status)=>{

      console.log(id)
      console.log(status)
     await axios.patch(`http://localhost:5000/order/${id}`,{status})
     .then((res)=>{
      console.log(res)
     })
     .catch((err)=>{
      console.log(err)
     })

         await fetchInfo();
      
  }
    return(
        <>
        <div className='listproduct'>
      <h1> Order List</h1>
      <div className="listproduct-format-main">
        <p>customer name</p>
        <p>paymentType</p>
        <p>amount</p>
        <p>Date</p>
        <p>Quantity</p>
        <p>status</p>
        <p>action</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
      {allproducts.map((product,index)=>{
        return <><div key={index} className="listproduct-format-main listproduct-format">
          <p>{product.user.name}</p>
          <p>{product.paymentType}</p>
          <p>{product.product.price}</p>
          <p>{product.createdAt.toString().split("",10)}</p>
          <p>{product.quentity}</p>
          <p><select name="" id="" onChange={(e)=>updatestatus(product.id,e.target.value)} value={product.orderstatus}>
              <option value={product.orderstatus}>{product.orderstatus}</option>
              <option value="Order Placed" onClick={(e)=>updatestatus(product.id,e.target.value)}>Order Placed</option>
              <option value="Processing" onClick={(e)=>updatestatus(product.id,e.target.value)}>Processing</option>
              <option value="delivered" onClick={(e)=>updatestatus(product.id,e.target.value)}>Delivered</option>
            </select></p>

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



export default Orderlist