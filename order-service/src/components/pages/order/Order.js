import React from 'react'
import styles from './Order.module.css'
import {useHistory} from "react-router-dom";

export default function Order(props) {
    const history = useHistory();
    return(
        <div className={styles.Order} onClick={() => history.push(props.path)}>
            <h1>Order №{props.id}</h1>
            <h2>STATUS: {props.status}</h2>
            <p><strong>Customer:</strong> {props.name}</p>
            <p><strong>Customer phoneNumber:</strong> {props.phoneNumber}</p>
        </div>
    );
}