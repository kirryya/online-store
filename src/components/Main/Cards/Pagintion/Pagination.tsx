import React from 'react';

import { ReturnComponentType } from 'common';

export const Pagination = (): ReturnComponentType => {
  // const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  //
  // const pages = [];
  //
  // for (let i = 1; i <= pagesCount; i++) {
  //   pages.push(i);
  // }
  //
  // const portionCount = Math.ceil(pagesCount / props.portionSize);
  // const [portionNumber, setPortionNumber] = useState<number>(1);
  // const leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
  // const rightPortionPageNumber = portionNumber * props.portionSize;

  return (
    <span>Pagination</span>
    // <div className={styles.paginator}>
    //   {portionNumber > 1 && (
    //     <button
    //       className={styles.prev}
    //       onClick={() => {
    //         setPortionNumber(portionNumber - 1);
    //       }}
    //     >
    //       prev
    //     </button>
    //   )}
    //
    //   {pages
    //     .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
    //     .map((p, index: number) => {
    //       return (
    //         <span
    //           key={index}
    //           className={props.currentPage === p ? styles.selectedPage : styles.page}
    //           onClick={() => {
    //             props.onPageChanged(p);
    //           }}
    //         >
    //           {p}
    //         </span>
    //       );
    //     })}
    //   {portionCount > portionNumber && (
    //     <button
    //       className={styles.next}
    //       onClick={() => {
    //         setPortionNumber(portionNumber + 1);
    //       }}
    //     >
    //       next
    //     </button>
    //   )}
    // </div>
  );
};
