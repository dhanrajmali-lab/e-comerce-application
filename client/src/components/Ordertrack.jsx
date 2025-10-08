import { useParams } from "react-router-dom";
import "./Order.css";
import { useEffect, useState } from "react";
import axios from "axios";
const Ordertrack = () => {
  const [pending, Setpending] = useState("");
  const [Processing, SetProcessing] = useState("");
  const [delivered, setDeliverd] = useState("");
  const [orderplaced,setorderplaced]=useState("")
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/order/${id}`)
      .then((res) => {
        console.log(res.data.orderstatus);
		const status =res.data.orderstatus;
        if (status === "pending") {
          Setpending("yes");
        }
		else if(status === "Order Placed")
		{
          Setpending("yes");
		  setorderplaced('yes')

		}
		else if (status === "Processing") {
          Setpending("yes");
		  setorderplaced('yes')
          SetProcessing("yes");
        } else if (status === "delivered") {
          Setpending("yes");
		  setorderplaced('yes')
          SetProcessing("yes");
          setDeliverd("yes");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(pending);

  return (
    <>
      <ol class="progtrckr" data-progtrckr-steps="4">
        <li class={pending === "yes" ? "progtrckr-done" : "progtrckr-todo"}>
          pending
        </li>
		 <li class={orderplaced === "yes" ? "progtrckr-done" : "progtrckr-todo"}>
         Order Placed
        </li>
        <li class={Processing === "yes" ? "progtrckr-done" : "progtrckr-todo"}>
          Order Processing
        </li>
        <li class={delivered === "yes" ? "progtrckr-done" : "progtrckr-todo"}>
          Delivered
        </li>
      </ol>
    </>
  );
};

export default Ordertrack;
