import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import styles from "./App.module.css"
import Layout from "./HOC/Layout/Layout";
import Navigation from "./navigation/Navigation";
import RegisterAsCustomer from "./components/Register/RegisterAsCustomer/RegisterAsCustomer";
import RegisterAsDriver from "./components/Register/RegisterAsDriver/RegisterAsDriver";

function App() {
  return (
    <Layout>
        <Navigation />
        <Route path="/" exact component={Home}/>
        <Route path="/registration" exact component={Register}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/registration/driver" exact component={RegisterAsDriver}/>
        <Route path="/registration/customer" exact component={RegisterAsCustomer}/>
        <Redirect to = "/"/>
    </Layout>
  );
}

export default App;
