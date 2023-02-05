import styles from '@/styles/Header.module.scss';

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Всё для комфортной работы</h1>
      <button className={styles.arrow}></button>
    </div>
  );
};

export default Header;
