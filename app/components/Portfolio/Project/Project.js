import Image from "next/image";
import styles from "./project.module.css";
import Link from "next/link";

function Project({project}) {
    return (
        <article className={styles.project}>
            <Link href={project.deployLink}>
                <h3 className={styles.project__title}>{project.title}</h3>
                <Image className={styles.project__picture} src={project.picture} alt={project.title}/>
            </Link>
            <ul className={styles.project__technologiesList}>{project.technologies.map((item) =>
                <li className={styles.project__technology} key={item}>{item}</li>)}
            </ul>
            <p>{project.description}</p>
            <Link className={styles.project__codeLink} href={project.codeLink}>Explore code</Link>
        </article>
    );
}

export default Project;
