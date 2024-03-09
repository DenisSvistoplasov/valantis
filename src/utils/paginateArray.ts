export function paginateArray<T>(
  arr: T[],
  currentPage: number,
  itemsPerPage: number
) {
  const start = (currentPage - 1) * itemsPerPage;
  const end = currentPage * itemsPerPage;
  return arr.slice(start, end);
}
