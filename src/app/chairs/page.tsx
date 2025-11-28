// "use client"

// import Image from "next/image";
// import Link from "next/link";

// import { FaTruckFast } from "react-icons/fa6";
// import { LuCircleUser } from "react-icons/lu";
// import { IoCartOutline } from "react-icons/io5";
// import React from "react";
// import { useEffect, useState } from "react";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import { CheckCircle, Truck, Tag, RefreshCcw } from "lucide-react";
// import { FaRegCheckCircle } from "react-icons/fa";
// import { IoIosSearch } from "react-icons/io";
// export default function Chairs(){
//    const [products, setProducts] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const query = `*[_type == "product"]{
//         name,
//         price,
//         image,
//         slug
//       }`;
//       const result = await client.fetch(query);
//       setProducts(result);
//     };
//     fetchProducts();
//   }, []);

//     const [amount, setAmount] = useState(1);

//     const incrementAmount = () => setAmount((prev) => prev + 1);
//     const decrementAmount = () =>
//       setAmount((prev) => (prev > 1 ? prev - 1 : 1));
  
//     const handleAddToCart = () => {
//       alert(`Added ${amount} item(s) to the cart!`);
//     };

//     const features = [
//         {
//           icon: <Truck className="text-gray-900 w-8 h-8" />,
//           title: "Next day as standard",
//           description: "Order before 3pm and get your order the next day as standard",
//         },
//         {
//           icon: <CheckCircle className="text-gray-900 w-8 h-8" />,
//           title: "Made by true artisans",
//           description: "Handmade crafted goods made with real passion and craftsmanship",
//         },
//         {
//           icon: <Tag className="text-gray-900 w-8 h-8" />,
//           title: "Unbeatable prices",
//           description: "For our materials and quality, you won't find better prices anywhere",
//         },
//         {
//           icon: <RefreshCcw className="text-gray-900 w-8 h-8" />,
//           title: "Recycled packaging",
//           description: "We use 100% recycled materials to ensure our footprint is more manageable",
//         },
//       ];

//     const product = [
//         {
//           image: "/Parent.png",
//           name: "The Dandy Chair",
//           price: "Rs230",
//         },
//         {
//           image: "/Parent (1).png",
//           name: "Rustic Vase Set",
//           price: "Rs155",
//         },
//         {
//           image: "/Parent (2).png",
//           name: "The Silky Vase",
//           price: "Rs125",
//         },
//         {
//           image: "/Parent (3).png",
//           name: "The Lucy Lamp",
//           price: "Rs399",
//         },
//       ];

//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     return(
//             <div>

//               <div className="bg-indigo-900 text-white flex items-center justify-between px-4 py-2 relative">
//                 <div className="flex items-center mx-auto">
//                   <FaTruckFast className="w-6 h-6 mr-2" />
//                   <p className="text-sm font-medium">Free Delivery on Orders Over $50</p>
//                 </div>

//                 <button
//                   className="absolute right-4 text-white text-lg font-bold"
//                   onClick={() => (window.location.href = "/")}
//                 >
//                   &times;
//                 </button>
//               </div>

//               <nav className="bg-gray-50 h-20">
//                 <div className="flex items-center justify-between h-full px-6">

//                   <div className="text-xl font-semibold text-gray-900">
//                     <Link href="/" className="hover:text-gray-900">
//                       Avion
//                     </Link>
//                   </div>

//                   <button
//                     className="block md:hidden text-xl text-gray-900"
//                     onClick={() => setIsMenuOpen(!isMenuOpen)}
//                   >
//                     &#9776;
//                   </button>

//                   <nav className="bg-gray-50">
//                     <ul className="flex flex-wrap justify-center space-x-4 py-3 text-sm font-medium text-gray-700 md:space-x-6">
//                       <li>
//                         <Link href="/components/product-listing" className="hover:text-gray-900">
//                           All Products
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/plant-pots" className="hover:text-gray-900">
//                           Plant Pots
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/ceramics" className="hover:text-gray-900">
//                           Ceramics
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/components/tableware" className="hover:text-gray-900">
//                           Tables
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/components/chairs" className="hover:text-gray-900">
//                           Chairs
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/components/crockery" className="hover:text-gray-900">
//                           Crockery
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/components/tableware" className="hover:text-gray-900">
//                           Tableware
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/components/cutlery" className="hover:text-gray-900">
//                           Cutlery
//                         </Link>
//                       </li>
//                     </ul>
//                   </nav>

