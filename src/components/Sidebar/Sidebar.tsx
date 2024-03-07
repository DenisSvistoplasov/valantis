import { BrandSelect } from "./BrandSelect/BrandSelect";
import { PriceSelect } from "./PriceSelect/PriceSelect";
import { ProductNameSearch } from "./ProductNameSearch/ProductNameSearch";
import styles from "./Sidebar.module.scss";

interface SidebarProps {}

export function Sidebar({}: SidebarProps) {
  const brands: string[] = ['brand1', 'brand2'];
  const prices: string[] = ['price1', 'price2'];

  const onChange = (value:any) => {
    console.log('value: ', value);
  }

  return (
    <div className={styles.wrapper}>
      <h2 className="title">Filter</h2>
      <div className="filter">
        <ProductNameSearch onChange={onChange} />
        <BrandSelect brands={brands} onChange={onChange} />
        <PriceSelect prices={prices} onChange={onChange} />
      </div>
    </div>
  );
}
