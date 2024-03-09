import {
  useGetAllBrandsQuery,
  useGetAllPricesQuery,
} from "../../../store/api/productApi";
import { setBrand, setPrice, setProductName } from "../../../store/filterSlice";
import { useAppDispatch } from "../../../store/store";
import { BrandSelect } from "./BrandSelect/BrandSelect";
import styles from "./Filter.module.scss";
import { PriceSelect } from "./PriceSelect/PriceSelect";
import { ProductNameSearch } from "./ProductNameSearch/ProductNameSearch";

interface FilterProps {}

export function Filter({}: FilterProps) {
  const { data: prices = [] } = useGetAllPricesQuery();
  const { data: brands = [] } = useGetAllBrandsQuery();

  const dispatch = useAppDispatch();

  const changeProductName = (value: string) => dispatch(setProductName(value));
  const changeBrand = (value: string) => dispatch(setBrand(value));
  const changePrice = (value: number | null) => dispatch(setPrice(value));

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Filter</h2>
      <div className={styles.filter}>
        <ProductNameSearch onChange={changeProductName} />
        <BrandSelect brands={brands} onChange={changeBrand} />
        <PriceSelect prices={prices} onChange={changePrice} />
      </div>
    </div>
  );
}
