
import { useEffect, useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import axios from "axios";
import Product from "../components/product/Product";

const User =()=>{
    const navigate=useNavigate()

    const [data,setData] = useState([])

    useEffect(()=>{

        const isLoggedIn = localStorage.getItem("token") ;
        if (!isLoggedIn) {

            navigate('/')        
        }
        else
        {
            axios.get('http://localhost:5000/product/get')
        .then((res)=>{

            console.log(res.data.data)
            setData(res.data.data)
        })
        .catch((error)=>{
            console.log("er",error)
        })
        }
         
    },[])

    return(
        <>
         <div className="h-list">

          <li><Link to="/"> <i class="ri-user-line"></i></Link></li>
          <li><Link to="/cart"> <i class="ri-shopping-cart-line"></i></Link></li>
          <li><Link to="/orderdetails"> Your Order</Link></li>
          
        </div>
        
        <>
        <center>
        <h1>Product List</h1>
        </center>
         <div style={{display:'flex', flexWrap:'wrap', gap:'10px'}}>
              {data.map((ele)=>{
               return <Product data={ele}/>
         })}
         </div>
       
         
            </>
        </>
    )
}


export default User;