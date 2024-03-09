import {
  useGetAllBrandsQuery,
  useGetAllPricesQuery,
} from "../../../store/api/productApi";
import { resetFilter, selectFilter, setBrand, setPrice, setProductName } from "../../../store/filterSlice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { BrandSelect } from "./BrandSelect/BrandSelect";
import styles from "./Filter.module.scss";
import { PriceSelect } from "./PriceSelect/PriceSelect";
import { ProductNameSearch } from "./ProductNameSearch/ProductNameSearch";

interface FilterProps {}

export function Filter({}: FilterProps) {
  const { data: prices = [] } = useGetAllPricesQuery();
  const { data: brands = [] } = useGetAllBrandsQuery();

  const dispatch = useAppDispatch();
  const {product, brand, price} = useAppSelector(selectFilter);

  const changeProductName = (value: string) => {
    dispatch(resetFilter());
    dispatch(setProductName(value));
  }
  const changeBrand = (value: string) => {
    dispatch(resetFilter());
    dispatch(setBrand(value));
  }
  const changePrice = (value: number | null) => {
    dispatch(resetFilter());
    dispatch(setPrice(value));
  }

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Filter</h2>
      <div className={styles.filter}>
        <ProductNameSearch initialValue={product} onChange={changeProductName} />
        <BrandSelect value={brand} brands={brands} onChange={changeBrand} />
        <PriceSelect value={price} prices={prices} onChange={changePrice} />
      </div>
    </div>
  );
}
