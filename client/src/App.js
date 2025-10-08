import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Singup from "./components/Singup";
import Cart from "./components/cart/Cart";
import ForgotPassword from "./components/ForgotPassword";
import AdminDashboard from "./pages/AdminDashboard";
import User from "./pages/User";
import { ToastContainer } from "react-toastify";
import Vendor from "./pages/Vendor";
import Otp from "./components/Otp";
import Listproduct from "./admin/Listproduct/Listproduct";
import Listproducts from "./vendor/Listproduct/Listproduct";
import Addproduct from "./admin/addproduct/Addproduct";
import Userlist from "./admin/userList/Userlist";
import VendorList from "./admin/vendorlist/VendorList";
import OrderList from "./vendor/orderlist/Orderlist";
import EditUser from "./admin/edituser/EditUser";
import Editproduct from "./admin/editproduct/Editproduct";
import Ratin from "./components/rating/Ratin";
import Ratinglist from "./vendor/ratinglist/Ratinglist";
import Ratinglistadmin from "./admin/ratinglist/Ratinglistadmin";
import Buynow from "./components/buynow/Buynow";
import Orderdetail from "./components/orderdetails/Orderdetail";
import Orderlist from "./admin/orderlist/Orderlist";
import Notfound from "./components/Notfound";
import Ordertrack from "./components/Ordertrack";
import Cartitembuy from "./components/cart/Cartitembuy";
import Productinner from "./components/Productinner";

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/singup" element={<Singup />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/forgot" element={<ForgotPassword />}></Route>
        <Route path="/adminDashboard" element={<AdminDashboard />}>
          <Route path="listprodut" element={<Listproduct />}>
            <Route path="editproduct/:id" element={<Editproduct />}></Route>
          </Route>
          <Route path="addproduct" element={<Addproduct />} />
          <Route path="userList" element={<Userlist />}>
            <Route path="edituser/:id" element={<EditUser />} />
          </Route>
          <Route path="vendorList" element={<VendorList />}>
            <Route path="edituser/:id" element={<EditUser />} />
          </Route>
          <Route path="ratinglistadmin" element={<Ratinglistadmin />} />
          <Route path="orderlistadmin" element={<Orderlist />} />
        </Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/vendor" element={<Vendor />}>
          <Route path="listprodut" element={<Listproducts />}>
            <Route path="editproduct/:id" element={<Editproduct />}></Route>
          </Route>
          <Route path="addproduct" element={<Addproduct />} />
          <Route path="ratinglist" element={<Ratinglist />} />
          <Route path="orderlist" element={<OrderList />} />
        </Route>
        <Route path="/otp" element={<Otp />}></Route>
        <Route path="/rating/:id" element={<Ratin />}></Route>
        <Route path="/order/:id" element={<Buynow />}></Route>
        <Route path="/cartorder" element={<Cartitembuy />}></Route>
        <Route path="/orderdetails" element={<Orderdetail />}></Route>
        <Route path="/ordertrack/:id" element={<Ordertrack />}></Route>
        <Route path="/product/:id" element={<Productinner />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;