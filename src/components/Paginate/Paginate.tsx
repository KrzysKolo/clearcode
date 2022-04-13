import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Friend, FriendProps } from './../../models/Friend';

export type PaginateProps = {
  pages: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  currentEmployees: Friend[];
  filteredFriend: Friend[];
}
const Paginate: React.FC<PaginateProps> = ({pages, setCurrentPage, currentEmployees, filteredFriend}) => {


  const numOfPages = [];

  for (let i=1; i <= pages; i++) {
      numOfPages.push(i);
  }

  const [currentButton, setCurrentButton] = useState(1);

  useEffect(() => {
      setCurrentPage(currentButton);
  }, [currentButton, setCurrentPage])

  return (
      <div className="clearfix">
      <div className="hint-text">Showing <b>{filteredFriend.length}</b> out of <b>{filteredFriend.length}</b> entries</div>
      <ul className="pagination">
          <li className={`${currentButton === 1 ? 'page-item disabled' : 'page-item' }`}><a href="#!"
              onClick = { () => setCurrentButton((prev) => prev === 1 ? prev : prev - 1)}
          >Previous</a></li>
{
          numOfPages.map((page, index) => {
              return (
                  <li key={index} className={`${currentButton === page ? 'page-item active' : 'page-item' }`}><a href="#!" className="page-link"
                      onClick = {()=>setCurrentButton(page)}
                  >{page}</a></li>
              )
          })

}

<li className={`${currentButton === numOfPages.length ? 'page-item disabled' : 'page-item' }`}><a href="#!"
              onClick = { () => setCurrentButton((next) => next === numOfPages.length ? next : next + 1)}
          >Next</a></li>
      </ul>
  </div>
  )
}

export default Paginate;