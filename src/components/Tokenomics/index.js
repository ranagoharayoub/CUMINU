import React from 'react'
import styles from './style.module.css'
import doubleCircle from '../../assets/images/Group_70.png'
import TypeWritter from "typewriter-effect";

function Tokenomics() {
    return (
        <div className={styles.main}>
            <div className='py-10 px-8 w-full bg-gray-900 md:px-24 text-left xxl:px-4 xxl:max-w-9xl xxl:mx-auto'>
                <div className={styles.designTitle}>

                    <div className={styles.design}>
                        <img src={doubleCircle} alt='circles'></img>
                    </div>
                    <div className={styles.Title}>
                        Dual-Chain<br></br> Tokenomics
                    </div>
                    
                </div>

                <div className={styles.text}>
                    We have developed a first-of-its-kind
                    
                    <span
                    className="block text-pink-800"
                    style={{
                        fontFamily: "helvetica",
                        fontWeight: "normal",
                        fontStyle: "normal",
                        fontSize:"5vmax",
                        
                    }}
                    >
                    <TypeWritter
                        options={{
                        strings: ["cross-chain burn mechanism"],
                        autoStart: true,
                        loop: true,
                        }}
                    />
                    </span>
                    that utilizes both the
                    <br></br> 
                    Ethereum and Binance blockchains.
                   
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
        </div>
    )
}

export default Tokenomics
