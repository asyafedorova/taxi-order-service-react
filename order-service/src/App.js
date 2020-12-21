import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import Home from "./components/pages/home/Home";
import Register from "./components/pages/signup/Register";
import Login from "./components/pages/signin/Login";
import Layout from "./components/hoc/layout/Layout";
import Navigation from "./components/components/navigation/Navigation";
import Personal from "./components/pages/users/personal/Personal";
import Users from "./components/pages/users/Users";
import 'bootstrap/dist/css/bootstrap.min.css';
import Orders from "./components/pages/order/Orders";
import OrderPage from "./components/pages/order/OrderPage";
import Cards from "./components/pages/users/personal/customer/cards/Cards";
import CardPage from "./components/pages/users/personal/customer/cards/CardPage";
import UserPage from "./components/pages/users/UserPage";
import DriverPage from "./components/pages/users/personal/driver/DriverPage";
import CustomerPage from "./components/pages/users/personal/customer/CustomerPage";

function App() {
  return (
    <Layout>
        <Navigation />
        <Route path="/" exact component={Home}/>
        <Route path="/signup" exact component={Register}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/personal" exact component={Personal}/>
        <Route path="/driver" exact component={DriverPage}/>
        <Route path="/customer" exact component={CustomerPage}/>
        <Route path="/users" exact component={Users}/>
        <Route path="/users/:id" exact component={UserPage}/>
        <Route path="/orders" exact component={Orders}/>
        <Route path="/orders/:id" exact component={OrderPage}/>
        <Route path="/cards" exact component={Cards}/>
        <Route path="/cards/:id" exact component={CardPage}/>
        <Redirect to = "/"/>
    </Layout>
  );
}

export default App;
