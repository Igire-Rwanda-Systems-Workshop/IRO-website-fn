"use client"; // Ensure this is added if you are using Next.js in client-side components

import React, { useState, useMemo, useEffect } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from '@tanstack/react-table';
import { HiOutlineSearch } from 'react-icons/hi';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import Image from 'next/image';

// Simulated data fetching
async function getData() {
  return [
    {
      id: "1",
      date: "24 Oct, 2015",
      product: "Table",
      quantity: 5,
      amountPerUnit: "25,000 RWF",
      totalAmount: "125,000 RWF",
      status: "Pending",
    },
    {
      id: "2",
      date: "24 Oct, 2015",
      product: "Chair",
      quantity: 5,
      amountPerUnit: "10,000 RWF",
      totalAmount: "100,000 RWF",
      status: "Pending",
    },
    {
      id: "3",
      date: "24 Oct, 2015",
      product: "Mark board",
      quantity: 2,
      amountPerUnit: "5,000 RWF",
      totalAmount: "10,000 RWF",
      status: "Pending",
    },
    {
      id: "4",
      date: "24 Oct, 2015",
      product: "Kettle",
      quantity: 2,
      amountPerUnit: "70,000 RWF",
      totalAmount: "140,000 RWF",
      status: "Approved",
    },
    {
      id: "5",
      date: "24 Oct, 2015",
      product: "Kettle",
      quantity: 2,
      amountPerUnit: "70,000 RWF",
      totalAmount: "140,000 RWF",
      status: "Denied",
    },
  ];
}

export default function DemoPage() {
  const [data, setData] = useState([]); // State to hold data
  const [search, setSearch] = useState(''); // Search input state
  const [filter, setFilter] = useState(''); // Status filter state

  // Fetch data asynchronously on component mount
  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setData(result); // Store fetched data in state
    }
    fetchData();
  }, []); // Run once on component mount

  // Define columns directly within the page
  const columns = [
    {
      accessorKey: "date",
      header: "Date",
    },
    {
      accessorKey: "product",
      header: "Product",
    },
    {
      accessorKey: "quantity",
      header: "Quantity",
    },
    {
      accessorKey: "amountPerUnit",
      header: "Amount per unit",
    },
    {
      accessorKey: "totalAmount",
      header: "Total amount",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.original.status;
        const statusColors = {
          Pending: "text-yellow-500",
          Approved: "text-green-500",
          Denied: "text-red-500",
        };

        return (
          <span className={statusColors[status] || "text-gray-500"}>
            {status}
          </span>
        );
      },
    },
  ];

  const DataTable = ({ columns, data }) => {
    const [selectedRow, setSelectedRow] = useState(null); // Track the selected row data

    const handleRowClick = (row) => {
      setSelectedRow(row.original); // Open the dialog with selected row's data
    };

    const closeDialog = () => {
      setSelectedRow(null); // Close the dialog
    };

    // Filter data based on search and status
    const filteredData = useMemo(() => {
      if (!Array.isArray(data)) return []; 
      return data.filter((row) => {
        const matchesProduct = row.product.toLowerCase().includes(search.toLowerCase());
        const matchesStatus = filter ? row.status.toLowerCase() === filter : true;
        return matchesProduct && matchesStatus;
      });
    }, [data, search, filter]);


    const table = useReactTable({
      data: filteredData,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(), 
      initialState: {
        pagination: {
          pageSize: 5, 
        },
      },
    });

    return (
      <div>
        <div className="rounded-md border">
          <table className="table-auto w-full">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id} className="px-4 py-2 border bg-[#EFF4FA]">
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row) => (
                  <tr
                    key={row.id}
                    className="border cursor-pointer hover:bg-gray-100"
                    onClick={() => handleRowClick(row)} // Trigger dialog on row click
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="px-4 py-2 border">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={columns.length} className="text-center py-4">
                    No results.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-start mt-5">
          <Button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="py-1 px-1"
          >
            Previous
          </Button>
          <span>
            Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
          </span>
          <Button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="py-1 px-1"
          >
            Next
          </Button>
        </div>

        {/* Dialog for row details */}
        {selectedRow && (
          <Dialog open={!!selectedRow} onOpenChange={closeDialog}>
            <DialogContent className="bg-[#F8F8F8]">
              <DialogHeader className="pt-3 relative">
                <DialogTitle>Purchase request</DialogTitle>
              </DialogHeader>

              <div className="relative flex justify-between items-center w-full bg-gray-50">
                {/* Product details */}
                <div className="flex flex-row">
                  <div className="mt-2 space-y-1">
                    <div><strong>Name:</strong> {selectedRow.product || 'Office chair'}</div>
                    <div><strong>Id:</strong> {selectedRow.id || '4123637'}</div>
                    <div><strong>Quantity:</strong> {selectedRow.quantity}</div>
                    <div><strong>Amount Per Unit:</strong> {selectedRow.amountPerUnit}</div>
                    <div><strong>Total Amount:</strong> {selectedRow.totalAmount}</div>
                    <div><strong>Status:</strong> {selectedRow.status}</div>
                  </div>
                </div>

                {/* Placeholder Image */}
                <div className="ml-5">
                  <Image 
                    src={'/Rectangle 81.png'}  // Placeholder or default image
                    alt={selectedRow.product || 'Office chair'} 
                    width={200} 
                    height={350} 
                    className="object-contain rounded-md" 
                  />
                </div>
              </div>

              <DialogFooter className="flex justify-center items-center w-full">
                <Button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
                  Compare in stock
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </div>
    );
  };

  return (
    <div className="container px-6 py-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center w-full max-w-lg">
          <div className="relative w-full">
            <HiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search product..."
              className="border bg-gray-100 pl-10 pr-4 rounded-md py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="">
          <select
            id="status"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className=" border bg-white px-2 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Filter by status</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="denied">Denied</option>
          </select>
        </div>
      </div>

      <div className="flex text-xl pb-[20px] flex-row justify-between">
        <div>Purchase Request</div>
        <div>Balance: <span className="text-orange-400">100,000,000</span> Rwf</div>
      </div>

      <div>
        <p className="pb-2">Purchase</p>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
