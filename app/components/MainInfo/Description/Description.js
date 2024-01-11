import {mainInfo} from "@/app/config/portfolio.config";
import styles from './description.module.css';
import Image from "next/image";

function Description() {
    return (
        <article className={styles.description}>
            <Image className={styles.description__photo} src={mainInfo.photo} alt="Maria Bogdanova"/>
            <div className={styles.description__textBlock}>
                <h1>{mainInfo.name}</h1>
                <h4 className={styles.description__subtitle}>{mainInfo.speciality}</h4>
                <p className={styles.description__summary}>{mainInfo.summary}</p>
            </div>
        </article>
    );
}

export default Description;
