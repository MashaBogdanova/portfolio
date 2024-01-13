import styles from './main-info.module.css';
import Description from '/app/components/MainInfo/Description/Description';
import IconsList from 'app/components/IconsList';
import { contactsList, mainInfo } from '/app/config/portfolio.config';
import Image from 'next/image';

function MainInfo() {
  return (
    <section className={styles.mainInfo}>
      <div className={styles.mainInfo__content}>
        <Image
          className={styles.mainInfo__photo}
          src={mainInfo.photo}
          alt="Maria Bogdanova"
        />
        <Description />
        <IconsList list={contactsList} type="contacts" />
      </div>
    </section>
  );
}

export default MainInfo;
