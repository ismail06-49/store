'use client';

import { useEffect, useState } from 'react';
import item10 from '@/public/item11.png';
import item20 from '@/public/item12.png';
import item30 from '@/public/item13.png';
import item40 from '@/public/item14.png';
import Image from 'next/image';
import { Eye, Heart } from 'lucide-react';

// Array of product items to display in the products section
const itemsData = [
    { id: 1, img: item10, name: "Kids Electric Car", price: "$260", oldPrice:'$360', stars: 5, numberOfComments: '65', tag: 'new' },
    { id: 2, img: item20, name: "Jr. Zoom Soccer Cleats", price: "$960", oldPrice:'$1160', stars: 4, numberOfComments: '65' },
    { id: 3, img: item30, name: "GP11 Shooter USB Gamepad", price: "$160", oldPrice:'$170', stars: 4, numberOfComments: '65', tag: 'new' },
    { id: 4, img: item40, name: "Quilted Satin Jacket", price: "$360", oldPrice:'$400', stars: 5, numberOfComments: '65' },
    { id: 5, img: item10, name: "Kids Electric Car", price: "$260", oldPrice:'$360', stars: 5, numberOfComments: '65', tag: 'new' },
    { id: 6, img: item20, name: "Jr. Zoom Soccer Cleats", price: "$960", oldPrice:'$1160', stars: 4, numberOfComments: '65' },
    { id: 7, img: item30, name: "GP11 Shooter USB Gamepad", price: "$160", oldPrice:'$170', stars: 4, numberOfComments: '65', tag: 'new' },
    { id: 8, img: item40, name: "Quilted Satin Jacket", price: "$360", oldPrice:'$400', stars: 5, numberOfComments: '65' }
];

// Custom hook to determine visible item count based on screen size
function useVisibleCount() {
    const [count, setCount] = useState(4);

    useEffect(() => {
        function updateCount() {
            if (window.innerWidth < 640) {
                setCount(1); // sm
            } else if (window.innerWidth < 1024) {
                setCount(2); // md
            } else {
                setCount(4); // lg and up
            }
        }
        updateCount();
        window.addEventListener('resize', updateCount);
        return () => window.removeEventListener('resize', updateCount);
    }, []);

    return count;
}

// Products component: Displays a grid of products with images, prices, and actions
const Products = () => {

    // Helper to render star rating icons
    const renderStars = (count: number) => (
        <div className="mt-2 flex">
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className={`w-5 h-5 ${i < count ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <polygon points="9.9,1.1 7.6,6.6 1.6,7.6 6,11.7 4.9,17.6 9.9,14.7 14.9,17.6 13.8,11.7 18.2,7.6 12.2,6.6 " />
                </svg>
            ))}
        </div>
    );

    // State for carousel start index
    const [startIndex, setStartIndex] = useState(0);
    
    // Use custom hook to get visible item count based on screen size
    const visibleCount = useVisibleCount();
    
    // Get the visible items for the current carousel window
    const visibleItems = itemsData.slice(startIndex, startIndex + visibleCount);

    // Handlers for carousel navigation
    const handlePrev = () => {
        setStartIndex(prev => Math.max(prev - 1, 0));
    };
    const handleNext = () => {
        setStartIndex(prev => Math.min(prev + 1, itemsData.length - visibleCount));
    };

    return (
        // Main container with padding and minimum height
        <div className='container min-h-[450px] mx-auto py-8 px-6'>
            {/* Section title */}
            <h3 className='border-l-20 text-[#2F2F60] hover:text-red-500 p-3 border-red-500 font-semibold text-lg'>Our Products</h3>
            {/* Section header with title and "View All" button */}
            <div className="flex justify-between items-center mt-10">
                <h4 className=' text-4xl font-bold text-black'>Explore Our Products</h4>
                <button className='bg-red-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-600 transition'>
                    View All
                </button>
            </div>
            {/* Carousel with navigation */}
            <div className="mt-10 relative">
                {/* Left navigation button */}
                <button
                    onClick={handlePrev}
                    disabled={startIndex === 0}
                    className="px-3 py-2 bg-gray-200 text-red-500 rounded disabled:opacity-50 mr-2 absolute left-0 top-1/2 -translate-y-1/2 z-10"
                    aria-label="Previous"
                >
                    &#8592;
                </button>
                {/* Carousel items grid */}
                <div
                    className={`
                        grid gap-6 overflow-hidden p-2 px-12 w-full
                        grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
                        mx-auto
                    `}
                >
                    {visibleItems.map(item => (
                        // Individual product card
                        <div key={item.id} className="min-w-[220px] bg-white rounded-lg shadow-md p-4 grid grid-rows-3">
                            {/* Product image and action icons */}
                            <div className="relative row-span-2 bg-slate-300/30 rounded-md flex justify-center items-center group">
                                <Image src={item.img} alt={item.name} width={120} height={120} className="mb-4 object-contain" />
                                {/* Heart icon for wishlist */}
                                <Heart className='absolute top-0 right-0 -translate-x-2 translate-y-2 bg-white text-red-500 p-1 rounded-full cursor-pointer' />
                                {/* Eye icon for quick view */}
                                <Eye className='absolute top-0 right-0 -translate-x-2 translate-y-10 bg-white text-red-500 p-1 rounded-full cursor-pointer' />
                                {/* "New" tag if present */}
                                {item.tag && (
                                    <div className='text-lg font-normal absolute top-0 left-0 translate-x-2 translate-y-2 bg-green-500 text-white rounded-sm px-3'>{item.tag}</div>
                                )}
                                {/* "Add To Cart" button, visible on hover */}
                                <button
                                    className="absolute bottom-0 w-full text-white bg-black py-2 rounded opacity-0 group-hover:opacity-100 transition"
                                >
                                    Add To Cart
                                </button>
                            </div>
                            {/* Product details: name, price, stars, comments */}
                            <div>
                                <div className="font-semibold mb-2">{item.name}</div>
                                <div className="text-lg font-medium text-red-500 mb-2">
                                    {item.price} <span className='text-gray-500 ms-2 line-through'>{item.oldPrice}</span>
                                </div>
                                <div className='flex items-center text-lg font-medium'>
                                    {renderStars(item.stars)}
                                    <span className='text-gray-500 ms-2'>{`(${item.numberOfComments})`}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Right navigation button */}
                <button
                    onClick={handleNext}
                    disabled={startIndex >= itemsData.length - visibleCount}
                    className="px-3 py-2 bg-gray-200 text-red-500 rounded disabled:opacity-50 ml-2 absolute right-0 top-1/2 -translate-y-1/2 z-10"
                    aria-label="Next"
                >
                    &#8594;
                </button>
            </div>
        </div>
    )
}

export default Products;