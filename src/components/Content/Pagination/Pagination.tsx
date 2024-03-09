import classnames from "classnames";
import styles from "./Pagination.module.scss";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  maxSidePages?: number;
  goTo: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  maxSidePages = 2,
  goTo,
}: PaginationProps) {
  const beforeCount = Math.min(currentPage - 1, maxSidePages);
  const pagesBefore = new Array(beforeCount).fill(0).map((_, i) => {
    const pageNumber = currentPage - beforeCount + i;
    return (
      <button
        className={styles.btn}
        key={pageNumber}
        onClick={() => goTo(pageNumber)}
      >
        {pageNumber}
      </button>
    );
  });

  const afterCount = Math.min(totalPages - currentPage, maxSidePages);
  const pagesAfter = new Array(afterCount).fill(0).map((_, i) => {
    const pageNumber = currentPage + 1 + i;
    return (
      <button
        className={styles.btn}
        key={pageNumber}
        onClick={() => goTo(pageNumber)}
      >
        {pageNumber}
      </button>
    );
  });

  const isStart = currentPage === 1;
  const isEnd = currentPage === totalPages;

  return (
    <div className={styles.wrapper}>
      <button className={styles.btn} disabled={isStart} onClick={() => goTo(1)}>
        {"<<"}
      </button>
      <button
        className={classnames(styles.btn, styles.prev)}
        disabled={isStart}
        onClick={() => goTo(currentPage - 1)}
      >
        {"<"}
      </button>

      {pagesBefore}

      <button className={classnames(styles.btn, styles.active)} disabled>
        {currentPage}
      </button>

      {pagesAfter}

      <button
        className={classnames(styles.btn, styles.next)}
        disabled={isEnd}
        onClick={() => goTo(currentPage + 1)}
      >
        {">"}
      </button>
      <button
        className={styles.btn}
        disabled={isEnd}
        onClick={() => goTo(totalPages)}
      >
        {">>"}
      </button>
    </div>
  );
}
