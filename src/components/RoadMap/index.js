import React from 'react'
import styles from './style.module.css'
import logo from '../../assets/images/logo_small.svg'
import tick from '.../../assets/images/ic_check_circle_24px.svg'
import swap from '../../assets/images/swap-2.png'
import live from '../../assets/images/live.png'

function RoadMap() {
    return (
        <div className={styles.main}>

            <div className='py-10 px-8 w-full flex bg-gray-900 md:px-24 text-left xxl:px-4 xxl:max-w-9xl xxl:mx-auto'>
               
                <div className={styles.logoCont}>

                    <img src={logo} alt=''></img>
                    <div className={styles.line}></div>

                </div>

                <div className={styles.RoadMap}>

                    <div className={styles.roadTitle}>
                        Roadmap
                    </div>

                    <div className={styles.token}>
                        Token Launch
                        <img src={tick} alt=''></img>
                    </div>

                    <div className={styles.subtitle}>
                        Create Ethereum        
                    </div>

                    <div className={styles.subtitle}>
                        Contract Liquidity
                    </div>

                    <div className={styles.subtitle}>
                        Lock Pair on UniSwap
                    </div>

                    <div className={styles.subtitle}>
                        Website Launch
                    </div>

                    <div className={styles.subtitle}>
                        CoinMarketCap Listing 
                    </div>

                    <div className={styles.subtitle}>
                        CoinGecko Listing 
                    </div>

                    <div className={styles.subtitle}>
                        Socials and Branding
                    </div>

                    <div className={styles.subtitle}>
                        1500 Wallet Holders
                    </div>

                    <div className={styles.subtitle}>
                        $10 Million Valuation
                    </div>

                    {/* ---------------Growth--------------- */}

                    <div className={styles.token}>
                        Growth
                        <img src={live} alt=''></img>
                    </div>

                    <div className={styles.subtitle}>
                        First AMA with Tasha Reign            
                    </div>

                    <div className={styles.subtitle}>
                        V1 Platform BETA
                    </div>

                    <div className={styles.subtitle}>
                        Solidity Audit
                    </div>

                    <div className={styles.subtitle}>
                        Ecosystem Rebrand
                    </div>

                    <div className={styles.subtitle}>
                    <span style={{color:'#F91382'}}>cummuniti</span> Concept
                    </div>

                    <div className={styles.subtitle}>
                        Recruitment 
                    </div>

                    <div style={{color:'#A2A2A2'}} className={styles.subtitle}>
                        10,000 Wallet Holders
                    </div>

                    <div style={{color:'#A2A2A2'}} className={styles.subtitle}>
                        $100M Valuation
                    </div>

                    <div style={{color:'#A2A2A2'}} className={styles.subtitle}>
                        New CUMINU Website Launch 
                    </div>
                    <img style={{width:"7vmax"}} src={swap} alt=''></img>

                    {/* ---------------Utility--------------- */}

                    <div className={styles.token}>
                        Utility
                        <img src={''} alt=''></img>
                    </div>

                    <div style={{color:'#A2A2A2'}} className={styles.subtitle}>
                        Launch <span style={{color:'#F91382'}}>cummuniti</span>  Platform First                 
                    </div>

                    <div style={{color:'#A2A2A2'}} className={styles.subtitle}>
                        Major Marketing Campaign
                    </div>

                    <div style={{color:'#A2A2A2'}} className={styles.subtitle}>
                        CUMINU Buyback and Burns
                    </div>

                    <div style={{color:'#A2A2A2'}} className={styles.subtitle}>
                        25,000 Wallet Holders
                    </div>

                    <div style={{color:'#A2A2A2'}} className={styles.subtitle}>
                        $500M Valuation
                    </div>

                    <div style={{color:'#A2A2A2'}} className={styles.subtitle}>
                        1000 Creators (Passed KYC) and Registered on 
                    <span style={{color:'#F91382'}}> cummuniti</span> 
                    </div>

                    <div style={{color:'#A2A2A2'}} className={styles.subtitle}>
                        10,000 Platform Users
                    </div>

                    <div style={{color:'#A2A2A2'}} className={styles.subtitle}>
                        First $10M in Platform Revenue 
                    </div>

                </div>

            </div>
        </div>
    )
}

export default RoadMap
