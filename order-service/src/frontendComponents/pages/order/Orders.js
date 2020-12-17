import React from 'react'
import {Component} from 'react'
import styles from './Orders.module.css'
import Order from "./Order";
import OrderMenu from "./components/OrderMenu";

class Orders extends Component {
    // allOrders = this.state.links.map((link, key) => {
    //
    //     return (
    //         <Order id={order.id}
    //                status={order.status}
    //                name={order.customer.name}
    //                phoneNumber={order.customer.phoneNumber}/>
    //     );
    // })

    render() {
        return(
            <div>
                <div className={styles.Menu}>
                    <OrderMenu />
                </div>
                <div className={styles.Orders}>
                    <h1>All orders</h1>
                    <div>
                        {/*<li>{this.allOrders}</li>*/}
                        <Order id={1} status={'ACTIVE'} name={'Anna'} phoneNumber={'123456789'}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Orders