import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

const NavigationItem = props => {
    return(
            <NavLink to={props.path} exact style ={{
                margin: '5px',
                color: 'white',
                'font-weight': 'bold',
                'text-decoration': 'none'
            }} >{props.name}</NavLink>);
}

export default NavigationItem;