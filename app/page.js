'use client'

import styles from './page.module.css'
import MainInfo from "@/app/components/MainInfo";
import Portfolio from "@/app/components/Portfolio";


export default function Home() {
    return (
        <main className={styles.main}>
            <MainInfo/>
            <Portfolio/>
        </main>
    )
}
