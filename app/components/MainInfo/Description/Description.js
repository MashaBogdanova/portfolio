import {mainInfo} from "@/app/config/portfolio.config";
import styles from './description.module.css';

function Description() {
    return (
        <article className={styles.description}>
            <h1 className={styles.description__title}>{mainInfo.name}</h1>
            <h4 className={styles.description__subtitle}>{mainInfo.speciality}</h4>
            <p className={styles.description__summary}>{mainInfo.summary}</p>
        </article>
    );
}

export default Description;
