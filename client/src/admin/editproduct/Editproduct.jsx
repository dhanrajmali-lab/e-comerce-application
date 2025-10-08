import React, { useEffect, useState } from 'react'
import '../addproduct/Addproduct.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const Editproduct =()=>{

    const { id } = useParams();
       const[image,setimage]=useState(false);
        const[name,setName]=useState('');
        const[description,setDescription]= useState('');
        const[price,setPrice]= useState('');
        const [stock,setStock]= useState('')
        const [categories,setCategories] = useState('')
            useEffect(()=>{
                axios.get(`http://localhost:5000/product/${id}`)
                .then((res)=>{
                    
                    setName(res.data.data.name)
                    setDescription(res.data.data.description)
                    setPrice(res.data.data.price)
                    setCategories(res.data.data.categories)
                    setStock(res.data.data.stock)
                    setimage(res.data.data.image)
                
                })
            },[id])
        const imageshandler = (e) =>{
            setimage(e.target.files[0])
        }
        const Add_product = async ()=>{
      
        const formData = new FormData();
        formData.append('image', image);
        formData.append('name',name);
        formData.append('description',description);
        formData.append('price',price);
        formData.append('stock',stock);
        formData.append('categories',categories)

        console.log(formData)

             axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
          axios.put(`http://localhost:5000/product/${id}`,formData,
         {
             headers: {
              'Content-Type': 'multipart/form-data',
            },
         }
        ).then((data)=>{
            console.log(data)
           
        });
         
    }
   return (
    <div className='addproduct'>
        <div className="addproduct-itemfield">
            <p>Product Title</p>
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" name='name' placeholder='Type here' />
        </div>
        <div >
            <div className="addproduct-itemfield">
                <p>description</p>
                <input value={description} onChange={(e)=>setDescription(e.target.value)} type="text" name="description" placeholder='Type here'/>
            </div>
            <div className="addproduct-itemfield">
                <p> Price</p>
                <input value={price} onChange={(e)=>setPrice(e.target.value)} type="text" name="price" placeholder='Type here'/>
            </div>
        </div>
        <div className="addproduct-itemfield">
             <p>category</p>
                <input value={categories} onChange={(e)=>setCategories(e.target.value)} type="text" name="categories" placeholder='Type here'/>
        </div>
        <div className="addproduct-itemfield">
             <p>stock</p>
                <input value={stock} onChange={(e)=>setStock(e.target.value)} type="text" name="stock" placeholder='Type here'/>
        </div>
        <div className="addproduct-itemfield">
            <label htmlFor="file-input">
                <img src="" alt=""  className='addproduct-thumnail-img'/>
            </label>
            <input onChange={imageshandler} type="file" name='image' id='file-input' hidden />
        </div>
        <button className='addproduct-btn' onClick={()=>{Add_product()}}>ADD</button>
    </div>
  )
}


export default Editproduct