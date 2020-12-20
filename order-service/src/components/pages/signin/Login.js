import React, {useState} from 'react'
import styles from './Login.module.css'
import {signIn, signUpAsCustomer} from "../../../api/AuthService";


export default function Login() {
    const [phoneNumber, setPhoneNumber] = useState({value: ''});
    const [password, setPassword] = useState({value: ''});

    const logIn = async event => {
        let user = {
            phoneNumber: phoneNumber,
            password: password
        }
        let result = logIn(user);
        console.log(result);
    }

    return(
        <div className={styles.Login}>
            <form className="form-signin">
                <h2 className="form-signin-heading"> Please sign in </h2>
                <label htmlFor="inputPhoneNumber" className="sr-only"> Phone Number
                </label>
                <input
                    onChange={event => {setPhoneNumber(event.target.value)}}
                    type="number"
                    id="inputPhoneNumber"
                    className="form-control"
                    placeholder="Phone number"
                    required autoFocus/>
                <label htmlFor="inputPassword" className="sr-only"> Password</label>
                <input
                    onChange={event => {setPassword(event.target.value)}}
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Password"
                    required autoFocus/>
                <button className="btn btn-lg btn-primary btn-block" type="button" onClick={logIn}> Sign in
                </button>
            </form>
        </div>
    )
}