import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import Home from "./frontendComponents/pages/home/Home";
import Register from "./frontendComponents/pages/signup/Register";
import Login from "./frontendComponents/pages/signin/Login";
import Layout from "./frontendComponents/hoc/layout/Layout";
import Navigation from "./frontendComponents/components/navigation/Navigation";
import Personal from "./frontendComponents/pages/users/personal/Personal";
import Users from "./frontendComponents/pages/users/Users";
import 'bootstrap/dist/css/bootstrap.min.css';
import Orders from "./frontendComponents/pages/order/Orders";

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
