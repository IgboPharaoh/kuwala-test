import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Data from "./DataContainer";
import ReactPaginate from "react-paginate";

const Table = () => {
  const [perPage] = useState(10);
  const [data] = useState(Data);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const endOffset = offset + perPage;
    setCurrentItems(data.slice(offset, endOffset));
    setPageCount(Math.ceil(data.length / perPage));
  }, [offset, perPage, data]);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * perPage) % data.length;
    setOffset(newOffset);
  };

  return (
    <StyledTable>
      <table>
        <thead>
          <tr className="table-header">
            <th className="thead-1">h3 Index</th>
            <th className="thead-2">Kuwala Import Country</th>
            <th className="thead-1">Total</th>
            <th className="thead-2">Children Under 5</th>
            <th className="thead-1">Elderly (60 plus)</th>
            <th className="thead-2">Men</th>
            <th className="thead-1">Women</th>
            <th className="thead-2">Women of Reproductive Age (15-49)</th>
            <th className="thead-1">Youth (15-24)</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((val) => (
            <tr key={val.h3_index}>
              <td className="td-1">{val.h3_index}</td>
              <td className="td-2">{val.kuwala_import_country}</td>
              <td className="td-1">{val.total}</td>
              <td className="td-2">{val.children_under_five}</td>
              <td className="td-1">{val.elderly_60_plus}</td>
              <td className="td-2">{val.men}</td>
              <td className="td-1">{val.women}</td>
              <td className="td-2">{val.women_of_reproductive_age_15_49}</td>
              <td className="td-1">{val.youth_15_24}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel="Prev"
        nextLabel="Next"
        breakLabel="...."
        breakClassName="break-me"
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        subContainerClassName="pages pagination"
        activeClassName="active"
      />
    </StyledTable>
  );
};

const StyledTable = styled.div`
  width: 100%;
  margin-top: 3rem;
  table {
    width: 100%;
    border: 1px solid black;
    border-spacing: 0rem;
  }
  .thead-1,
  .thead-2 {
    color: white;
    padding: 0.5rem;
    font-weight: 500;
    font-size: 14px;
  }
  .thead-1 {
    background: #4fc3a1;
  }
  .thead-2 {
    background: #324960;
  }
  td {
    text-align: center;
    border-bottom: 0.05rem solid gray;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
  }

  .pagination {
    display: flex;
    list-style: none;
    outline: none;
  }
  .pagination a {
    border: 1px solid white;
    padding: 5px 10px;
    outline: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    font-family: inherit;
  }
  .pagination a,
  .pagination span {
    color: white;
    background-color: #324960;
  }
  .pagination a:hover {
    background-color: #4fc3a1;
    color: white;
    transition-duration: 0.1s;
  }
  .pagination a:active {
    background-color: #324960;
  }
`;
export default Table;
