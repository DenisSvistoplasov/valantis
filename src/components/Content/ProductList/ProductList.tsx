import { IProduct } from "../../../types";
import { Product } from "./Product/Product";
import styles from "./ProductList.module.scss";

interface ProductListProps {
  products: IProduct[];
  isLoading?: boolean;
}

export function ProductList({ products, isLoading }: ProductListProps) {
  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        <p>Loading...</p>
      ) : products.length ? (
        <ul className={styles.list}>
          {products.map(product => (
            <Product {...product}  key={product.id}/>
          ))}
        </ul>
      ) : (
        <p className={styles.message}>No items</p>
      )}
    </div>
  );
}
