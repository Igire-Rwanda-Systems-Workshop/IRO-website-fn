"use client";

import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { HiOutlineSearch } from "react-icons/hi";
import RescheduleModal from "./rescheduleModal";

const appointmentData = [
    {
        applicantName: "Joe Don",
        jobTitle: "Software engineer",
        startTime: "9:00 am",
        endTime: "10:00 am",
        status: "Pending",
    },
    {
        applicantName: "James Noah",
        jobTitle: "Operation manager",
        startTime: "10:00 am",
        endTime: "11:00 am",
        status: "Confirmed",
    },
    {
        applicantName: "Anna Wintour",
        jobTitle: "IT Technician",
        startTime: "1:00 pm",
        endTime: "2:00 pm",
        status: "Confirmed",
    },
];

const applicantColumns = [
    { accessorKey: "applicantName", header: "Applicant Name" },
    { accessorKey: "jobTitle", header: "Job Title" },
    { accessorKey: "startTime", header: "Start Time" },
    { accessorKey: "endTime", header: "End Time" },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status = row.status;
            let statusClass = "text-yellow-500";
            if (status === "Confirmed") statusClass = "text-blue-500";
            return <div className={statusClass}>{status}</div>;
        },
    },
];

export default function Appointments() {
    const [categoryFilter, setCategoryFilter] = useState("");
    const [globalFilter, setGlobalFilter] = useState("");
    const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
    const [selectedAppointment, setSelectedAppointment] = useState(null);
    const router = useRouter();

    const toggleScheduleModal = () => {
        setIsScheduleModalOpen((prev) => !prev);
    };

    const filteredAppointmentData = appointmentData.filter((row) => {
        const nameMatch = row.applicantName.toLowerCase().includes(globalFilter.toLowerCase());
        const jobMatch = categoryFilter ? row.jobTitle === categoryFilter : true;
        return nameMatch && jobMatch;
    });

    const handleRowClick = (appointment) => {
        setSelectedAppointment(appointment);
        toggleScheduleModal();
    };

    return (
        <div className="w-full p-6">
            <div className="flex items-center justify-between mb-3">
                <h1 className="text-md font-semibold">All Appointments</h1>
                <div className="relative w-80 ml-4">
                    <HiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <Input
                        placeholder="Search by applicant names..."
                        className="pl-10"
                        value={globalFilter}
                        onChange={(e) => setGlobalFilter(e.target.value)}
                    />
                </div>
                <div>
                    <select
                        className="border border-3 px-3 py-2 text-sm rounded-md"
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                    >
                        <option value="">Filter By Job Title</option>
                        <option value="Software engineer">Software engineer</option>
                        <option value="Operation manager">Operation manager</option>
                        <option value="IT Technician">IT Technician</option>
                    </select>
                </div>
            </div>

            <h1 className="mt-8 text-md font-semibold">Applicant Records</h1>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            {applicantColumns.map((column) => (
                                <TableHead key={column.accessorKey}>{column.header}</TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredAppointmentData.length ? (
                            filteredAppointmentData.map((row, rowIndex) => (
                                <TableRow key={rowIndex} onClick={() => handleRowClick(row)} className="cursor-pointer">
                                    {applicantColumns.map((column) => (
                                        <TableCell key={column.accessorKey}>
                                            {column.cell ? column.cell({ row }) : row[column.accessorKey]}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={applicantColumns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            
            {/* Reschedule Modal for handling appointment rescheduling */}
            <RescheduleModal
                isOpen={isScheduleModalOpen}
                onClose={toggleScheduleModal}
                appointment={selectedAppointment}
            />
        </div>
    );
}
