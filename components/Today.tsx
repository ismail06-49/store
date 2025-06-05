'use client';

import { useEffect, useState } from 'react';
import item1 from '@/public/item1.png';
import item2 from '@/public/item2.png';
import item3 from '@/public/item3.png';
import item4 from '@/public/item4.png';
import Image from 'next/image';
import { Eye, Heart } from 'lucide-react';

// Number of seconds in three days for the countdown timer
const THREE_DAYS_IN_SECONDS = 3 * 24 * 60 * 60;

// Array of flash sale items to display in the carousel
const itemsData = [
    { id: 1, img: item1, name: "HAVIT HV-G92 Gamepad", price: "$120", oldPrice: '$185', solde: '-35%', stars: 5, numberOfComments: '88' },
    { id: 2, img: item2, name: "AK-900 Wired Keyboard", price: "$160", oldPrice: '$265', solde: '-40%', stars: 3, numberOfComments: '70' },
    { id: 3, img: item3, name: "IPS LCD Gaming Monitor", price: "$400", oldPrice: '$800', solde: '-50%', stars: 4, numberOfComments: '113' },
    { id: 4, img: item4, name: "S-Series Comfort Chair ", price: "$375", oldPrice: '$470', solde: '-20%', stars: 5, numberOfComments: '91' },
    { id: 5, img: item1, name: "HAVIT HV-G92 Gamepad", price: "$120", oldPrice: '$185', solde: '-35%', stars: 5, numberOfComments: '88' },
    { id: 6, img: item2, name: "AK-900 Wired Keyboard", price: "$160", oldPrice: '$265', solde: '-40%', stars: 3, numberOfComments: '70' },
    { id: 7, img: item3, name: "IPS LCD Gaming Monitor", price: "$400", oldPrice: '$800', solde: '-50%', stars: 4, numberOfComments: '113' },
    { id: 8, img: item4, name: "S-Series Comfort Chair ", price: "$375", oldPrice: '$470', solde: '-20%', stars: 5, numberOfComments: '91' }
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

// Today component: Displays flash sales section with countdown and carousel
const Today = () => {
    // State for countdown timer (in seconds)
    const [secondsLeft, setSecondsLeft] = useState(THREE_DAYS_IN_SECONDS);
    // State for carousel start index
    const [startIndex, setStartIndex] = useState(0);

    // Use custom hook to get visible item count based on screen size
    const visibleCount = useVisibleCount();

    // Get the visible items for the current carousel window
    const visibleItems = itemsData.slice(startIndex, startIndex + visibleCount);

    // Effect to handle countdown timer logic
    useEffect(() => {
        const interval = setInterval(() => {
            setSecondsLeft(prev => (prev <= 1 ? THREE_DAYS_IN_SECONDS : prev - 1));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // Helper to format seconds into "Xd : Xh : Xm : Xs"
    const formatTime = (secs: number) => {
        const days = Math.floor(secs / (24 * 60 * 60));
        const hours = Math.floor((secs % (24 * 60 * 60)) / 3600);
        const minutes = Math.floor((secs % 3600) / 60);
        const seconds = secs % 60;
        return `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
    };

    // Handlers for carousel navigation
    const handlePrev = () => {
        setStartIndex(prev => Math.max(prev - 1, 0));
    };
    const handleNext = () => {
        setStartIndex(prev => Math.min(prev + 1, itemsData.length - visibleCount));
    };

    return (
        <div className='container min-h-[450px] mx-auto py-8 px-3 md:px-6'>
            {/* Section title */}
            <h3 className='border-l-4 text-[#2F2F60] hover:text-red-500 p-3 border-red-500 font-semibold text-lg'>Today’s</h3>
            {/* Countdown timer */}
            <div className="mt-10 text-3xl font-bold text-black flex flex-col sm:flex-row sm:items-center">
                <span className='me-6 text-4xl'>Flash Sales</span>
                <span className="mt-2 sm:mt-0">{formatTime(secondsLeft)}</span>
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
                        <div key={item.id} className="min-w-[220px] bg-white rounded-lg shadow-md p-4 grid grid-rows-3">
                            {/* Product image and action icons */}
                            <div className="relative row-span-2 bg-slate-300/30 rounded-md flex justify-center items-center group">
                                <Image src={item.img} alt={item.name} width={120} height={120} className="mb-4 object-contain" />
                                {/* Heart icon for wishlist */}
                                <Heart className='absolute top-0 right-0 -translate-x-2 translate-y-2 bg-white text-red-500 p-1 rounded-full cursor-pointer' />
                                {/* Eye icon for quick view */}
                                <Eye className='absolute top-0 right-0 -translate-x-2 translate-y-10 bg-white text-red-500 p-1 rounded-full cursor-pointer' />
                                {/* Sale badge */}
                                <div className='text-lg font-normal absolute top-0 left-0 translate-x-2 translate-y-2 bg-red-500 text-white rounded-sm px-3'>{item.solde}</div>
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
            {/* "View All" button below carousel */}
            <div className='mt-10 text-center'>
                <button className='bg-red-500 text-white px-16 py-2 rounded-md font-semibold hover:bg-red-600 transition'>
                    View All
                </button>
            </div>
        </div>
    );
};

export default Today;