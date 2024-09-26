"use client";

import * as React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel, // Import this to handle filtering
  useReactTable,
} from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"; // Add this import
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PurchaseRequestModal from "./purchaseRequestModal"; 

const data = [
  {
    date: "24 Oct, 2015",
    product: "Table",
    quantity: 5,
    amountPerUnit: 25000,
    totalAmount: 125000,
    status: "Pending",
  },
  {
    date: "24 Oct, 2015",
    product: "Chair",
    quantity: 5,
    amountPerUnit: 10000,
    totalAmount: 100000,
    status: "Pending",
  },
  {
    date: "24 Oct, 2015",
    product: "Mark board",
    quantity: 2,
    amountPerUnit: 5000,
    totalAmount: 10000,
    status: "Pending",
  },
  {
    date: "24 Oct, 2015",
    product: "Kettle",
    quantity: 2,
    amountPerUnit: 70000,
    totalAmount: 140000,
    status: "Approved",
  },
  {
    date: "24 Oct, 2015",
    product: "Kettle",
    quantity: 2,
    amountPerUnit: 70000,
    totalAmount: 140000,
    status: "Denied",
  },
];

const columns = [
  {
    accessorKey: "date",
    header: () => "Date",
  },
  {
    accessorKey: "product",
    header: () => "Product",
  },
  {
    accessorKey: "quantity",
    header: () => "Quantity",
  },
  {
    accessorKey: "amountPerUnit",
    header: () => "Amount per Unit",
    cell: ({ row }) => {
      const formattedAmount = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "RWF",
      }).format(row.getValue("amountPerUnit"));
      return <div>{formattedAmount}</div>;
    },
  },
  {
    accessorKey: "totalAmount",
    header: () => "Total Amount",
    cell: ({ row }) => {
      const formattedTotal = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "RWF",
      }).format(row.getValue("totalAmount"));
      return <div>{formattedTotal}</div>;
    },
  },
  {
    accessorKey: "status",
    header: () => "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");
      let statusClass = "text-yellow-500"; 
      if (status === "Approved") statusClass = "text-green-500";
      if (status === "Denied") statusClass = "text-red-500";

      return <div className={statusClass}>{status}</div>;
    },
  },
];

export default function Request() {
  const [sorting, setSorting] = React.useState([]);
  const [globalFilter, setGlobalFilter] = React.useState(""); 
  const [isAddModalOpen, setIsAddModalOpen] = React.useState(false); // State for modal visibility

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
      globalFilter,
    },
  });

  return (
    <div className="w-full p-6">
      <div className="flex justify-between">
        <h1 className="text-md font-semibold">Purchase Request</h1>
        <p className="font-semibold">Balance: <span className="text-[#F79E1B]">100,000,000</span> RWF</p>
      </div>
      <div className="flex items-center py-4">
        <Input
          placeholder="Search product..."
          value={globalFilter}
          onChange={(event) => setGlobalFilter(event.target.value)} 
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader className="bg-[#EFF4FA]">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} onClick={() => setIsAddModalOpen(true)}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
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
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
      <PurchaseRequestModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} /> {/* Modal instance */}
    </div>
  );
}
