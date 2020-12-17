import React from 'react'
import {Component} from 'react'
import styles from './Personal.module.css';

class Personal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className={styles.Personal}>
            <h1>Personal page</h1>
        </div>);
    }
}

export default Personal