import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Productinner.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Productinner = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState([]);

  const fetchInfo = async () => {
    try {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("token")}`;
      const res = await axios.get(`http://localhost:5000/product/${id}`);

      console.log(res.data.data);

      setData(res.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const addToCart = () => {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;
    axios
      .post(`http://localhost:5000/cart/addtocart/${id}`)
      .then((res) => {
        console.log(res);

        toast.success("product is add to cart");
      })
      .catch((er) => {
        console.log(er);
      });
  };

  const addToRating = () => {
    navigate(`/rating/${id}`);
  };
  const buyproduct = (id) => {
    navigate(`/order/${id}`);
  };

  return (
    <>
      <div class="card-wrapper">
        <div class="card">
          <div class="product-imgs">
            <div class="img-display">
              <div class="img-showcase">
                <img
                  src={`http://localhost:5000/uploads/${data.image}`}
                  alt="product image"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
            </div>
          </div>

          <div class="product-content">
            <h2 class="product-title">{data.name}</h2>
            <span
              class="product-link"
              style={{ cursor: "pointer" }}
              onClick={() => addToRating()}
            >
              give rating this product
            </span>

            <div class="product-price">
              <p class="last-price">
                Old Price: <span>${data.price}</span>
              </p>
              <p class="new-price">
                New Price: <span>${data.price}</span>
              </p>
            </div>

            <div class="product-detail">
              <h2>about this item: </h2>
              <p>{data.description}</p>
              <ul>
                {/* <li>Color: <span>Black</span></li> */}
                <li>
                  Available: <span>in stock</span>
                </li>
                <li>
                  Category: <span>{data.categories}</span>
                </li>
                <li>
                  Shipping Area: <span>All over the world</span>
                </li>
                <li>
                  Shipping Fee: <span>Free</span>
                </li>
              </ul>
            </div>

            <div class="purchase-info">
              <input type="number" min="0" value="1" />
              <button type="button" class="btn" onClick={addToCart}>
                Add to Cart <i class="fas fa-shopping-cart"></i>
              </button>
              <button type="button" class="btn" onClick={() => buyproduct()}>
                buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productinner;
