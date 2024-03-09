import { useState } from "react";
import {
  useGetIdsByFilterQuery,
  useGetIdsQuery,
  useGetProductsByIdQuery,
} from "../../store/api/productApi";
import { selectFilter } from "../../store/filterSlice";
import { useAppSelector } from "../../store/store";
import { clearNullish } from "../../utils/clearNullish";
import styles from "./Content.module.scss";
import { Pagination } from "./Pagination/Pagination";
import { ProductList } from "./ProductList/ProductList";

interface ContentProps {}

export function Content({}: ContentProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 50;

  const filter = useAppSelector(selectFilter);
  const isFilter = clearNullish(filter);

  const filteredIds = useGetIdsByFilterQuery(filter, {
    skip: !isFilter,
  }).data;
  const ids = useGetIdsQuery(
    { offset: currentPage - 1, limit: ITEMS_PER_PAGE },
    { skip: isFilter }
  ).data;

  const currentIds = filteredIds || ids;

  const {
    data: products = [],
    isFetching,
    isUninitialized,
  } = useGetProductsByIdQuery(currentIds!, { skip: !currentIds });

  return (
    <div className={styles.wrapper}>
      <h2 className="title">Products</h2>
      <ProductList
        products={products}
        isLoading={isFetching || isUninitialized}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={11}
        goTo={(n: number) => {}}
      />
    </div>
  );
}
