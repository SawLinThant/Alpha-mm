import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper();
export const column =[
    columnHelper.accessor("id",{
        cell:(info) => (
            <span>{info.getValue()}</span>
        ),
        header:() => <span>Id</span>
    }),

    columnHelper.accessor("name",{
        cell:(info) => (
            <span>{info.getValue()}</span>
        ),
        header:() => <span>Name</span>
    }),

    columnHelper.accessor("category",{
        cell:(info) => (
            <span>{info.getValue()}</span>
        ),
        header:() => <span>Category</span>
    }),

    columnHelper.accessor("price",{
        cell:(info) => (
            <span>{info.getValue()}</span>
        ),
        header:() => <span>Price</span>
    }),

    columnHelper.accessor("id",{
        cell:(info) => (
            <button>
                {/* {info.getValue()} */}
                Detail
            </button>
        ),
        header:() => <span>Price</span>
    }),
]