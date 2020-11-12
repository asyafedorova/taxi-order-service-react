import React from 'react'
import styles from './Home.module.css'

class Home extends React.Component {
    render() {
        return(
            <div className={styles.Home}>
            <h1>Home page</h1>
            </div>
        );
    }
}

export default Home