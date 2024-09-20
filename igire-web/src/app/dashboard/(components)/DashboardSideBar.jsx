'use client';
import clsx from 'clsx';
import { GoHome } from "react-icons/go";
import { HiOutlineUsers } from "react-icons/hi";
import { LiaTagsSolid } from "react-icons/lia";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { RiLogoutCircleLine } from "react-icons/ri";

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function DashboardSideBar() {
    const pathname = usePathname();

    return (
        <div className="desktop:block hidden border-r h-full">
            <div className="flex h-full max-h-screen flex-col gap-[10rem] py-[2rem]  text-white bg-[#0B3004]">
                <div className="flex h-[55px] items-center justify-between px-3 w-full">
                    <div className="flex items-center">
                        <Image
                            src="/logo.png"
                            alt="LOGO"
                            width={75}
                            height={75}
                            className="rounded-md"
                        />
                        <p className="font-bold flex flex-col items-center">
                            Igire Rwanda <span className="font-normal">Organization</span>
                        </p>
                    </div>
                </div>
                <div className="flex-1 overflow-auto py-2">
                    <nav className="grid items-start px-4 text-sm gap-[10rem] font-medium">
                        <div>
                            <Link
                                href="/dashboard"
                                className={clsx(
                                    "flex items-center gap-2 rounded-lg px-3 py-2 transition-all",
                                    pathname === '/dashboard' && "text-[#F79E1B]"
                                )}
                            >
                                <GoHome className="h-3 w-3" />
                                Home
                            </Link>
                            <Link
                                href="/dashboard/users"
                                className={clsx(
                                    "flex items-center gap-2 rounded-lg px-3 py-2 transition-all hover:text-[#F79E1B]",
                                    pathname === '/dashboard/users' && "text-[#F79E1B]"
                                )}
                            >
                                <HiOutlineUsers className="h-3 w-3" />
                                Manage Users
                            </Link>
                            <Link
                                href="/dashboard/transactions"
                                className={clsx(
                                    "flex items-center gap-2 rounded-lg px-3 py-2 transition-all hover:text-[#F79E1B]",
                                    pathname === '/dashboard/transactions' && "text-[#F79E1B]"
                                )}
                            >
                                <LiaTagsSolid className="h-3 w-3" />
                                Transactions
                            </Link>
                            <Link
                                href="/dashboard/transactions"
                                className={clsx(
                                    "flex items-center gap-2 rounded-lg px-3 py-2 transition-all hover:text-[#F79E1B]",
                                    pathname === '/dashboard/stock' && "text-[#F79E1B]"
                                )}
                            >
                                <HiOutlineArchiveBox className="h-3 w-3" />
                                Stock
                            </Link>
                        </div>
                        <div>
                            <Link
                                href="/dashboard/transactions"
                                className={clsx(
                                    "flex items-center gap-2 rounded-lg px-3 py-2transition-all hover:text-[#F79E1B]",
                                    pathname === '/dashboard/transactions' && "text-[#F79E1B]"
                                )}
                            >
                                <RiLogoutCircleLine className="h-3 w-3" />
                                Logout
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}
