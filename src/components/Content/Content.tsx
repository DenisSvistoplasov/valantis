import { useEffect, useState } from "react";
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
import { selectTotalItems } from "../../store/totalItems";
import { paginateArray } from "../../utils/paginateArray";

interface ContentProps {}

export function Content({}: ContentProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = useAppSelector(selectTotalItems);
  const ITEMS_PER_PAGE = 50;

  const filter = useAppSelector(selectFilter);
  const clearedFilter = clearNullish(filter);

  useEffect(() => {
    setCurrentPage(1);
  },[filter]);

  const isFilter = Object.keys(clearedFilter).length !== 0;
  const isComplexFilter = Object.keys(clearedFilter).length > 1;

  const filteredIds = useGetIdsByFilterQuery(clearedFilter, {
    skip: !isFilter,
  }).data;
  const allIds = useGetIdsQuery(
    { offset: currentPage - 1, limit: ITEMS_PER_PAGE },
    { skip: isFilter }
  ).data;

  const currentIds = isFilter
    ? filteredIds && paginateArray(filteredIds, currentPage, ITEMS_PER_PAGE)
    : allIds;

  const {
    data: products = [],
    isFetching,
    isUninitialized,
  } = useGetProductsByIdQuery(currentIds!, { skip: !currentIds });

  const totalCurrentItems = (isFilter ? filteredIds?.length : totalItems) || 1;
  const totalPages = Math.ceil(totalCurrentItems / ITEMS_PER_PAGE);

  const goToPage = (page: number) => setCurrentPage(page);

  return (
    <div className={styles.wrapper}>
      <h2 className="title">Products</h2>
      <ProductList
        products={products}
        isLoading={isFetching || isUninitialized}
      />
      <Pagination currentPage={currentPage} totalPages={totalPages} goTo={goToPage} />
    </div>
  );
}
