import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Buynow=()=>{
      const [payment, setPayemnt] = useState(0); // Initial rating
      const [address, setAddress] = useState("");
      const {id} = useParams();

      const navigate= useNavigate()
      const handleSubmit = async (event) => {
                event.preventDefault();

                console.log(id)
                try {

                    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
                    const response = await axios.post(`http://localhost:5000/order/add/${id}`,{
                        payment,address

                    })

                    if(response.status == 200)
                    {
                      toast.success("item is order now")

                      navigate(-1)
                      
                    }
                    
                } catch (error) {
                    console.log("error",error)
                }
        }
    return(<>
        <div className="rating-main">
      <div class="wrapper">
        <h3>order details</h3>
        <form onSubmit={handleSubmit}>
        
             <select
                name="payment"
                id="paymentMethod"
                 value={payment}
                onChange={(e) => setPayemnt(e.target.value)}
              >
                <option value="pending">payment Type</option>
                <option value="card">card</option>
                <option value="upi">upi</option>
                <option value="cash">cash</option>
              </select>
          
          <textarea
            name="opinion"
            cols="30"
            rows="5"
            placeholder="Enter shiping address"
            id="comment"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
          <div class="btn-group">
            <button type="submit" class="btn submit"  >
              ordernow
            </button>

          </div>
        </form>

      </div>
    </div>
    </>)
}

export default Buynow