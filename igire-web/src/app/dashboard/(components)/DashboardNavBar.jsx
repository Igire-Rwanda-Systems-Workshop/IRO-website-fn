import React from 'react'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { Dialog, DialogClose } from '@/components/ui/dialog'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Banknote, Folder, HomeIcon, Settings } from 'lucide-react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet";

import { GoHome } from "react-icons/go";
import { HiOutlineUsers } from "react-icons/hi";
import { LiaTagsSolid } from "react-icons/lia";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { RiLogoutCircleLine } from "react-icons/ri";
import Image from 'next/image'

export default function DashboardNavBar({ children }) {
    return (
        <div className="flex flex-col">
            <header className="flex h-14 desktop:h-[55px] items-center gap-4 bg-slate-100 px-6">
                <Dialog>
                    <SheetTrigger className="min-[1024px]:hidden p-2 transition">
                        <HamburgerMenuIcon />
                    </SheetTrigger>
                    <SheetContent side="left">
                        <SheetHeader>
                            <Link href="/">
                                <SheetTitle></SheetTitle>
                            </Link>
                        </SheetHeader>
                        <div className="flex-col items-startspace-y-3 mt-[50px] bg-white">
                            <DialogClose asChild>
                                <Link href="/dashboard">
                                    <Button variant="outline" className="w-full flex justify-start pl-4 gap-3">
                                        <GoHome className="h-3 w-3" />
                                        Home
                                    </Button>
                                </Link>
                            </DialogClose>
                            <DialogClose asChild>
                                <Link href="/dashboard/users">
                                    <Button variant="outline" className="w-full flex justify-start pl-4 gap-3">
                                        <HiOutlineUsers className="h-3 w-3" />
                                        Manage Users
                                    </Button>
                                </Link>
                            </DialogClose>
                            <DialogClose asChild>
                                <Link href="/dashboard/transaction">
                                    <Button variant="outline" className="w-full flex justify-start pl-4 gap-3">
                                        <LiaTagsSolid className="h-3 w-3" />
                                        Transactions
                                    </Button>
                                </Link>
                            </DialogClose>
                            <DialogClose asChild>
                                <Link href="/dashboard/stock">
                                    <Button variant="outline" className="w-full flex justify-start pl-4 gap-3">
                                        <HiOutlineArchiveBox className="h-3 w-3" />
                                        Stock
                                    </Button>
                                </Link>
                            </DialogClose>
                            <DialogClose asChild>
                                <Link href="/dashboard/logout">
                                    <Button variant="outline" className="w-full flex justify-start pl-4 gap-3">
                                        <RiLogoutCircleLine className="h-3 w-3" />
                                        Logout
                                    </Button>
                                </Link>
                            </DialogClose>
                        </div>
                    </SheetContent>
                </Dialog>
                <div className="flex-1">
                    <Link href="/dashboard" className="flex items-center">
                        <span className="text-lg font-semibold">Dashboard</span>
                        <span><img src="/userAvatar.png" alt="User Avatar" className="w-12 h-12 rounded-full mb-2" /></span>
                    </Link>
                </div>
                <nav className="hidden laptop:flex items-center gap-4">
                    <Link href="/dashboard">
                        <Button variant="ghost">Home</Button>
                    </Link>
                    <Link href="/dashboard/users">
                        <Button variant="ghost">Manage Users</Button>
                    </Link>
                    <Link href="/dashboard/transaction">
                        <Button variant="ghost">Transaction</Button>
                    </Link>
                    <Link href="/dashboard/stock">
                        <Button variant="ghost">Stock</Button>
                    </Link>
                    <Link href="/dashboard/logout">
                        <Button variant="ghost">Logout</Button>
                    </Link>
                </nav>
            </header>
            <main>{children}</main>
        </div>
    )
}