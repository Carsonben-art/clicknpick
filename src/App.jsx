import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/success";

import { useSelector } from "react-redux";

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

const App = () => {
  const user = useSelector((state) => state.user.currentUser)
  return(
    <Router>
    <Switch>
      <Route exact path="/" component={Home} />

      <Route exact path="/login">
        {user ? <Redirect to="/"/> : <Login />}
      </Route>
      <Route exact path="/register">
        {user ? <Redirect to="/"/> : <Register />}
      </Route>
      <Route exact path="/success">
          <Success />
        </Route>
      
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/products/:category" component={ProductList} />
      <Route exact path="/product/:id" component={Product} />
    </Switch>
  </Router>
  )
};

export default App;