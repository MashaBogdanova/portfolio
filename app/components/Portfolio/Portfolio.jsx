import styles from './portfolio.module.css';
import Project from '/app/components/Portfolio/Project';
import { portfolio } from '/app/config/portfolio.config';

function Portfolio() {
  return (
    <section className={styles.portfolio}>
      <h2>MY PORTFOLIO</h2>
      <ul className={styles.portfolio__list}>
        {portfolio.map((project) => (
          <Project project={project} key={project.title} />
        ))}
      </ul>
    </section>
  );
}

export default Portfolio;
