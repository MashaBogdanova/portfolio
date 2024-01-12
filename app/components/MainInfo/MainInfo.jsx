import styles from './main-info.module.css';
import Description from '/app/components/MainInfo/Description/Description';
import IconsList from 'app/components/IconsList';
import { contactsList } from '/app/config/portfolio.config';

function MainInfo() {
  return (
    <section className={styles.mainInfo}>
      <Description />
      <IconsList list={contactsList} type="contacts" />
    </section>
  );
}

export default MainInfo;
