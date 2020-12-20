import React, {useState} from 'react'
import styles from './Register.module.css'
import {signUpAsCustomer, signUpAsDriver} from "../../../api/AuthService";

export default function Register() {
    let [phoneNumber, setPhoneNumber] = useState({value:''})
    let [password, setPassword] = useState({value:''})
    let [email, setEmail] = useState({value:''})
    let [name, setName] = useState({value:''})

    const driverSignUp = async event => {
        let user = {
            phoneNumber: phoneNumber,
            password: password,
            email: email,
            name: name
        }
        console.log(user)
        let result = signUpAsDriver(user);
        console.log(result);
    }

    const customerSignUp = async event => {
        let user = {
            phoneNumber: phoneNumber,
            password: password,
            email: email,
            name: name
        }
        console.log(user)
        let result = signUpAsCustomer(user);
        console.log(result);
    }

    return (
        <div className={styles.Register}>
            <form className="form-signin">
                <h2 className="form-signin-heading">Please sign up</h2>
                <label htmlFor="inputName" className="sr-only">Name</label>
                <input type="name" onChange={event => {setName(event.target.value)}} id="inputName" className="form-control"
                       placeholder="Name" required autoFocus/>
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input type="email" onChange={event => {setEmail(event.target.value)}} id="inputEmail" className="form-control"
                       placeholder="Email address" required autoFocus/>
                <label htmlFor="inputPhoneNumber" className="sr-only">Phone Number</label>
                <input type="number" onChange={event => {setPhoneNumber(event.target.value)}} id="inputPhoneNumber" className="form-control"
                       placeholder="Phone number" required autoFocus/>
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" onChange={event => {setPassword(event.target.value)}} id="inputPassword"
                       className="form-control" placeholder="Password" required/>

                <button className="btn btn-lg btn-primary btn-block" onClick={driverSignUp} type="button">Sign up as driver
                </button><button className="btn btn-lg btn-primary btn-block" onClick={customerSignUp} type="button">Sign up as customer
            </button>
            </form>
        </div>
    );
}