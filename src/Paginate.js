import React, { Component } from "react";
import style from './App.module.css'

class Paginate extends Component {
    render() {
        const {
            postsPerPage,
            totalPosts,
            paginates,
            nextPage,
            prevPage,
            currentPage
        } = this.props;
        
        const pageNumbers = [];
        for (let i = currentPage; i <= Math.ceil(totalPosts / postsPerPage); i++) {
            pageNumbers.push(i);
            if (pageNumbers.length >= 1 && pageNumbers.length >= 4) {
                  break
            }       
        }
        
        return (
            <div className={"row pt-4 float-right text-right " + style.pagination}>
                <div className="col-md-3 mt-4">
                    <h6 className={"mt-2 " + style.space}>Showing 1 to 5 of 20 entries</h6>
                </div>
                <div className="col-md-9 ">
                    <ul>
                        <li className={style.roundedLeft}>
                            <a href="#" className="page-link" onClick={() => prevPage()}>Prev</a>
                        </li>
                        {pageNumbers.map((num) => {
                            return (
                                <li className={style.thinBorder} key={num}>
                                    <a
                                        onClick={() => paginates(num)}
                                        href="#"
                                    >
                                        {num}
                                    </a>
                                </li>
                            );
                        })}
                        <li className={style.roundedRight}>
                            <a href="#" onClick={() => nextPage()}>Next</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
        
    }
}

export default Paginate;
