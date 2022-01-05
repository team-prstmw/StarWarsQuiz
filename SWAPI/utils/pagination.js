const ITEMS_PER_PAGE = 24;

export function getNextPageURL(resource, rowsCount, currentPage) {
  const pagesCount = Math.ceil(rowsCount / ITEMS_PER_PAGE);
  if (pagesCount < currentPage) {
    return null;
  }
  return `/api/${resource}/?page=${currentPage + 1}`;
}