//                   <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
//                     <IoIosSearch className="w-5 h-5 cursor-pointer" />
//                     <Link href="/components/shopping-basket">
//                       <IoCartOutline className="w-5 h-5 cursor-pointer" />
//                     </Link>
//                     <Link href="/components/about">
//                       <LuCircleUser className="w-5 h-5 cursor-pointer" />
//                     </Link>
//                   </div>
//                 </div>
//               </nav>

//               <div className="flex flex-wrap relative">
//   <div className="w-full lg:w-[721px] h-auto lg:h-[759px]">
//     <img
//       src="/Image Left.png"
//       alt="The Dandy Chair"
//       className="w-full h-full object-cover"
//     />
//   </div>

//   <div
//     className="w-full lg:w-[602px] h-auto lg:h-[657px] lg:absolute lg:left-[783px] lg:top-[51px] p-4"
//   >
//     <h2 className="text-2xl font-bold mb-2">The Dandy Chair</h2>
//     <p className="text-xl text-gray-900 mb-4">Rs250</p>
//     <p className="text-base text-gray-700 mb-6">
//       A timeless design, with premium materials features as one of our most<br /> popular and iconic pieces.
//       The Dandy Chair is perfect for any stylish<br /> living space with beech legs and lambskin leather upholstery.
//     </p>

//     <div className="space-y-2">
//       <p>● Premium material</p>
//       <p>● Handmade upholstery</p>
//       <p>● Quality timeless classic</p>
//     </div>

//     <br /><br />
//     <h3 className="font-semibold text-lg mb-4">Dimensions</h3>

//     <div
//       className="mt-6 w-full max-w-[300px] flex flex-wrap items-center justify-between text-gray-700 text-sm"
//     >
//       <div className="w-1/3 text-center">
//         <p className="font-medium">Height</p>
//         <p>110cm</p>
//       </div>
//       <div className="w-1/3 text-center">
//         <p className="font-medium">Width</p>
//         <p>75cm</p>
//       </div>
//       <div className="w-1/3 text-center">
//         <p className="font-medium">Depth</p>
//         <p>50cm</p>
//       </div>
//     </div>

//     <div className="mt-6 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">

//       <div className="flex items-center space-x-2">
//         <span className="font-medium">Amount:</span>
//         <div className="flex items-center border border-gray-300 rounded">
//           <button
//             onClick={decrementAmount}
//             className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300"
//           >
//             -
//           </button>
//           <input
//             type="text"
//             value={amount}
//             readOnly
//             className="w-12 h-8 text-center border-l border-r border-gray-300"
//           />
//           <button
//             onClick={incrementAmount}
//             className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300"
//           >
//             +
//           </button>
//         </div>
//       </div>

//       <button
//         onClick={handleAddToCart}
//         className="w-full sm:w-auto px-20 max-w-[241px] h-[51px] bg-indigo-900 text-white font-medium rounded hover:bg-indigo-700"
//       >
//         Add to cart
//       </button>
//     </div>
//   </div>
// </div>

// <div  
//   style={{
//     width: "100%",
//     fontStyle:"bold",
//     marginLeft:"20px",
//     color: "#888888", 
//     fontSize:"30px",
//     fontFamily:"Poppin",
//     marginTop:"30px",
//     marginBottom:"-50px",
//   }}
// >
//   You might also like 
// </div>

// <section className="py-16 px-6 bg-gray-50">
//       <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
//         Our Collection
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
//         {products.map((product, index) => (
//           <Link
//             key={index}
//             href={{
//               pathname: "/product-details",
//               query: {
//                 name: product.name,
//                 price: product.price,
//                 image: urlFor(product.image).url(),
//               },
//             }}
//             className="cursor-pointer transform hover:scale-105 transition-all duration-300"
//           >
//             <div className="bg-white shadow-md rounded-lg overflow-hidden w-[305px] h-[375px]">
//               <Image
//                 src={urlFor(product.image).url()}
//                 alt={product.name}
//                 width={305}
//                 height={375}
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             <div className="mt-4 flex flex-col items-start">
//               <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
//               <p className="text-sm text-gray-600">{product.price}</p>
//             </div>
//           </Link>
//         ))}
//       </div>

