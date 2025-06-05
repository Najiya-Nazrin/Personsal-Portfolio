// import React, { useState, useEffect } from 'react';
// import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';

// const Header: React.FC = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header 
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <h1 className="text-2xl font-bold text-purple-700">MADE YOUR DAY</h1>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex space-x-8">
//             <a href="#" className="text-gray-700 hover:text-purple-700 transition-colors font-medium">Home</a>
//             <a href="#" className="text-gray-700 hover:text-purple-700 transition-colors font-medium">Categories</a>
//             <a href="#" className="text-gray-700 hover:text-purple-700 transition-colors font-medium">Occasions</a>
//             <a href="#" className="text-gray-700 hover:text-purple-700 transition-colors font-medium">Bestsellers</a>
//             <a href="#" className="text-gray-700 hover:text-purple-700 transition-colors font-medium">New Arrivals</a>
//           </nav>

//           {/* Desktop Right Icons */}
//           <div className="hidden md:flex items-center space-x-6">
//             <button className="text-gray-700 hover:text-purple-700 transition-colors">
//               <Search size={20} />
//             </button>
//             <button className="text-gray-700 hover:text-purple-700 transition-colors">
//               <User size={20} />
//             </button>
//             <button className="text-gray-700 hover:text-purple-700 transition-colors relative">
//               <ShoppingBag size={20} />
//               <span className="absolute -top-1 -right-1 bg-purple-700 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
//                 2
//               </span>
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button 
//             className="md:hidden text-gray-700 hover:text-purple-700 transition-colors"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 border-t border-gray-100">
//           <div className="container mx-auto px-4 py-3">
//             <nav className="flex flex-col space-y-3">
//               <a href="#" className="text-gray-700 hover:text-purple-700 transition-colors py-2 font-medium">Home</a>
//               <a href="#" className="text-gray-700 hover:text-purple-700 transition-colors py-2 font-medium">Categories</a>
//               <a href="#" className="text-gray-700 hover:text-purple-700 transition-colors py-2 font-medium">Occasions</a>
//               <a href="#" className="text-gray-700 hover:text-purple-700 transition-colors py-2 font-medium">Bestsellers</a>
//               <a href="#" className="text-gray-700 hover:text-purple-700 transition-colors py-2 font-medium">New Arrivals</a>
//             </nav>
//             <div className="flex items-center space-x-6 mt-4 pt-4 border-t border-gray-100">
//               <button className="text-gray-700 hover:text-purple-700 transition-colors">
//                 <Search size={20} />
//               </button>
//               <button className="text-gray-700 hover:text-purple-700 transition-colors">
//                 <User size={20} />
//               </button>
//               <button className="text-gray-700 hover:text-purple-700 transition-colors relative">
//                 <ShoppingBag size={20} />
//                 <span className="absolute -top-1 -right-1 bg-purple-700 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
//                   2
//                 </span>
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;