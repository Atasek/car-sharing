import ReactPaginate from "react-paginate";
import "./Paginator.scss";
import React from "react";

export default function Paginator({itemsCount, pageSize, onPageChange}) {
    const pageCount = Math.ceil(itemsCount / pageSize) || 1;

    return <ReactPaginate
        initialPage={0}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        previousLabel="<<"
        nextLabel=">>"
        breakLabel="..."
        containerClassName="paginator"
        activeClassName="paginator__item_current"
        pageClassName="paginator__item"
        pageLinkClassName="paginator__link"
        previousClassName="paginator__item"
        previousLinkClassName="paginator__item"
        nextClassName="paginator__item"
        nextLinkClassName="paginator__item"
        breakClassName="paginator__item"
        breakLinkClassName="paginator__link"
        pageCount={pageCount}
        onPageChange={onPageChange}
    />
}
