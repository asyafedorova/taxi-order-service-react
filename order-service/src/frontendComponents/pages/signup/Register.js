import React from 'react'
import styles from './Register.module.css'
import {signUpAsCustomer, signUpAsDriver} from "../../../apiLink/AuthService";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber : {
                value: ''
            },
            password : {
                value: ''
            },
            email : {
                value: ''
            },
            name : {
                value: ''
            }
        }
    }

    handleEmailChange(event){
        this.setState({phoneNumber:event.target.value})
    }
    handlePasswordChange(event){
        this.setState({password:event.target.value})
    }
    handlePhoneNumberChange(event){
        this.setState({phoneNumber:event.target.value})
    }
    handleNameChange(event){
        this.setState({password:event.target.value})
    }

    async signUpAsDriver(event) {
        let user = {
            phoneNumber: this.state.phoneNumber,
            password: this.state.password,
            email: this.state.email,
            name: this.state.name
        }
        let result = await signUpAsDriver(user);
        console.log(result);
    }

    async signUpAsCustomer(event) {
        let user = {
            phoneNumber: this.state.phoneNumber,
            password: this.state.password,
            email: this.state.email,
            name: this.state.name
        }
        let result = await signUpAsCustomer(user);
        console.log(result);
    }

    render() {
        return (
            <div className={styles.Register}>
                <form className="form-signin">
                    <h2 className="form-signin-heading">Please sign up</h2>
                    <label htmlFor="inputName" className="sr-only">Name</label>
                    <input type="name" onChange={this.handleNameChange} id="inputName" className="form-control"
                           placeholder="Name" required autoFocus/>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control"
                           placeholder="Email address" required autoFocus/>
                    <label htmlFor="inputPhoneNumber" className="sr-only">Phone Number</label>
                    <input type="number" onChange={this.handlePhoneNumberChange} id="inputPhoneNumber" className="form-control"
                           placeholder="Email address" required autoFocus/>
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" onChange={this.handlePasswordChange} id="inputPassword"
                           className="form-control" placeholder="Password" required/>

                    <button className="btn btn-lg btn-primary btn-block" onClick={this.signUpAsDriver} type="button">Sign up as driver
                    </button><button className="btn btn-lg btn-primary btn-block" onClick={this.signUpAsCustomer} type="button">Sign up as driver
                    </button>
                </form>
            </div>
        );
    }
}

export default Register