import React from 'react'
import styles from "./style.module.css";

function Stats1() {
    return (
        <div className={styles.main}>

            <div className={styles.upper}>

                <div className={styles.titlePrice}>

                    <div className={styles.title}>
                    LATEST PRICE
                    </div>
                    
                    <div className={styles.price}>
                    $1.985
                    </div>

                </div>

                <div className={styles.titlePrice}>

                    <div className={styles.title}>
                    TOTAL SUPPLY
                    </div>

                    <div className={styles.price}>
                    5.29B
                    </div>

                </div>

                <div className={styles.titlePrice}>

                    <div className={styles.title}>
                    MARKET CAP
                    </div>

                    <div className={styles.price}>
                    $10.5B
                    </div>

                </div>

            </div>

            <div className={styles.middle}>

                <div className={styles.btn}>
                    <img src={null} alt='img'></img>
                    <div>LIVE CHART</div>
                </div>
                <div className={styles.btn}>
                    <img src={null} alt='img'></img>
                    <div>ETHERSCAN</div>
                </div>

            </div>

            <div className={styles.bottom}>
                A total of tokens have been permanently removed from existence. They no longer exist in any wallet, dead or otherwise.
            </div>

        </div>
    )
}

export default Stats1
