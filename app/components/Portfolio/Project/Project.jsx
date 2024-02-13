import styles from './project.module.css';
import Image from 'next/image';
import Link from 'next/link';

function Project({ project }) {
  return (
    <article className={styles.project}>
      <Link href={project.deployLink} target="_blank">
        <h3 className={styles.project__title}>{project.title}</h3>
        <Image
          className={styles.project__picture}
          src={project.picture}
          alt={project.title}
        />
      </Link>
      <ul className={styles.project__technologiesList}>
        {project.technologies.map((item) => (
          <li className={styles.project__technology} key={item}>
            {item}
          </li>
        ))}
      </ul>
      <p>{project.description}</p>
      <div className={styles.project__buttonsContainer}>
      <Link className={styles.project__button} href={project.codeLink} target="_blank">
        GitHub
      </Link>
      {project.figmaLink && (
        <Link className={styles.project__button} href={project.figmaLink} target="_blank">
          Figma
        </Link>
      )}
      </div>
    </article>
  );
}

export default Project;
