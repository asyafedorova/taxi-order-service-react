import React from 'react'
import styles from './Personal.module.css';
import {useState} from "react/cjs/react.production.min";
import {useHistory} from 'react-router-dom';


export default function Personal() {
    const history = useHistory();

    return (
        <div className={styles.Personal}>
            <button className="btn btn-lg btn-primary" onClick={() => history.push('/driver')}>Driver details</button>
            <button className="btn btn-lg btn-primary" onClick={() => history.push('/customer')}>Customer details</button>
        </div>);
}