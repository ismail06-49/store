'use client';

import { useEffect, useState } from 'react'
import item1 from '@/public/item1.png';
import item2 from '@/public/item2.png';
import item3 from '@/public/item3.png';
import item4 from '@/public/item4.png';
import Image from 'next/image';
import { Eye, Heart } from 'lucide-react';

const THREE_DAYS_IN_SECONDS = 3 * 24 * 60 * 60; // 3 days in seconds

const itemsData = [
    { id: 1, img: item1, name: "HAVIT HV-G92 Gamepad", price: "$120", oldPrice:'$185', solde: '-35%', stars: 5, numberOfComments: '88' },
    { id: 2, img: item2, name: "AK-900 Wired Keyboard", price: "$160", oldPrice:'$265', solde: '-40%', stars: 3, numberOfComments: '70' },
    { id: 3, img: item3, name: "IPS LCD Gaming Monitor", price: "$400", oldPrice:'$800', solde: '-50%', stars: 4, numberOfComments: '113' },
    { id: 4, img: item4, name: "S-Series Comfort Chair ", price: "$375", oldPrice:'$470', solde: '-20%', stars: 5, numberOfComments: '91' },
    { id: 5, img: item1, name: "HAVIT HV-G92 Gamepad", price: "$120", oldPrice:'$185', solde: '-35%', stars: 5, numberOfComments: '88' },
    { id: 2, img: item2, name: "AK-900 Wired Keyboard", price: "$160", oldPrice:'$265', solde: '-40%', stars: 3, numberOfComments: '70' },
    { id: 3, img: item3, name: "IPS LCD Gaming Monitor", price: "$400", oldPrice:'$800', solde: '-50%', stars: 4, numberOfComments: '113' },
    { id: 4, img: item4, name: "S-Series Comfort Chair ", price: "$375", oldPrice:'$470', solde: '-20%', stars: 5, numberOfComments: '91' }
    // Add more items as needed
];

const Today = () => {
    const [secondsLeft, setSecondsLeft] = useState(THREE_DAYS_IN_SECONDS);
    const [startIndex, setStartIndex] = useState(0); // For carousel

    useEffect(() => {
        const interval = setInterval(() => {
            setSecondsLeft(prev => {
                if (prev <= 1) {
                    return THREE_DAYS_IN_SECONDS;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (secs: number) => {
        const days = Math.floor(secs / (24 * 60 * 60));
        const hours = Math.floor((secs % (24 * 60 * 60)) / 3600);
        const minutes = Math.floor((secs % 3600) / 60);
        const seconds = secs % 60;
        return `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
    };

    // Get the visible items for the current window
    const visibleItems = itemsData.slice(startIndex, startIndex + 4);

    // Handlers for navigation
    const handlePrev = () => {
        setStartIndex(prev => Math.max(prev - 1, 0));
    };

    const handleNext = () => {
        setStartIndex(prev => Math.min(prev + 1, itemsData.length - 4));
    };

    // Helper to render stars
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

    return (
        <div className='container min-h-[450px] mx-auto py-8 px-6'>
            <h3 className='border-l-20 text-[#2F2F60] hover:text-red-500 p-3 border-red-500 font-semibold text-lg'>Today’s</h3>
            {/* Countdown timer */}
            <div className="mt-10 text-4xl font-bold text-black">
                <span className='me-6'>Flash Sales </span>{formatTime(secondsLeft)}
            </div>
            {/* Items carousel */}
            <div className="mt-10 relative">
                {/* Left button */}
                <button
                    onClick={handlePrev}
                    disabled={startIndex === 0}
                    className="px-3 py-2 bg-gray-200 text-red-500 rounded disabled:opacity-50 mr-4 absolute top-0 right-6 -translate-12/12"
                >
                    &#8592;
                </button>
                {/* Items */}
                <div className="grid grid-cols-4 gap-6 overflow-hidden p-2 w-full">
                    {visibleItems.map(item => (
                        <div key={item.id} className="min-w-[220px] bg-white rounded-lg shadow-md p-4 grid grid-rows-3">
                            <div className="relative row-span-2 bg-slate-300/30 rounded-md flex justify-center items-center group">
                                <Image src={item.img} alt={item.name} width={120} height={120} className="mb-4 object-contain" />
                                <Heart className='absolute top-0 right-0 -translate-x-2 translate-y-2 bg-white text-red-500 p-1 rounded-full cursor-pointer' />
                                <Eye className='absolute top-0 right-0 -translate-x-2 translate-y-10 bg-white text-red-500 p-1 rounded-full cursor-pointer' />
                                <div className='text-lg font-normal absolute top-0 left-0 translate-x-2 translate-y-2 bg-red-500 text-white rounded-sm px-3'>{item.solde}</div>
                                {/* Button appears only on hover */}
                                <button
                                    className="absolute bottom-0 w-full text-white bg-black py-2 rounded opacity-0 group-hover:opacity-100 transition"
                                >
                                    Add To Cart
                                </button>
                            </div>
                            <div>
                                <div className="font-semibold mb-2">{item.name}</div>
                                <div className="text-lg font-medium text-red-500 mb-2">{item.price} <span className='text-gray-500 ms-2 line-through'>{item.oldPrice}</span></div>
                                <div className='flex items-center text-lg font-medium'>
                                    {renderStars(item.stars)}
                                    <span className='text-gray-500 ms-2'>{`(${item.numberOfComments})`}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Right button */}
                <button
                    onClick={handleNext}
                    disabled={startIndex >= itemsData.length - 4}
                    className="px-3 py-2 bg-gray-200 text-red-500 rounded disabled:opacity-50 ml-4 absolute top-0 right-0 -translate-12/12"
                >
                    &#8594;
                </button>
            </div>
            <div className='mt-10 text-center'>
                <button className='bg-red-500 text-white px-16 py-2 rounded-md font-semibold hover:bg-red-600 transition'>
                    View All
                </button>
            </div>
        </div>
    )
}

export default Today