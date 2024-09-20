'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { IoIosAddCircleOutline } from "react-icons/io";
import { TbPencil } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import AddUserModal from './addUserMoal';
import EditUserModal from './editUserModal';
import DeleteUserModal from './deleteUserModal';

const UserCard = ({ name, email, jobTitle, onEdit, onDelete }) => {
  return (
    <Card className="w-full sm:w-[calc(33.333%-0.75rem)] shadow-sm relative">
      <div className="absolute top-2 right-2 flex flex-col space-y-2">
        <TbPencil className="text-[#0FA958] cursor-pointer" onClick={onEdit} />
        <RiDeleteBin6Line className="text-[#FF0202] cursor-pointer" onClick={onDelete} />
      </div>
      <CardContent className="flex items-center justify-center">
        <div className="flex flex-col items-center pt-6 gap-4">
          <img src="/userAvatar.png" alt="User Avatar" className="w-12 h-12 rounded-full mb-2" />
          <div className="text-center">
            <CardTitle className="text-lg font-semibold">{name}</CardTitle>
            <p className="text-sm text-muted-foreground">{email}</p>
            <p className="text-sm text-muted-foreground">{jobTitle}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ManageUsers = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  return (
    <>
      <div className='p-8'>
        <div>
          <div>
            <p className='text-[18px] font-bold items-center flex justify-between'>
              Manage User
              <span 
                className='flex gap-3 items-center bg-[#EAEAEA] py-1 px-2 rounded-lg cursor-pointer'
                onClick={() => setIsAddModalOpen(true)}
              >
                add user
                <IoIosAddCircleOutline className='text-[#0FA958]' />
              </span>
            </p>
          </div>
        </div>

        <div className="flex gap-[2rem] w-full pt-[2.7rem]">
          <UserCard 
            name="Hirwa J. Eric" 
            email="useremail@gmail.com" 
            jobTitle="Operation Manager" 
            onEdit={() => setIsEditModalOpen(true)} 
            onDelete={() => setIsDeleteModalOpen(true)} 
          />
          <UserCard 
            name="Hirwa J. Eric" 
            email="useremail@gmail.com" 
            jobTitle="Operation Manager" 
            onEdit={() => setIsEditModalOpen(true)} 
            onDelete={() => setIsDeleteModalOpen(true)} 
          />
          <UserCard 
            name="Hirwa J. Eric" 
            email="useremail@gmail.com" 
            jobTitle="Operation Manager" 
            onEdit={() => setIsEditModalOpen(true)} 
            onDelete={() => setIsDeleteModalOpen(true)} 
          />
        </div>
      </div>

      <AddUserModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
      <EditUserModal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} />
      <DeleteUserModal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} />
    </>
  );
};

export default ManageUsers;
