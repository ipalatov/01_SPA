import React from 'react';
import s from './paginator.module.css';


let Paginator = ({ totalUserCount, pageSize, onPageChanged, currenPage }) => {



    let pagesCount = Math.ceil(totalUserCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            {pages.map(item => {
                return (<button key={item} onClick={() => onPageChanged(item)} className={`${s.pageBtn} ${currenPage === item ? s.selected : ''}`}>{item}</button>)
            })}
        </div>
    )
}

export default Paginator;