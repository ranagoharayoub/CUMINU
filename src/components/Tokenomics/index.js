import React from 'react'
import styles from './style.module.css'
function Tokenomics() {
    return (
        <div className={styles.main}>

            <div className={styles.designTitle}>

                <div className={styles.design}>
                    <img src={null} alt='circles'></img>
                </div>
                <div className={styles.Title}>
                    Dual-Chain Tokenomics
                </div>
                
            </div>

            <div>
                We have developed a first-of-its-kind cross-chain burn mechanism that utilizes both the Ethereum and Binance blockchains.
            </div>

            <div className={styles.btn}>

                <div className={styles.btn1}>
                    READ MORE
                </div>
                <div className={styles.btn2}>
                    ABOUT TIPINU
                </div>

            </div>
        </div>
    )
}

export default Tokenomics
