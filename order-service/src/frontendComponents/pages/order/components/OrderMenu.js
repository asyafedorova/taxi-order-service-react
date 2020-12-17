import React, {Component} from 'react'
import styles from "../../../components/navigation/Navigation.module.css";
import NavigationItem from "../../../components/navigation/navigationItem/NavigationItem";

class OrderMenu extends Component {
    state = {
        links: [
            {path: '/orders/active', name:'active'},
            {path: '/orders/standby', name:'standby'},
            {path: '/customer/completed', name: 'my completed'},
            {path: '/driver/completed', name: 'completed by me'}
        ]
    }

    namesOfLinks = this.state.links.map((link, key) => {
        return (
            <NavigationItem name = {link.name} key = {key} path = {link.path}/>
        );
    })

    render() {
        return(
            <div>
                <ul className={styles.navigation}>
                    <li>{this.namesOfLinks}</li>
                </ul>
            </div>
        );
    }

}

export default OrderMenu;