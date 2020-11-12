import React from 'react'
import styles from './Login.module.css'
import InputItem from "../InputItem/InputItem";

class Login extends React.Component {
    LoginHandler = () => {

    }

    RegisterHandler = () => {
        this.props.history.push('/registration')
    }

    SubmitHandler = event => {
        event.preventDefault();
    }

    render() {
        return(
            <div className={styles.Login}>
                <div>
                    <h1>Login</h1>
                    <form onSubmit={this.SubmitHandler}>
                        <InputItem label="Email"/>
                        <InputItem label="Password" type="Password"/>

                        <button onClick={this.LoginHandler}>Login</button>
                        <button onClick={this.RegisterHandler}>Registration</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login