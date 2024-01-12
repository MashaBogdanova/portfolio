import styles from './page.module.css';
import MainInfo from '/app/components/MainInfo';
import Technologies from '/app/components/Technologies';
import Portfolio from '/app/components/Portfolio';

export default function Home() {
  return (
    <main className={styles.main}>
      <MainInfo />
      <Technologies />
      <Portfolio />
    </main>
  );
}
