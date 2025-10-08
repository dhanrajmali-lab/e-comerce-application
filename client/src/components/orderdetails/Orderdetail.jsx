import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Orderdetail=()=>{

  const navigate =useNavigate()
        const[data,setData]= useState([])


  const fetchInfo= async ()=>{
   axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        axios.get('http://localhost:5000/order/getorderbyuser')
        .then((data)=>{
                console.log(data.data)
                setData(data.data)
              })
              .catch((er)=>{
                console.log("error",er)
              })
  }
  useEffect(()=>{
    fetchInfo();
  },[])

  const cancelOrder= async (id)=>{
    console.log("hello",id)
   await axios.delete(`http://localhost:5000/order/cancel/${id}`)

        await fetchInfo();
       }


  const trackorder = (id) =>
  {
  navigate(`/ordertrack/${id}`)
  }     

    return(

         <>
      <div class="container">

        <center><h1>Order details</h1></center> <br />
    <div class="divTable div-hover">
            <div class="rowTable bg-primary text-white pb-2">
                <div class="divTableCol">Product image</div>
                <div class="divTableCol">product name</div>
                <div class="divTableCol">Quantity</div>
                <div class="divTableCol">Payment Type</div>
                <div class="divTableCol">address</div>
                <div class="divTableCol">status</div>
                <div class="divTableCol">Actions</div>
            </div>
         {data.map((item)=>{
          return <>     
           <div class="rowTable">
                <div class="divTableCol">
                    <div class="media">
                        <a class="thumbnail pull-left mr-2" href="#">
                            <img class="media-object" src={`http://localhost:5000/uploads/${item.product.image}`} style={{width:"72px",height:"72px"}} />
                        </a>
                    </div>
                </div>
                <div class="divTableCol"><strong class="label label-success">{item.product.name}</strong></div>
                <div class="divTableCol">
                    <input type="email" class="form-control" id="exampleInputEmail1" value={item.quentity} />
                </div>
                <div class="divTableCol" ><strong>{item.paymentType} </strong></div>

                <div class="divTableCol" ><strong>{item.shipingAddress} </strong></div>

                <div class="divTableCol" ><strong>{item.orderstatus} </strong></div>

            
                <div class="divTableCol">
                    <button style={{backgroundColor:"red", padding:"5px", borderRadius:"5px", color:"white"}} type="button" class="btn btn-danger" onClick={()=>cancelOrder(item.id)}><span class="fa fa-remove"></span> Cancel Order</button>
                    <button style={{backgroundColor:"blue", padding:"5px", borderRadius:"5px", color:"white"}} type="button" class="btn btn-danger" onClick={()=>trackorder(item.id)}><span class="fa fa-remove"></span> Track your Order</button>

                </div>
            </div>
          </>
        })}

           
    </div>
</div>
           
        </>
    )
}



export default Orderdetail;