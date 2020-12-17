import React from 'react'
import {Component} from 'react'
import styles from './Order.module.css'

class Orders extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <React.Fragment>
                <div className={styles.Order}>
                    <h1>Order №{this.props.id}</h1>
                    <h2>STATUS: {this.props.status}</h2>
                    <p><strong>Customer:</strong> {this.props.name}</p>
                    <p><strong>Customer phoneNumber:</strong> {this.props.phoneNumber}</p>
                </div>
            </React.Fragment>
        );
    }
}

export default Orders