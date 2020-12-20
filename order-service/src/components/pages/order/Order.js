import React from 'react'
import styles from './Order.module.css'

export default function Orders(props) {
    return(
        <React.Fragment>
            <div className={styles.Order}>
                <h1>Order №{props.id}</h1>
                <h2>STATUS: {props.status}</h2>
                <p><strong>Customer:</strong> {props.name}</p>
                <p><strong>Customer phoneNumber:</strong> {props.phoneNumber}</p>
            </div>
        </React.Fragment>
    );
}