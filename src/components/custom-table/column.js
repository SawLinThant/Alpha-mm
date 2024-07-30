// // import { createColumnHelper } from "@tanstack/react-table";
// // import { useNavigate } from "react-router-dom";


// const columnHelper = createColumnHelper();
// export const column =[
//     columnHelper.accessor("name",{
//         cell:(info) => (
//             <span>{info.getValue()}</span>
//         ),
//         header:() => <span>Name</span>
//     }),

//     columnHelper.accessor("category",{
//         cell:(info) => (
//             <span>{info.getValue()}</span>
//         ),
//         header:() => <span>Category</span>
//     }),

//     columnHelper.accessor("price",{
//         cell:(info) => (
//             <span>{info.getValue()}</span>
//         ),
//         header:() => <span>Price</span>
//     }),

//     columnHelper.accessor("model",{
//         cell:(info) => (
//             <span>{info.getValue()}</span>
//         ),
//         header:() => <span>Model</span>
//     }),

//     columnHelper.accessor("id",{
//         cell:(info) => (
//             <button 
//             onClick={() => {
//                 const navigate = useNavigate();
//                 navigate(`/dashboard/detail/${info.getValue()}`)
//             }}
            
//             >
//                 Detail
//             </button>
//         ),
//         header:() => <span>Price</span>
//     }),
// ]

// import { createColumnHelper } from "@tanstack/react-table";
// import { useNavigate } from "react-router-dom";

// const columnHelper = createColumnHelper();

// const useProductColumns = () => {
//   const navigate = useNavigate();

//   return [
//     columnHelper.accessor("name", {
//       cell: (info) => <span>{info.getValue()}</span>,
//       header: () => <span>Name</span>,
//     }),
//     columnHelper.accessor("category", {
//       cell: (info) => <span>{info.getValue()}</span>,
//       header: () => <span>Category</span>,
//     }),
//     columnHelper.accessor("price", {
//       cell: (info) => <span>{info.getValue()}</span>,
//       header: () => <span>Price</span>,
//     }),
//     columnHelper.accessor("model", {
//       cell: (info) => <span>{info.getValue()}</span>,
//       header: () => <span>Model</span>,
//     }),
//     columnHelper.accessor("id", {
//       cell: (info) => (
//         <button
//           onClick={() => {
//             navigate(`/dashboard/detail/${info.getValue()}`);
//           }}
//         >
//           Detail
//         </button>
//       ),
//       header: () => <span>Detail</span>,
//     }),
//   ];
// };

// export default useProductColumns;
