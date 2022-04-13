import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { default as bemCssModules } from 'bem-css-modules';
import { default as PaginationStyles } from './Pagination.module.scss';
import { PaginateProps } from './../../models/Friend';

const style = bemCssModules(PaginationStyles);

const Pagination: React.FC<PaginateProps> = ({pages, setCurrentPage, currentFriends, filteredFriend}) => {

    const numOfPages = [];

    for (let i=1; i <= pages; i++) {
        numOfPages.push(i);
    }

    const [currentButton, setCurrentButton] = useState(1);

    useEffect(() => {
        setCurrentPage(currentButton);
    }, [currentButton, setCurrentPage]);

  return (
    <div className={style()}>
        <ul className={style('pagination')}>
            { numOfPages.map((page, index) => {
              return (
                  <li key={index} className={`${currentButton === page ? style('page-item active') : style('page-item') }`}><a href="#!" className="page-link"
                      onClick={() => setCurrentButton(page)}>{page}</a>
                  </li>
                )
              })
            }
        </ul>
    </div>
  )
}

export default Pagination;