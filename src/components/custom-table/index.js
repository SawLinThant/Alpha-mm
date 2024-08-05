import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import "../../style/customtable.css";
import { createColumnHelper } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMemo } from "react";
import { GrNext,GrPrevious } from "react-icons/gr";
import { FaRegEdit } from "react-icons/fa";

const CustomTable = ({ data }) => {
  const navigate = useNavigate();
  const [pagination, setPagination] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const currentItems = useMemo(() => {
    const start = (pagination - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return data.slice(start, end);
  }, [data, pagination, itemsPerPage]);

  const handlePageChange = (direction) => {
    console.log(direction)
    setPagination((prevPagination) => {
      const currentPage = prevPagination;
      const newPage = direction === "next" ? prevPagination + 1 : prevPagination - 1;
      if (newPage < 1 || newPage > totalPages) {
        return currentPage; // Do not change the page if out of bounds
      }
      return newPage;
      
    });
  };
  const handlePageChangeByNumber = (pageNumber) => {
      setPagination(pageNumber)
  }

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`pagination-button ${
            pagination === i ? "active" : ""
          }`}
          onClick={() => handlePageChangeByNumber(i)}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  const columnHelper = createColumnHelper();
  const column = [
    columnHelper.accessor("image_url", {
      cell: (info) => (
        <div className="table-image-container">
          <div className="table-img-layout">
            <img src={info.getValue()} alt="product-image" />
          </div>
        </div>
      ),
      header: () => <span className="column-head"></span>,
    }),
    columnHelper.accessor("name", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: () => <span className="column-head">Name</span>,
    }),

    columnHelper.accessor("price", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: () => <span className="column-head">Price</span>,
    }),

    columnHelper.accessor("model", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: () => <span className="column-head">Model</span>,
    }),

    columnHelper.accessor("id", {
      cell: (info) => (
        <button
        style={{display:'flex', width:'100%', flexDirection:'row', alignItems:'center', justifyContent:'center', gap:'10px', border:'none', backgroundColor:'transparent', cursor:'pointer'}}
          onClick={() => {
            navigate(`/dashboard/detail/${info.getValue()}`);
          }}
        >
         <p>Detail</p> <FaRegEdit />
        </button>
      ),
      header: () => <span className="column-head">Detail</span>,
    }),
  ];

  const table = useReactTable({
    data: currentItems,
    columns: column,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="custom-table-container">
      <div className="custom-table-layout">
      <table className="custom-table">
        <thead className="table-head">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="header-row">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  scope="col"
                  className="column-head-container"
                >
                  {header.placeholderId
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody style={{backgroundColor:'white'}}>
          {table.getRowModel()?.rows?.map((row,index) => (
            <tr key={row.id} className={`data-row ${index % 2 === 0? "row-background-gray":"row-background-white"}`}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="table-data">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
      <div className="pagination-control-container">
        <div className="pagination-control-layout">
          <button className="prev-btn" disabled={pagination=== 1} onClick={() => handlePageChange('prev')}><GrPrevious /></button>
          {renderPageNumbers()} {/* <div className="pagination-indicator">{pagination}<span>of</span>{totalPages}</div> */}
          <button className="next-btn" disabled={pagination === totalPages} onClick={() => handlePageChange('next')}><GrNext /></button>
          
        </div>
      </div>
    </div>
  );
};
export default CustomTable;
