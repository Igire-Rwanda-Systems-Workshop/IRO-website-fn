"use client";

export const columns = [
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
          <span className={statusColors[status] || "text-gray-500 "}>
            {status}
          </span>
        );
      },
    },
  ];
  