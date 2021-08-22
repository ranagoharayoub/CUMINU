import React from 'react'
import styles from './style.module.css'

function Platform1() {
    return (
        <div className={styles.main}>

            <div className='py-10 px-8 w-full bg-gray-900 md:px-24 text-left xxl:px-4 xxl:max-w-9xl xxl:mx-auto'>
                <div className={styles.join}>
                    JOIN THE CUMMUNITI
                </div>
                <div className={styles.get}>
                    Get a first-class 
                    <br></br>
                    seat on
                     <span style={{color:"#F91382"}}> cummuniti</span> 
                </div>
                <div className={styles.enjoy}>
                Enjoy exclusive benefits on our
                <span style={{color:"#F8F7F7"}}> next-generation </span>
                <br></br>
                18+ streaming platform by holding CUMINU token.
                </div>
                <div className={styles.btn}>
                    <button>
                        VISIT THE PLATFORM
                    </button>   
                </div>

            </div>
        </div>
    )
}

export default Platform1
