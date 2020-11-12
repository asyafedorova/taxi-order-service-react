import React, {Component} from 'react'
import styles from './InputItem.module.css'

const InputItem = props => {
    const type = props.type;
    const htmlFor = `&{type} - &{Math.random()}`

    return(
        <div className={styles.InputItem}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input
                type={type}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
            />
        </div>);
}

export default InputItem;