import ControlPanel from './ControlPanel';
import Image from 'next/image';
import styles from '../styles/ProductCart.module.scss';
import Hit from './Hit';

interface ProductCartProps {
  id: number;
  price: number;
  rate: number;
  count: number;
}

const ProductCart: React.FC<ProductCartProps> = ({ id, price, rate, count }) => {
  return (
    <div className={styles.wrapper}>
      <Image src="/Computer.png" alt="ProductImage" width={220} height={220} />
      {count > 300 && <Hit />}
      <div className={styles.reviews__wrapper}>
        <h5>electronics</h5>
        <div className={styles.stars}>
          {Array(Math.round(rate))
            .fill(null)
            .map((_, i) => (
              <Image key={i} src="/Star.png" alt="star" width={14} height={14} />
            ))}
          {Array(5 - Math.round(rate))
            .fill(null)
            .map((_, i) => (
              <Image key={i} src="/StarGrey.png" alt="star" width={14} height={14} />
            ))}
          <a href="#">
            {count}
            {+count.toString().slice(-1) > 1 && +count.toString().slice(-1) < 5
              ? ' отзыва'
              : ' отзывов'}
          </a>
        </div>
      </div>
      <h2 className={styles.name}>
        Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen
        QLED
      </h2>
      <h1 className={styles.price}>
        {price} ₽<span>/шт</span>
      </h1>
      <div className={styles.controlPanel}>
        <ControlPanel id={id} price={price} />
      </div>
    </div>
  );
};

export default ProductCart;
