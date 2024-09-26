"use client";
import React, { useState, useMemo } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  flexRender,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
const data = [
  { product: "table", category: "class supplies", quantity: 15 },
  { product: "chair", category: "office supplies", quantity: 20 },
  { product: "plastic chair", category: "class supplies", quantity: 20 },
  { product: "laronge", category: "class supplies", quantity: 5 },
  { product: "m5gr84i9", category: "office supplies", quantity: 1 },
];
const columns = [
  {
    accessorKey: "product",
    header: () => <div className="text-left">Product</div>,
    cell: ({ row }) => <div className="py-2">{row.original.product}</div>,
  },
  {
    accessorKey: "category",
    header: () => <div className="text-left">Category</div>,
    cell: ({ row }) => <div className="py-2">{row.original.category}</div>,
  },
  {
    accessorKey: "quantity",
    header: () => <div className="text-left">Quantity</div>,
    cell: ({ row }) => <div className="py-2">{row.original.quantity}</div>,
  },
];
export default function Stock() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const filteredData = useMemo(() => {
    return data.filter(
      (item) =>
        item.product.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (categoryFilter === "" || item.category === categoryFilter)
    );
  }, [searchTerm, categoryFilter]);
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
    <div className="w-full px-6">
      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center w-full max-w-lg">
          <div className="relative w-full">
            <HiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by product..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border bg-gray-100 pl-10 pr-4 rounded-md py-2 w-full"
            />
          </div>
        </div>
        <div>
          <select
            className="border border-3 border-black px-4 py-2 rounded-md"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="">Filter By Category</option>
            <option value="class supplies">Class Supplies</option>
            <option value="office supplies">Office Supplies</option>
          </select>
        </div>
      </div>
      <div>
        <p className="py-6 text-xl">Stock overview</p>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader className="bg-[#EFF4FA]">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-start mt-4">
        <Button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <span>
          Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </span>
        <Button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}



