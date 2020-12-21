import React, {useState} from 'react'
import NavigationItem from "./navigationItem/NavigationItem";
import styles from './Navigation.module.css'

export default function Navigation() {
    const [links, setLinks] = useState([
        {path: '/', name:'Home'},
        {path: '/signup', name:'Registration'},
        {path: '/login', name:'Login'},
        {path: '/users', name:'Users'},
        {path: '/personal', name:'Personal'},
        {path: '/orders', name:'Orders'},
        {path: '/cards', name: 'Cards'}
    ]);

    const namesOfLinks = links.map((link, key) => {
        return (
            <NavigationItem name = {link.name} key = {key} path = {link.path}/>
        );
    })

    return (
        <div>
            <ul className={styles.navigation}>
                <li>{namesOfLinks}</li>
            </ul>
        </div>
    );

}