//       <div className="flex justify-center mt-8">
//         <button
//           className="bg-[#F8F8F8] text-black text-sm font-medium px-6 py-3 rounded-md shadow-md hover:bg-gray-200 hover:scale-105 transition-all duration-300"
//           style={{ width: "170px", height: "56px" }}
//         >
//           View Collection
//         </button>
//       </div>
//     </section>


// <section className="py-16 px-6 bg-white">
//       <h2 className="text-2xl lg:text-3xl font-bold text-center mb-12 text-gray-900">
//         What makes our brand different
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//         {features.map((feature, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition"
//           >
//             <div className="mb-4">{feature.icon}</div>
//             <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
//             <p className="text-sm text-gray-600">{feature.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>


// <div
//   style={{
//     width: "100%",
//     height: "481px",
//     backgroundColor: "#F8F8F8",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   }}
// >
//   <div
//     style={{
//       width: "1273px",
//       height: "364px",
//       backgroundColor: "white",
//       position: "relative",
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       alignItems: "flex-start",
//       padding: "0 20px",
//     }}
//   >

//     <div className="absolute top-24 left-1/2 transform -translate-x-1/2 text-center text-black px-6">
//       <h2 className="text-3xl font-bold mb-4">Join the club and get the benefits</h2>
//       <p className="text-lg">
//         Sign up for our newsletter and receive exclusive offers on
//       </p>
//       <p className="text-lg ml-12 sm:ml-0">
//         new ranges, sales, pop-up stores, and more
//       </p>
//     </div>

// <div className="a"
//   style={{
//     position: "absolute",
//     left: "50%",
//     top: "254px",
//     transform: "translateX(-50%)",
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//     gap: "8px",
//   }}
// >
//   <input
//     type="email"
//     placeholder="Enter your email"
//     style={{
//       width: "472px",
//       height: "56px",
//       backgroundColor: "white",
//       border: "1px solid #ccc",
//       borderRadius: "4px 0 0 4px",
//       padding: "0 16px",
//       fontSize: "16px",
//       outline: "none",
//     }}
//   />

//   <button
//     style={{
//       width: "120px",
//       height: "56px",
//       backgroundColor: "#483D8B",
//       color: "white",
//       border: "none",
//       borderRadius: "0 4px 4px 0",
//       fontSize: "16px",
//       fontWeight: "bold",
//       cursor: "pointer",
//       transition: "background-color 0.3s ease",
//     }}
//   >
//     Sign Up
//   </button>

//   <style>
//     {`
//       @media (max-width: 768px) {
//         a {
//           flex-direction: column;
//           left: 50%;
//           top: 200px;
//           transform: translateX(-50%);
//         }
//         input {
//           width: 100%;
//           border-radius: 4px;
//         }
//         button {
//           width: 100%;
//           border-radius: 4px;
//           margin-top: 8px;
//         }
//       }
//     `}
//   </style>
// </div>
//   </div>
// </div>



// <footer className="bg-indigo-950 text-white py-8">
//   <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">

//     <div>
//       <h3 className="font-bold text-lg">Avion</h3>
//       <address className="not-italic mt-4 text-sm">
//         21 New York Street <br />
//         New York City <br />
//         United States of America <br />
//         432 34
//       </address>
//       <p className="text-sm mt-4">&copy; 2022 Avion LTD</p>
//     </div>

//     <div className="space-y-4">
//       <h6 className="text-sm text-white font-medium">SOCIAL MEDIA</h6>
//       <ul className="flex space-x-4">
//         <li>
//           <Link href="javascript:void(0)">
//             <svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-600 w-8 h-8" viewBox="0 0 49.652 49.652">
//               <path d="M24.826 0C11.137..." data-original="#000000" />
//             </svg>
//           </Link>
//         </li>

//         <li>
//           <Link href="javascript:void(0)">
//             <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 112.196 112.196">
//               <circle cx="56.098" cy="56.097" r="56.098" fill="#007ab9" />
//               <path fill="#fff" d="M89.616 60.611v23.128H76.207..." />
//             </svg>
//           </Link>
//         </li>

