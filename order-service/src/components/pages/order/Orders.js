import React, {useState} from 'react'
import styles from './Orders.module.css'
import OrderMenu from "./components/OrderMenu";
import Order from "./Order";

export default function Orders() {
    const [orders, setOrders] = useState(
        [{
            id: 1,
            status: 'ACTIVE',
            customer: {
                name: 'Anna',
                phoneNumber: '123456789'
            }
        }, {
            id: 2,
            status: 'ACTIVE',
            customer: {
                name: 'Anna',
                phoneNumber: '123456789'
            }
        }])

    const allOrders = orders.map((order, key) => {
        return (
            <Order key={key}
                   id={order.id}
                   status={order.status}
                   name={order.customer.name}
                   phoneNumber={order.customer.phoneNumber}
                   path={`/orders/${order.id}`}/>
        );
    })
    return(
        <div>
            <div className={styles.Menu}>
                <OrderMenu />
            </div>
            <div className={styles.Orders}>
                <h1>All orders</h1>
                <div>
                    <li>{allOrders}</li>
                </div>
            </div>
        </div>
    );
}