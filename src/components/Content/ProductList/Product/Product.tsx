import { IProduct } from "../../../../types";
import styles from "./Product.module.scss";

export function Product({id, brand, price, product}: IProduct) {
  return (
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
  );
}