//         <li>
//           <Link href="javascript:void(0)">
//             <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 152 152">
//               <rect width="152" height="152" rx="76" fill="url(#a)" />
//               <g fill="#fff">
//                 <path fill="#ffffff10" d="M133.2 26c-11.08..." />
//                 <path d="M94 36H58a22..." />
//               </g>
//             </svg>
//           </Link>
//         </li>

//         <li>
//           <Link href="javascript:void(0)">
//             <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 1227 1227">
//               <path d="M613.5 0C274.685..." />
//               <path fill="#fff" d="m680.617 557.98 262.632..." />
//             </svg>
//           </Link>
//         </li>
//       </ul>

//       <div className="!mt-8">
//         <h6 className="text-[13px] text-gray-400 font-medium">Get exclusive assets sent straight to your inbox</h6>
//         <div className="mt-4">
//           <Link href="javascript:void(0)" className="bg-indigo-900 hover:bg-blue-700 text-sm text-white font-medium py-3 px-6 tracking-wide rounded">
//             Sign up
//           </Link>
//         </div>
//       </div>
//     </div>

//     <div className="md:col-span-3 text-right">
//       <div className="flex justify-end space-x-8">

//         <div>
//           <h3 className="font-bold text-lg">Menu</h3>
//           <ul className="mt-4 space-y-2 text-sm">
//             <li><Link href="#" className="hover:text-gray-400">New arrivals</Link></li>
//             <li><Link href="#" className="hover:text-gray-400">Best sellers</Link></li>
//             <li><Link href="#" className="hover:text-gray-400">Recently viewed</Link></li>
//             <li><Link href="#" className="hover:text-gray-400">Popular this week</Link></li>
//             <li><Link href="/product-listing" className="hover:text-gray-400">All Products</Link></li>
//           </ul>
//         </div>

//         <div>
//           <h3 className="font-bold text-lg">Categories</h3>
//           <ul className="mt-4 space-y-2 text-sm">
//             <li><Link href="/crockery" className="hover:text-gray-400">Crockery</Link></li>
//             <li><Link href="/chairs" className="hover:text-gray-400">Furniture</Link></li>
//             <li><Link href="/chairs" className="hover:text-gray-400">Homeware</Link></li>
//             <li><Link href="/chairs" className="hover:text-gray-400">Plant pots</Link></li>
//             <li><Link href="/chairs" className="hover:text-gray-400">Chairs</Link></li>
//           </ul>
//         </div>

//         <div>
//           <h3 className="font-bold text-lg">Our Company</h3>
//           <ul className="mt-4 space-y-2 text-sm">
//             <li><Link href="/components/about" className="hover:text-gray-400">About us</Link></li>
//             <li><Link href="#" className="hover:text-gray-400">Vacancies</Link></li>
//             <li><Link href="#" className="hover:text-gray-400">Contact us</Link></li>
//             <li><Link href="#" className="hover:text-gray-400">Privacy</Link></li>
//             <li><Link href="#" className="hover:text-gray-400">Returns policy</Link></li>
//           </ul>
//         </div>

//       </div>
//     </div>

//     <hr className="my-6 border-gray-600" />

//     <div className="max-w-screen-xl mx-auto text-center">
//       <p className="text-gray-400 text-[13px]">Copyright 2022 Avion LTD</p>
//     </div>

//   </div>
// </footer>
// </div>

//     );
// }
"use client"

