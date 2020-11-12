import React, {Component} from 'react'
import NavigationItem from "./NavigationItem/NavigationItem";
import styles from './Navigation.module.css'

class Navigation extends React.Component {

      state = {
            links: [
                {path: '/', name:'Home'},
                {path: '/registration', name:'Registration'},
                {path: '/login', name:'Login'},
            ]
        }

    namesOfLinks = this.state.links.map((link, key) => {
        return (
            <NavigationItem name = {link.name} key = {key} path = {link.path}/>
        );
    })

    render() {
        return (
            <div>
                <ul className={styles.navigation}>
                   <li>{this.namesOfLinks}</li>
                </ul>
            </div>
        );
    }
}

export default Navigation;