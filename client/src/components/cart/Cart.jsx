import axios from "axios";
import { useEffect, useState } from "react";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  const fetchInfo = async () => {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;
    axios
      .get("http://localhost:5000/cart/cartitem")
      .then((data) => {
        console.log(data.data.data);
        setData(data.data.data);
      })
      .catch((er) => {
        console.log("error", er);
      });
  };
  useEffect(() => {
    fetchInfo();
  }, []);

  const removeToCart = async (id) => {
    await axios.delete(`http://localhost:5000/cart/remotocart/${id}`);

    await fetchInfo();
  };

  const totalPrice = () => {
    const t = data.reduce((total, item) => {
      return (total += parseInt(item.product.price) * item.Quantity);
    }, 0);

    return t;
  };

  const orderItem = (data) => {
    navigate("/cartorder", { state: data });
  };

  return (
    <>
      <div class="container">
        <div class="divTable div-hover">
          <div class="rowTable bg-primary text-white pb-2">
            <div class="divTableCol">Product image</div>
            <div class="divTableCol">product name</div>
            <div class="divTableCol">Quantity</div>
            <div class="divTableCol">Price</div>
            <div class="divTableCol">Actions</div>
          </div>
          {data.map((item) => {
            return (
              <>
                <div class="rowTable">
                  <div class="divTableCol">
                    <div class="media">
                      <a class="thumbnail pull-left mr-2" href="#">
                        <img 
                          class="media-object"
                          src={`http://localhost:5000/uploads/${item.product.image}`}
                          style={{ width: "72px", height: "72px" }}
                        />
                      </a>
                    </div>
                  </div>
                  <div class="divTableCol">
                    <strong class="label label-success">
                      {item.product.name}
                    </strong>
                  </div>
                  <div class="divTableCol">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      value={item.Quantity}
                    />
                  </div>
                  <div class="divTableCol">
                    <strong>{item.product.price} </strong>
                  </div>

                  <div class="divTableCol">
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={() => removeToCart(item.id)}
                    >
                      <span class="fa fa-remove"></span> Remove
                    </button>
                  </div>
                </div>
              </>
            );
          })}

          <br />
          <div style={{ display: "flex", gap: "10px" }}>
            <h3>Total :</h3>
            <span>{totalPrice()}</span>
            <button onClick={() => orderItem(data)}>order now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
