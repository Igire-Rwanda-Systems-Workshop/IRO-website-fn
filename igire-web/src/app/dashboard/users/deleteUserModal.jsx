import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AiOutlineWarning } from "react-icons/ai";

const DeleteUserModal = ({ isOpen, onClose, onDelete, user }) => {

    const handleDeleteUser = () => {
        onDelete(user.id);
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-sm bg-white border-none p-6">
                <DialogHeader>
                    <DialogTitle className="text-center text-lg font-bold">Manage users</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col ">
                    <p>Are you sure you want to delete user </p>
                    <div className="flex items-start justify-start mt-4 text-red-500 bg-slate-100 py-2">
                        <AiOutlineWarning className="mr-2 text-[24px]" />
                        <p className='text-black flex flex-col items-start text-[18px]'>Warning: <span className='text-red-500 text-[12px]'>By deleting this user, you won't access them again.</span></p>
                    </div>
                </div>
                <DialogFooter className="flex justify-between mt-6">
                    <Button onClick={handleDeleteUser} className="bg-red-500 text-white px-8 py-2">Yes, delete</Button>
                    <Button onClick={onClose} className="bg-gray-300 text-gray-700 px-8 py-2">No, cancel</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default DeleteUserModal;
