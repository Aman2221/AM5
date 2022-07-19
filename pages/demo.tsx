import React, { useState } from 'react'
import Main from '../components/Demo/Main';
import styles from '../styles/Demo/demo.module.css'
import Head from 'next/head'

function demo(){
    return (
        <>
            <Head>
                <title>Demo UI</title>
            </Head>
            <div className={styles.demoContainer}>
                <div className={styles.demoContainerMain}>
                    <Main />
                </div>
            </div>
        </>
    )
}

export default demo