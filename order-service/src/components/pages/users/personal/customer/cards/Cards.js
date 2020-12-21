import styles from './Cards.module.css'
import React, {useState} from "react";
import Card from "./Card";


export default function Cards() {
    const [cards, setCards] = useState(
        [{
            id: 1
        }, {
            id: 2
        }])

    const allCards = cards.map((card, key) => {
        return (
            <Card key={key}
                   id={card.id}
                   path={`/cards/${card.id}`}/>
        );
    })

    return(
        <div>
            <div className={styles.Cards}>
                <h1>All cards</h1>
                <div>
                    <li>{allCards}</li>
                </div>
            </div>
        </div>
    );
}
