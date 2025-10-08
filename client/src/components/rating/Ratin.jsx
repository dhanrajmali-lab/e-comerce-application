import { useState } from "react";
import "./Rating.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Ratin = () => {
  const {id} = useParams();

  const navigate=useNavigate()

  const [rating, setRating] = useState(0); 
  const [comment, setComment] = useState("");

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
       
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        const response = await axios.post(`http://localhost:5000/rating/add/${id}`, {
       rating: rating,
        comment: comment,
      });
 

      console.log(response)

      setRating(0);
      setComment("");

      toast.success("rating is added !!")

    navigate(-1)

       
     
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>

    <div className="rating-main">
      <div class="wrapper">
        <h3>Rating</h3>
        <form onSubmit={handleSubmit}>
          <div class="rating">
            {[1, 2, 3, 4, 5].map((starValue) => (
        <span
          key={starValue}
          onClick={() => handleRatingChange(starValue)}
          style={{ cursor: 'pointer', color: starValue <= rating ? 'gold' : 'gray' }}
        >
          &#9733; 
        </span>
             ))}
          </div>
          <textarea
            name="opinion"
            cols="30"
            rows="5"
            placeholder="Your opinion..."
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <div class="btn-group">
            <button type="submit" class="btn submit"  >
              Submit
            </button>

          </div>
        </form>

      </div>
    </div>
    
    </>
  );
};

export default Ratin;
