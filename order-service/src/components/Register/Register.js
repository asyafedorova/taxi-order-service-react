import React from 'react'
import styles from './Register.module.css'
import InputItem from "../InputItem/InputItem";

class Register extends React.Component {
    state = {
        links: [
            {path: '/registration/driver'},
            {path: '/registration/customer'},
        ]
    }

    ClickHandlerDriver = () => {
        this.props.history.push(this.state.links[0].path)
    }

    ClickHandlerCustomer = () => {
        this.props.history.push(this.state.links[1].path)
    }

    render() {
        return(
            <div className={styles.Register}>
                <div>
                    <h1>Don't have an account?</h1>
                    <h3>Sign up now!</h3>
                    <div className={styles.Buttons}>
                        <form onSubmit={this.SubmitHandler}>
                            <div className={styles.inputTable}>
                                <table cellSpacing="20" cellPadding="0" id="maket">
                                    <tr>
                                        <td id="leftcol"><InputItem label="Name"/>
                                            <InputItem label="Phone Number"/></td>
                                        <td><InputItem label="Email"/>
                                            <InputItem label="Password"/></td>
                                    </tr>
                                    <tr>
                                        <td id="leftcol"><button onClick={this.ClickHandlerDriver}>as driver</button></td>
                                        <td><button onClick={this.ClickHandlerCustomer}>as customer</button></td>
                                    </tr>
                                </table>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register