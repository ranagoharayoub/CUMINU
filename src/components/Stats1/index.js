import React from 'react'
import styles from "./style.module.css";
import TypeWritter from "typewriter-effect";
import chart from '../../assets/images/icon.png'

function Stats1() {
    return (
        <div className={styles.main}>
            <div className='py-10 px-8 w-full bg-gray-900 md:px-24 text-left xxl:px-4 xxl:max-w-9xl xxl:mx-auto'>

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
                        <img src={chart} alt='img'></img>
                        <div>LIVE CHART</div>
                    </div>
                    <div className={styles.btn}>
                        <img src={chart} alt='img'></img>
                        <div>ETHERSCAN</div>
                    </div>

                </div>

                <p className={styles.bottom}>
                    <span style={{display:'flex', alignItems:'baseline'}}>
                        A total of{" "}
                        <span
                    className="block text-pink-800"
                    style={{
                        fontFamily: "helvetica",
                        fontWeight: "normal",
                        fontStyle: "normal",
                        fontSize:"5vmax",
                        marginLeft:"1vmax"
                    }}
                    >
                    <TypeWritter
                        options={{
                        strings: ["4 , 7000 , 000 , 000"],
                        autoStart: true,
                        loop: true,
                        }}
                    />
                        
                        </span>    
                    </span>

                    <span>tokens have been 
                    
                        <span style={{color:"white"}}>{" "}permanently removed {" "}</span>

                        from existence.
                    </span>
                    <span>They no longer exist in any wallet, dead or otherwise</span> 
                </p>

            </div>
        </div>
    )
}

export default Stats1
