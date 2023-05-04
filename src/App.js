import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import AddProduct from "./pages/newProduct/addProduct";
import Login from "./pages/login/login";
import UserList from "./pages/userList/UserList";

import { ChakraProvider } from "@chakra-ui/react";


function App() {
  const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user
  ).currentUser.isAdmin;

  return (
   <ChakraProvider>

    <Router>
      
        <Switch>
        <Route path="/login">
           <Login />
          </Route>


     { admin  && (
       
       <>
        <Topbar />
        <div className="container">
          <Sidebar />
            <Route exact path="/">
              <Home />
            </Route>
            
            <Route path="/products">
              <ProductList />
            </Route>
            <Route path="/users">
              <UserList />
            </Route>
            <Route path="/product/:productId">
              <Product />
            </Route>
            <Route path="/newproduct">
            <AddProduct />
            </Route>
          
        </div>
      
      </>
       
       )
      }     
      </Switch>
      </Router>
      
      </ChakraProvider>
      );
}

export default App;
