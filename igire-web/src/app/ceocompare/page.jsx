 // pages/ceocompare.js
 import { HiOutlineSearch } from 'react-icons/hi';
import { Datatable } from './datatable';
import { columnsComparePurchaseOrder, columnsSimilarProducts } from './columns';
import { dataComparePurchaseOrder, dataSimilarProducts } from './data';

export default function Ceocompare() {
  return (
    <div className="container mx-auto py-10">
      {/* Search and Buttons */}
      <div className="flex justify-between items-center mb-14">
        <div className="flex items-center w-full max-w-lg">
          <div className="relative w-full">
          <HiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search here..."
              className="border bg-gray-100 pl-10 pr-4 rounded-md py-2 w-full"
            />
          </div>
          <button className="bg-green-500 rounded-md text-white px-4 py-2 ml-2">Search</button>
        </div>
        <button className=" text-black border border-2 border-black py-2 px-4 rounded-md">Inquire</button>
      </div>

      {/* First Table: Compare purchase order */}
      <div className="mb-10">
        <h3 className="text-xl mb-[24px]">Compare purchase order with stock</h3>
        <Datatable columns={columnsComparePurchaseOrder} data={dataComparePurchaseOrder} />
      </div>


      
      <div>
        <div>
           <div className="flex justify-end space-x-4 ">
             <button className="bg-green-500 text-white py-2 px-4 rounded-md">Approve</button>
             <button className="bg-red-500 text-white py-2 px-4 rounded-md">Deny</button>
           </div>
        </div>
        <div>
           <h3 className="text-xl mb-[24px]">Similar product in stocks</h3>
        </div>
        <Datatable columns={columnsSimilarProducts} data={dataSimilarProducts} />
      </div>

      <div className="flex items-center mt-4">
        <div>Previous</div>
        <div>1 2</div>
        <div>Next</div>
      </div>
    </div>
  );
}
