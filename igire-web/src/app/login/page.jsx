// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     console.log('Email:', email, 'Password:', password);
//   };

//   return (
//     <div className="flex h-[1020px] w-[600px] bg-gray-100">
//       <div className="w-1/3 bg-[#0B3004] text-white flex flex-col justify-center items-center">
//         <Image
//           src="/logo.png"
//           alt="Igire Rwanda Organisation"
//           width={442}  
//           height={460}  
//           priority={true}  
//         />
//         <h1 className="text-[24px] font-bold mt-4">Igire Rwanda</h1>
//         <p className="text-[18px] mt-2">Organisation</p>
//       </div>

      
//       <div className="w-2/3 flex justify-center items-center">
//         <div className="bg-white p-10 rounded-lg shadow-md w-[700px] h-[700px]">
//           <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="email" className="block text-gray-700">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//                 placeholder="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="mb-6">
//               <label htmlFor="password" className="block text-gray-700">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//                 placeholder="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-green-500 text-white font-semibold py-2 rounded-md hover:bg-green-600"
//             >
//               SignIn
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
