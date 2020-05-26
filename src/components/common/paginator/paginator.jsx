import React, { useState } from 'react';
import s from './paginator.module.css';


let Paginator = ({ totalItemsCount, pageSize, onPageChanged, currenPage, portionSize = 10 }) => {



    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div>
            {portionNumber > 1 && <button className={s.pageBtn} onClick={() => { setPortionNumber(1) }}>start</button>}
            {portionNumber > 1 && <button className={s.pageBtn} onClick={() => { setPortionNumber(portionNumber - 1) }}>prev</button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return (<button
                        key={p}
                        onClick={() => onPageChanged(p)}
                        className={`${s.pageBtn} ${currenPage === p ? s.selected : ''}`}
                    >{p}</button>)
                })}
            {portionNumber < portionCount && <button onClick={() => { setPortionNumber(portionNumber + 1) }}>next</button>}
            {portionNumber < portionCount && <button onClick={() => { setPortionNumber(portionCount) }}>end</button>}
        </div>
    )
}

export default Paginator;