import styles from './CardPage.module.css'
import {useParams} from "react-router-dom";

export default function CardPage() {
    const { id } = useParams()
    return(
        <div className={styles.CardPage}>
            <h1>Card page №{id}</h1>
        </div>
    );
}