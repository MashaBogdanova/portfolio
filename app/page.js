'use client'

import styles from './page.module.css'
import MainInfo from "@/app/components/MainInfo";
import Portfolio from "@/app/components/Portfolio";
import Technologies from "@/app/components/Technologies";


export default function Home() {
    return (
        <main className={styles.main}>
            <MainInfo/>
            <Technologies/>
            <Portfolio/>
        </main>
    )
}
