import React, { useState } from 'react'
import Main from '../components/Demo/Main';
import styles from '../styles/Demo/demo.module.css'

function demo(){
    return (
        <div className={styles.demoContainer}>
            <div className={styles.demoContainerMain}>
                <Main />
            </div>
        </div>
    )
}

export default demo