import Image from "next/image";
import Link from "next/link";
import { FaTruckFast } from "react-icons/fa6";
import { LuCircleUser } from "react-icons/lu";
import { IoCartOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { CheckCircle, Truck, Tag, RefreshCcw } from "lucide-react";
import { FaRegCheckCircle } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { client } from "../../../sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";
import { addToCart } from "../../../sanity/lib/cart";

// NEW IMPORT — ONLY THIS IS ADDED
import Swal from 'sweetalert2';

export default function Chair() {
  const [products, setProducts] = useState<any[]>([]);
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"]{
        name,
        price,
        image,
        slug
      }`;
      const result = await client.fetch(query);
      setProducts(result);
    };
    fetchProducts();
  }, []);

  const incrementAmount = () => setAmount(prev => prev + 1);
  const decrementAmount = () => setAmount(prev => (prev > 1 ? prev - 1 : 1));

  // UPDATED: Beautiful SweetAlert2 instead of alert()
  const handleAddToCart = () => {
    const productToAdd = {
      _id: "dandy-chair-001",
      title: "The Dandy Chair",
      price: 250,
      image: "/Image Left.png",
    };

    // Add the selected quantity
    for (let i = 0; i < amount; i++) {
      addToCart(productToAdd);
    }

    // BEAUTIFUL SWEETALERT2 POPUP
    Swal.fire({
      icon: 'success',
      title: 'Added to Cart!',
      html: `
        <div style="text-align: left; font-size: 16px; margin-top: 12px; line-height: 1.6;">
          <strong style="font-size: 18px;">${amount} × The Dandy Chair</strong><br/>
          <span style="color: #666;">Successfully added to your cart</span>
        </div>
      `,
      confirmButtonText: 'Continue Shopping',
      cancelButtonText: 'View Cart',
      showCancelButton: true,
      buttonsStyling: false,
      customClass: {
        popup: 'rounded-lg shadow-2xl',
        confirmButton: 'px-8 py-3 bg-indigo-900 text-white font-medium rounded-md hover:bg-indigo-800 transition mx-2',
        cancelButton: 'px-8 py-3 bg-gray-200 text-gray-800 font-medium rounded-md hover:bg-gray-300 transition mx-2',
      },
      width: '400px',
    }).then((result) => {
      if (result.isDismissed) {
        window.location.href = "/cart";
      }
    });

    setAmount(1);
  };

  const features = [
    { icon: <Truck className="text-gray-900 w-8 h-8" />, title: "Next day as standard", description: "Order before 3pm and get your order the next day as standard" },
    { icon: <CheckCircle className="text-gray-900 w-8 h-8" />, title: "Made by true artisans", description: "Handmade crafted goods made with real passion and craftsmanship" },
    { icon: <Tag className="text-gray-900 w-8 h-8" />, title: "Unbeatable prices", description: "For our materials and quality, you won't find better prices anywhere" },
    { icon: <RefreshCcw className="text-gray-900 w-8 h-8" />, title: "Recycled packaging", description: "We use 100% recycled materials to ensure our footprint is more manageable" },
  ];

  return (
    <div>
      {/* Top Bar */}
      <div className="bg-indigo-900 text-white flex items-center justify-between px-4 py-2 relative">
        <div className="flex items-center mx-auto">
          <FaTruckFast className="w-6 h-6 mr-2" />
          <p className="text-sm font-medium">Free Delivery on Orders Over $50</p>
        </div>
        <button className="absolute right-4 text-white text-lg font-bold" onClick={() => window.location.href = "/"}>
          ×
        </button>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-50 h-20">
        <div className="flex items-center justify-between h-full px-6">
          <div className="text-xl font-semibold text-gray-900">
            <Link href="/" className="hover:text-gray-900">Avion</Link>
          </div>
          <button className="block md:hidden text-xl text-gray-900">Menu</button>

          <nav className="bg-gray-50">
            <ul className="flex flex-wrap justify-center space-x-4 py-3 text-sm font-medium text-gray-700 md:space-x-6">
              <li><Link href="/components/product-listing" className="hover:text-gray-900">All Products</Link></li>
              <li><Link href="/plant-pots" className="hover:text-gray-900">Plant Pots</Link></li>
              <li><Link href="/ceramics" className="hover:text-gray-900">Ceramics</Link></li>
              <li><Link href="/components/tableware" className="hover:text-gray-900">Tables</Link></li>
              <li><Link href="/components/chairs" className="hover:text-gray-900">Chairs</Link></li>
              <li><Link href="/components/crockery" className="hover:text-gray-900">Crockery</Link></li>
              <li><Link href="/components/tableware" className="hover:text-gray-900">Tableware</Link></li>
              <li><Link href="/components/cutlery" className="hover:text-gray-900">Cutlery</Link></li>
            </ul>
          </nav>

          <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
            <IoIosSearch className="w-5 h-5 cursor-pointer" />
            <Link href="/cart"><IoCartOutline className="w-5 h-5 cursor-pointer" /></Link>
            <Link href="/components/about"><LuCircleUser className="w-5 h-5 cursor-pointer" /></Link>
          </div>
        </div>
      </nav>

      {/* Product Detail */}
      <div className="flex flex-wrap relative">
        <div className="w-full lg:w-[721px] h-auto lg:h-[759px]">
          <Image
            src="/Image Left.png"
            alt="The Dandy Chair"
            width={721}
            height={759}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full lg:w-[602px] h-auto lg:h-[657px] lg:absolute lg:left-[783px] lg:top-[51px] p-8 bg-white">
          <h2 className="text-2xl font-bold mb-2">The Dandy Chair</h2>
          <p className="text-xl text-gray-900 mb-4">Rs250</p>
          <p className="text-base text-gray-700 mb-6">
            A timeless design, with premium materials features as one of our most<br /> popular and iconic pieces.
            The Dandy Chair is perfect for any stylish<br /> living space with beech legs and lambskin leather upholstery.
          </p>

          <div className="space-y-2 mb-8">
            <p>Premium material</p>
            <p>Handmade upholstery</p>
            <p>Quality timeless classic</p>
          </div>

          <h3 className="font-semibold text-lg mb-4">Dimensions</h3>
          <div className="flex justify-between max-w-xs text-sm text-gray-700 mb-8">
            <div className="text-center"><p className="font-medium">Height</p><p>110cm</p></div>
            <div className="text-center"><p className="font-medium">Width</p><p>75cm</p></div>
            <div className="text-center"><p className="font-medium">Depth</p><p>50cm</p></div>
          </div>

          {/* QUANTITY + ADD TO CART */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center space-x-2">
              <span className="font-medium">Amount:</span>
              <div className="flex items-center border border-gray-300 rounded">
                <button onClick={decrementAmount} className="w-10 h-10 hover:bg-gray-100">-</button>
                <input type="text" value={amount} readOnly className="w-16 text-center border-x" />
                <button onClick={incrementAmount} className="w-10 h-10 hover:bg-gray-100">+</button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full sm:w-auto px-20 max-w-[241px] h-[51px] bg-indigo-900 text-white font-medium rounded hover:bg-indigo-700 transition"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>

      {/* You might also like */}
      <div style={{ margin: "60px 20px 0", fontSize: "30px", color: "#888888", fontWeight: "bold" }}>
        You might also like
      </div>

      {/* Related Products */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
          {products.map((product, index) => (
            <Link key={index} href={`/product-details?name=${product.name}&price=${product.price}&image=${urlFor(product.image).url()}`} className="group">
              <div className="bg-white shadow-md rounded-lg overflow-hidden w-[305px] h-[375px]">
                <Image src={urlFor(product.image).url()} alt={product.name} width={305} height={375} className="w-full h-full object-cover group-hover:scale-105 transition" />
              </div>
              <div className="mt-4 text-left">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <p className="text-sm text-gray-600">Rs{product.price}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button className="bg-[#F8F8F8] text-black text-sm font-medium px-6 py-3 rounded-md shadow-md hover:bg-gray-200" style={{ width: "170px", height: "56px" }}>
            View Collection
          </button>
        </div>
      </section>

      {/* Features & Newsletter & Footer */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-2xl lg:text-3xl font-bold text-center mb-12 text-gray-900">What makes our brand different</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <div style={{ height: "481px", backgroundColor: "#F8F8F8", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ width: "1273px", height: "364px", backgroundColor: "white", position: "relative", padding: "40px" }}>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Join the club and get the benefits</h2>
            <p className="text-lg">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more</p>
          </div>
          <div style={{ position: "absolute", left: "50%", top: "254px", transform: "translateX(-50%)", display: "flex", gap: "0" }}>
            <input type="email" placeholder="Enter your email" style={{ width: "472px", height: "56px", padding: "0 16px", border: "1px solid #ccc", borderRadius: "4px 0 0 4px" }} />
            <button style={{ width: "120px", height: "56px", backgroundColor: "#483D8B", color: "white", border: "none", borderRadius: "0 4px 4px 0", fontWeight: "bold" }}>Sign Up</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-indigo-950 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Avion LTD</p>
        </div>
      </footer>
    </div>
  );
}