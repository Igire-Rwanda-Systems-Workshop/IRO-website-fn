"use client";

import * as React from "react";
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    getFilteredRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
// import ApprovePurchaseModal from "./approveModal";
// import DenyPurchaseModal from "./denialModal";
// import InquireModal from "./inquireModal";

const firstTableData = [
    {
        date: "20 Oct, 2024",
        product: "Table",
        quantity: 2,
        amountPerUnit: 25000,
        totalAmount: 125000,
        status: "Approved",
    },
    {
        date: "21 Oct, 2024",
        product: "chair",
        quantity: 5,
        amountPerUnit: 25000,
        totalAmount: 125000,
        status: "Approved",
    },
    {
        date: "23 Oct, 2024",
        product: "mark board",
        quantity: 1,
        amountPerUnit: 25000,
        totalAmount: 125000,
        status: "Approved",
    },
];

const secondTableData = [
    {
        date: "24 Oct, 2024",
        product: "Table",
        quantity: 5,
        amountPerUnit: 25000,
        totalAmount: 125000,
        status: "completed",
    },
    {
        date: "24 Oct, 2024",
        product: "Chair",
        quantity: 5,
        amountPerUnit: 10000,
        totalAmount: 100000,
        status: "completed",
    },
    {
        date: "24 Oct, 2024",
        product: "Mark board",
        quantity: 2,
        amountPerUnit: 5000,
        totalAmount: 10000,
        status: "completed",
    },
    {
        date: "24 Oct, 2024",
        product: "Kettle",
        quantity: 2,
        amountPerUnit: 70000,
        totalAmount: 140000,
        status: "completed",
    },
    {
        date: "24 Oct, 2024",
        product: "Kettle",
        quantity: 2,
        amountPerUnit: 70000,
        totalAmount: 140000,
        status: "completed",
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
            if (status === "completed") statusClass = "text-blue-500";

            return <div className={statusClass}>{status}</div>;
        },
    },
    // {
    //     accessorKey: "invoice",
    //     header: () => "Invoice",
    // },
];

export default function Request() {
    const [sorting, setSorting] = React.useState([]);
    const [globalFilter, setGlobalFilter] = React.useState("");
    const [isAddModalOpen, setIsAddModalOpen] = React.useState(false);
    const [isApproveModalOpen, setIsApproveModalOpen] = React.useState(false);
    const [isDenialModalOpen, setIsDenialModalOpen] = React.useState(false);
    const [isInquireModalOpen, setIsInquireModalOpen] = React.useState(false);

    const handleApprove = () => {
        console.log("Purchase approved!");
        setIsApproveModalOpen(false);
    };

    const handleDeny = () => {
        console.log("Purchase denied!");
        setIsDenialModalOpen(false);
    };

    const handleInquire = () => {
        // console.log("Purchase denied!");
        setIsDenialInquireOpen(false);
    };

    const firstTable = useReactTable({
        data: firstTableData,
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

    const secondTable = useReactTable({
        data: secondTableData,
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
            <div className="mb-4 flex justify-between">
                <h1 className="text-md font-semibold">Purchased items</h1>
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader className="bg-[#EFF4FA]">
                        {firstTable.getHeaderGroups().map((headerGroup) => (
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
                        {firstTable.getRowModel().rows?.length ? (
                            firstTable.getRowModel().rows.map((row) => (
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
            <div className="my-4">
                <h1 className="text-md font-semibold">Purchased record</h1>
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader className="bg-[#EFF4FA]">
                        {secondTable.getHeaderGroups().map((headerGroup) => (
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
                        {secondTable.getRowModel().rows?.length ? (
                            secondTable.getRowModel().rows.map((row) => (
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
                    onClick={() => secondTable.previousPage()}
                    disabled={!secondTable.getCanPreviousPage()}
                >
                    Previous
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => secondTable.nextPage()}
                    disabled={!secondTable.getCanNextPage()}
                >
                    Next
                </Button>
            </div>

            {/* <ApprovePurchaseModal
                isOpen={isApproveModalOpen}
                onClose={() => setIsApproveModalOpen(false)}
                onApprove={handleApprove}
            />
            <DenyPurchaseModal
                isOpen={isDenialModalOpen} 
                onClose={() => setIsDenialModalOpen(false)}
                onDeny={handleDeny} 
            />
             <InquireModal
                isOpen={isInquireModalOpen} 
                onClose={() => setIsInquireModalOpen(false)}
                onDeny={handleInquire} 
            /> */}
        </div>
    );
}
