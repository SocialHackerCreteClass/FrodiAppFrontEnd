import React, { useEffect } from "react"
import { useTable, useFlexLayout, usePagination } from "react-table"
import PropTypes from "prop-types"
import {
  tr,
  th,
  tableStyle,
  orderingPagination,
  pagination,
  pageBut,
  activeBut,
  noActiveBut
} from "./style"
import { cx } from "emotion"

const Table = ({
  columns,
  data,
  total,
  pageSize = 10,
  pageIndex = 0,
  onChange
}) => {
  const defaultColumn = React.useMemo(
    () => ({
      // When using the useFlexLayout:
      minWidth: 30, // minWidth is only used as a limit for resizing
      width: 200, // width is used for both the flex-basis and flex-grow 150
      maxWidth: 250 // maxWidth is only used as a limit for resizing 200
    }),
    []
  )

  const {
    getTableProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    pageOptions,
    nextPage,
    previousPage,
    state
  } = useTable(
    {
      columns,
      data,
      manualPagination: true,
      defaultColumn,
      initialState: { pageIndex, pageSize },
      pageCount: Math.ceil(total / pageSize)
    },
    useFlexLayout,
    usePagination
  )

  useEffect(() => {
    const { pageSize, pageIndex } = state
    onChange({ pageSize, pageIndex })
  }, [onChange, state])

  return (
    <>
      <div {...getTableProps()} className={tableStyle}>
        {/* TABLE HEAD */}
        <div>
          {headerGroups.map((headerGroup, i) => (
            <div
              key={i}
              {...headerGroup.getHeaderGroupProps({})}
              className={th}>
              {headerGroup.headers.map((column, j) => (
                <div key={j} {...column.getHeaderProps()}>
                  {column.render("Header")}
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* TABLE BODY */}
        <div>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <div key={i} {...row.getRowProps()} className={tr}>
                {row.cells.map((cell, j) => {
                  return (
                    <div key={j} {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
      {/* PAGINATION */}
      <div className={orderingPagination}>
        <div>
          Displaying {page.length} entries of {total}
        </div>
        <ol className={pagination}>
          <li
            className={cx(pageBut, { [noActiveBut]: !canPreviousPage })}
            onClick={() => gotoPage(0)}>
            «
          </li>
          <li
            className={cx(pageBut, { [noActiveBut]: !canPreviousPage })}
            onClick={() => previousPage()}>
            ‹
          </li>
          {pageOptions.map((index) => (
            <li
              key={index}
              className={cx(pageBut, {
                [activeBut]: state.pageIndex === index
              })}
              onClick={() => gotoPage(index)}>
              {index + 1}
            </li>
          ))}
          {/* <li className={pageBut} onClick={() => gotoPage()}>
              {"..."}
            </li> */}
          <li
            className={cx(pageBut, { [noActiveBut]: !canNextPage })}
            onClick={() => nextPage()}>
            ›
          </li>
          <li
            className={cx(pageBut, { [noActiveBut]: !canNextPage })}
            onClick={() => gotoPage(pageCount - 1)}>
            »
          </li>
        </ol>
      </div>
    </>
  )
}

Table.propTypes = {
  columns: PropTypes.string,
  data: PropTypes.array,
  total: PropTypes.number,
  pageIndex: PropTypes.number,
  pageSize: PropTypes.number,
  onChange: PropTypes.func
}

export default Table
