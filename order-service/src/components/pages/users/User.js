import React from 'react'
import styles from './User.module.css'
import {useHistory} from "react-router-dom";

export default function User(props) {
    const history = useHistory();
    return(
        <React.Fragment>
            <div className={styles.User} onClick={() => history.push(props.path)}>
                <li>
                    <h1>User №{props.id}</h1>
                    <h2>NAME: {props.name}</h2>
                    <p><strong>User email:</strong> {props.email}</p>
                    <p><strong>User phoneNumber:</strong> {props.phoneNumber}</p>
                </li>
            </div>
        </React.Fragment>
    );
}