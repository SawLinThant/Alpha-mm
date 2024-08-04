import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import "../../style/customtable.css";
import { createColumnHelper } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";

const CustomTable = ({data }) => {
  const navigate = useNavigate();
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
          onClick={() => {
            navigate(`/dashboard/detail/${info.getValue()}`);
          }}
        >
          Detail
        </button>
      ),
      header: () => <span className="column-head">Price</span>,
    }),
  ];

  const table = useReactTable({
    data: data,
    columns: column,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="custom-table-container">
      <table className="custom-table">
        <thead className="table-head">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="header-row">
              {headerGroup.headers.map((header) => (
                <th key={header.id} scope="col" className="column-head-container">
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
        <tbody>
          {table.getRowModel()?.rows?.map((row) => (
            <tr key={row.id} className="role-container">
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
  );
};
export default CustomTable;
