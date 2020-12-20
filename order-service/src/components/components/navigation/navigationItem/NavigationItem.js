import React from 'react'
import {NavLink} from 'react-router-dom'

export default function NavigationItem (props) {
    return(
            <NavLink to={props.path} exact style ={{
                margin: '5px',
                color: 'white',
                'font-weight': 'bold',
                'text-decoration': 'none'
            }} >{props.name}</NavLink>);
}