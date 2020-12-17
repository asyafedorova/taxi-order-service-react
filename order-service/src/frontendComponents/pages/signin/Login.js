import React from 'react'
import {Component} from 'react'
import styles from './Login.module.css'
import {signIn} from "../../../apiLink/AuthService";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber : {
                value: ''
            },
            password : {
                value: ''
            }
        }
    }

    handlePhoneNumberChange(event){
        this.setState({phoneNumber:event.target.value})
    }
    handlePasswordChange(event){
        this.setState({password:event.target.value})
    }

    async signIn(event) {
        let user = {
            phoneNumber: this.state.phoneNumber,
            password: this.state.password
        }
        let result = await signIn(user);
        console.log(result);
    }

    render() {
        const { phoneNumber, password } = this.state;
        return(
            <div className={styles.Login}>
                <form className="form-signin">
                    <h2 className="form-signin-heading"> Please sign in </h2>
                    <label htmlFor="inputPhoneNumber" className="sr-only"> Phone Number
                    </label>
                    <input type="number" id="inputPhoneNumber" className="form-control" placeholder="Phone number" required
                           autoFocus/>
                    <label htmlFor="inputPassword" className="sr-only"> Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                    <button className="btn btn-lg btn-primary btn-block" type="button" onClick={this.signIn}> Sign in
                    </button>
                </form>
            </div>
        )
    }
}

export default Login