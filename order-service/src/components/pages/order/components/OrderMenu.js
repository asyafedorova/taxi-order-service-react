import React, {useState} from 'react'
import styles from "../../../components/navigation/Navigation.module.css";
import NavigationItem from "../../../components/navigation/navigationItem/NavigationItem";

export default function OrderMenu()  {
    const [links, setLinks] = useState([
        {path: '/orders/active', name:'active'},
        {path: '/orders/standby', name:'standby'},
        {path: '/customer/completed', name: 'my completed'},
        {path: '/driver/completed', name: 'completed by me'}
    ])

    const namesOfLinks = links.map((link, key) => {
        return (
            <NavigationItem name = {link.name} key = {key} path = {link.path}/>
        );
    })

    return(
        <div>
            <ul className={styles.navigation}>
                <li>{namesOfLinks}</li>
            </ul>
        </div>
    );

}