import { IProduct } from "../../../types";
import styles from "./ProductList.module.scss";

interface ProductListProps {
  products: IProduct[];
  isLoading?: boolean;
}

export function ProductList({ products, isLoading }: ProductListProps) {
  // products = new Array(50).fill(0).map((_,i)=>(
  //   {
  //     id: ''+i,
  //     product: 'prod'+i,
  //     brand: 'brand'+i,
  //     price: 1000*i
  //   }))
  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        <p>Loading...</p>
      ) : products.length ? (
        <ul className={styles.list}>
          {products.map(({ id, brand, price, product }) => (
            <li className={styles.item} key={id}>
              <div className={styles.prop}>
                <span className={styles.prop_value}>{product}</span>
              </div>
              <div className={styles.prop}>
                <span className={styles.prop__name}>ID</span>
                <span className={styles.prop_value}>{id}</span>
              </div>
              <div className={styles.prop}>
                <span className={styles.prop__name}>Brand</span>
                <span className={styles.prop_value}>{brand || "-"}</span>
              </div>
              <div className={styles.prop}>
                <span className={styles.prop__name}>Price</span>
                <span className={styles.prop_value}>{price}</span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.message}>No items</p>
      )}
    </div>
  );
}
