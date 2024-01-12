import styles from './technologies.module.css';
import IconsList from 'app/components/IconsList';
import { technologiesList } from '/app/config/portfolio.config';

function Technologies() {
  return (
    <section className={styles.technologies}>
      <h2>MY TECHNOLOGIES</h2>
      <IconsList list={technologiesList} type="technologies" />
    </section>
  );
}

export default Technologies;
