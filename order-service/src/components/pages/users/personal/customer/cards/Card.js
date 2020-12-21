import React from 'react'
import {useHistory} from "react-router-dom";
import styles from "./Card.module.css";

export default function Card(props){
    const history = useHistory();
    return(
        <div className={styles.Card} onClick={() => history.push(props.path)}>
            <h1>Card №{props.id}</h1>
        </div>
    );
}
