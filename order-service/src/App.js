import React, {useState} from 'react'
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

function App() {
  return (
    <Layout>
        <Navigation />
        <Route path="/" exact component={Home}/>
        <Route path="/signup" exact component={Register}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/personal" exact component={Personal}/>
        <Route path="/users" exact component={Users}/>
        <Route path="/orders" exact component={Orders}/>
        <Redirect to = "/"/>
    </Layout>
  );
}

export default App;
