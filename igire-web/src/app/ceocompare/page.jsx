 // pages/ceocompare.js

import { Datatable } from './datatable';
import { columnsComparePurchaseOrder, columnsSimilarProducts } from './columns';
import { dataComparePurchaseOrder, dataSimilarProducts } from './data';

export default function Ceocompare() {
  return (
    <div className="container mx-auto py-10">
      {/* Search and Buttons */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search here..."
            className="border rounded-md py-2 px-4"
          />
          <button className="bg-green-500 text-white py-2 px-4 rounded-md">Search</button>
        </div>
        <button className="bg-gray-100 text-black border py-2 px-4 rounded-md">Inquire</button>
      </div>

      {/* First Table: Compare purchase order */}
      <div className="mb-10">
        <h2 className="text-lg font-semibold mb-4">Compare purchase order with stock</h2>
        <Datatable columns={columnsComparePurchaseOrder} data={dataComparePurchaseOrder} />
      </div>

      {/* Approval buttons */}
      <div className="flex justify-end space-x-4 mb-10">
        <button className="bg-green-500 text-white py-2 px-4 rounded-md">Approve</button>
        <button className="bg-red-500 text-white py-2 px-4 rounded-md">Deny</button>
      </div>

      {/* Second Table: Similar products */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Similar product in stocks</h2>
        <Datatable columns={columnsSimilarProducts} data={dataSimilarProducts} />
      </div>

      <div className="flex justify-between items-center mt-4">
        <div>Previous</div>
        <div>1 2</div>
        <div>Next</div>
      </div>
    </div>
  );
}
