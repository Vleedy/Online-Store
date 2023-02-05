import styles from '@/styles/Home.module.scss';
import Header from '@/components/Header';
import Banners from '@/components/Banners';
import ProductCart from '@/components/ProductCart';
import { DataItem } from '@/@types/product';
import { ProductItem } from '@/@types/product';

export default function Home({ products }: { products: ProductItem[] }) {
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <Header />
        <Banners />
      </div>
      {products.map((item) => {
        return (
          <ProductCart
            key={item.id}
            id={item.id}
            price={item.price}
            rate={item.rate}
            count={item.count}
          />
        );
      })}
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = await res.json();
  const products = data.map((item: DataItem) => {
    return {
      id: item.id,
      price: (item.price * 70).toFixed(2),
      rate: item.rating.rate,
      count: item.rating.count,
    };
  });
  return { props: { products } };
}
