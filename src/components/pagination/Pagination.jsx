import React from 'react';
import './pagination.css'

export const Pagination = ({ gamesPerPage, totalGames, paginate, currentPage}) => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className="pagination__wrapper">
            <ul className="pagination">
                {
                    pageNumbers.map((page) => (
                        <li onClick={() => { paginate(page) }} key={page} className={
                            currentPage === page
                            ? 'page-item page-link__active'
                            : 'page-item'
                        }>
                            <a className='page-link'> {page} </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};
