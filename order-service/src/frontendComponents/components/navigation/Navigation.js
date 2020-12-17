import React, {Component} from 'react'
import NavigationItem from "./navigationItem/NavigationItem";
import styles from './Navigation.module.css'

class Navigation extends Component {

      state = {
            links: [
                {path: '/', name:'Home'},
                {path: '/signup', name:'Registration'},
                {path: '/login', name:'Login'},
                {path: '/users', name:'Users'},
                {path: '/personal', name:'Personal'},
                {path: '/orders', name:'Orders'}
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