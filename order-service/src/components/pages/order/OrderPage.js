import styles from './OrderPage.module.css'
import {useParams} from 'react-router-dom'

export default function OrderPage() {
    const { id } = useParams();
    return(
        <div className={styles.OrderPage}>
            <h1>Page of order №{id}</h1>
        </div>
    );
}