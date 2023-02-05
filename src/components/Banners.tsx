import Image from 'next/image';
import styles from '@/styles/Banners.module.scss';

const Banners = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.banner__top}>
        <Image src="/top-banner.png" alt="banner1" width={167} height={140} />
        <div className={styles.description}>
          <div className={styles.parallelogram}>
            <h6>-25%</h6>
          </div>
          <h5>
            на товары <br />
            для кабинета
          </h5>
          <button>
            Выбрать<div></div>
          </button>
        </div>
      </div>
      <div className={styles.banner__bottom}>
        <div className={styles.description}>
          <h5>
            Скидка <br /> на периферию для компьютера
          </h5>
          <div className={styles.parallelogram}>
            <h6>10%</h6>
          </div>
          <button>
            Выбрать<div></div>
          </button>
        </div>
        <Image src="/bottom-banner.png" alt="banner1" width={185} height={140} />
      </div>
    </div>
  );
};

export default Banners;
