import { columns } from "./columns";
import DataTable from "./data-table";  
import { HiOutlineSearch } from 'react-icons/hi';

async function getData() {
  // Simulating data fetching
  return [
    {
  id: "1",
  date: "24 Oct, 2015",
  product: "Table",
  quantity: 5,
  amountPerUnit: "25,000 RWF",
  totalAmount: "125,000 RWF",
  status: "Pending",
},
{
  id: "2",
  date: "24 Oct, 2015",
  product: "Chair",
  quantity: 5,
  amountPerUnit: "10,000 RWF",
  totalAmount: "100,000 RWF",
  status: "Pending",
},
{
  id: "3",
  date: "24 Oct, 2015",
  product: "Mark board",
  quantity: 2,
  amountPerUnit: "5,000 RWF",
  totalAmount: "10,000 RWF",
  status: "Pending",
},
{
  id: "4",
  date: "24 Oct, 2015",
  product: "Kettle",
  quantity: 2,
  amountPerUnit: "70,000 RWF",
  totalAmount: "140,000 RWF",
  status: "Approved",
},
{
  id: "5",
  date: "24 Oct, 2015",
  product: "Kettle",
  quantity: 2,
  amountPerUnit: "70,000 RWF",
  totalAmount: "140,000 RWF",
  status: "Denied",
},
  ];
}

export default async function DemoPage() {
  const data = await getData();  // Fetch data asynchronously in the Server Component

  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center justify-between mb-2">
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
        <div>
          <select className="border border-3 border-black px-4 py-5 rounded-md">
            <option>Filter By</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="denied">Denied</option>
          </select>
        </div>
      </div>

      <div className="flex text-xl py-[20px] flex-row justify-between">
        <div >Purchase Request</div>
        <div>Balance: <span className="text-orange-400">100,000,000</span> Rwf</div>
      </div>

      <div className=" flex flex-col gap-[24px]">
        <h3>Request</h3>
        {/* Pass data to DataTable */}
        <DataTable columns={columns} data={data}/>
      </div>

      <div className="mt-4">
        <span>Previous</span>
        <span>1 2</span>
        <span>Next</span>
      </div>
    </div>
  );
}

