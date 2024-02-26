"use client";
import React, { useState, useEffect } from "react";
import { useTable, usePagination } from "react-table";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { getAll, getAllInfluencersApi } from "@/api/influencer/influencerApi";
import { profileStatusApi } from "@/api/influencer/influencerApi";

const Table = () => {
  const [currentPageIndex, setCurrentPageIndex] = useState(1);
  const [data, setData] = useState<any>([]);

  const getAllUsers = async () => {
    const data = await getAll();

    const usersOrInfluencers = data?.influencers;

    const filteredData = usersOrInfluencers?.filter((user: any) => {
      return user?.role !== "admin";
    });

    if (filteredData) {
      setData([...filteredData]);
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      await getAllUsers();
    };
    fetchUsers();
  }, []);

  const handleToggle = async (index: number, data: any) => {
    const data2 = await getAll();

    const usersOrInfluencers = data2?.influencers;

    const filteredData = usersOrInfluencers?.filter((user: any) => {
      return user?.role !== "admin";
    });
    const newData = [...filteredData];
    newData[index] = {
      ...newData[index],
      isActive: !newData[index]?.isActive,
    };
    profileStatusApi(newData[index]._id, newData[index].isActive);
    setData([...newData]);
  };
  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    gotoPage(currentPageIndex);
  }, [currentPageIndex]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Name",
        accessor: "fullName",
        Cell: ({ row }: any) => {
          return (
            row.original.fullName ||
            `${row.original.firstName} ${row.original.lastName}`
          );
        },
      },

      {
        Header: "Profile",
        accessor: "isActive",
        Cell: ({ row }) => (
          <button
            className={`${
              row.original?.isActive
                ? "bg-green-200 hover:bg-green-300 text-green-800 font-sans"
                : "bg-red-200 hover:bg-red-300 text-red-800 font-sans"
            } font-medium py-1 px-2 rounded`}
            onClick={() => handleToggle(row.index, data)}
          >
            {row.original.isActive ? "Active" : "Disabled"}
          </button>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    previousPage,
    nextPage,
    gotoPage,
    pageCount,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 } as any,
    },
    usePagination
  ) as any;

  return (
    <div className="w-full h-full flex items-center justify-start mt-4 p-4 flex-col">
      <h1 className="text-4xl font-bold text-center m-2">{`User List`}</h1>
      <table
        className="w-1/2 divide-y divide-gray-200 text-center p-4"
        {...getTableProps()}
      >
        <thead className="bg-gray-900 text-white h-16  border border-gray-500">
          {headerGroups.map((headerGroup: any, headerGroupIndex: number) => (
            <tr key={headerGroupIndex} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <th
                  key={column.id} // Assuming `column.id` is a unique identifier
                  className="px-4 py-2"
                  {...column.getHeaderProps()}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody
          className="bg-black text-white"
          style={{ lineHeight: "2" }}
          {...getTableBodyProps()}
        >
          {page.map((row: any, i: any) => {
            prepareRow(row);
            return (
              <tr key={row.original._id} {...row.getRowProps()}>
                {row.cells.map((cell: any) => {
                  const { key: cellKey, ...cellProps } = cell.getCellProps();
                  return (
                    <td
                      key={cellKey}
                      className="px-4 py-2 font-sans border border-gray-500"
                      {...cellProps}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr className="bg-black">
            <td colSpan={columns.length} className="px-4 py-2">
              <div className="flex items-center justify-between m-4">
                <button
                  className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 bg-gray-200 flex items-center gap-2 hover:bg-gray-300 hover:text-gray-500 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                >
                  <span>
                    <FaChevronLeft />
                  </span>{" "}
                  <span>Previous</span>
                </button>
                <div className="text-sm text-gray-500">
                  Page{" "}
                  <strong className="font-medium">
                    {pageIndex + 1} of {pageCount}
                  </strong>{" "}
                </div>
                <button
                  className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 bg-gray-200 flex items-center gap-2 hover:bg-gray-300 hover:text-gray-500 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={() => nextPage()}
                  disabled={!canNextPage}
                >
                  Next{" "}
                  <span>
                    <FaChevronRight />
                  </span>
                </button>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
