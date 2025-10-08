import { Link } from "react-router-dom"
import axios from "axios";
import "./Product.css";
import {toast}  from 'react-toastify'
import { useNavigate } from "react-router-dom";
const Product =(props)=>{

	const navigate=useNavigate()

    const addToCart=(id)=>{

        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

            axios.post(`http://localhost:5000/cart/addtocart/${id}`)
            .then((res)=>{
                console.log(res)

				toast.success("product is add to cart");
            })
            .catch((er)=>{
                console.log(er)
            })
    }

	const addToRating =(id)=>{
			navigate(`/rating/${id}`)
	}
	const buyproduct=(id)=>{

			navigate(`/order/${id}`)
		
	}
	
    return(
		
        <div className="product-card" onClick={()=>navigate(`/product/${props.data.id}`)} style={{cursor:'pointer'}}>
		<div className="product-tumb">
			<img src={`http://localhost:5000/uploads/`+props.data.image} alt="" />
		</div>
		<div className="product-details">
			<span className="product-catagory">{props.data.category}</span>
			<h4>{props.data.name}</h4>
			<p>{props.data.description}</p>
			<div className="product-bottom-details">
				<div className="product-price"><small>{props.data.price}</small>{props.data.price}</div>
				<div className="product-links">

					<i class="ri-edit-box-line" onClick={()=> addToRating(props.data.id)} style={{cursor:'pointer'}}></i>

					<i className="ri-shopping-cart-line" onClick={()=>addToCart(props.data.id)} style={{cursor:'pointer'}}></i>

					<button onClick={()=>buyproduct(props.data.id)}>buy now</button>
			
				</div>
			</div>
		</div>
	</div>
    )
}
export default Product