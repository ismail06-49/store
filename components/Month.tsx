import item10 from '@/public/item10.png';
import item20 from '@/public/item20.png';
import item30 from '@/public/item30.png';
import item40 from '@/public/item40.png';
import Image from 'next/image';
import { Eye, Heart } from 'lucide-react';

const itemsData = [
    { id: 1, img: item10, name: "The north coat", price: "$260", oldPrice:'$360', stars: 5, numberOfComments: '65' },
    { id: 2, img: item20, name: "Gucci duffle bag", price: "$960", oldPrice:'$1160', stars: 4, numberOfComments: '65' },
    { id: 3, img: item30, name: "RGB liquid CPU Cooler", price: "$160", oldPrice:'$170', stars: 4, numberOfComments: '65' },
    { id: 4, img: item40, name: "Small BookSelf", price: "$360", oldPrice:'$400', stars: 5, numberOfComments: '65' }
    // Add more items as needed
];

const Month = () => {

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
            <h3 className='border-l-20 text-[#2F2F60] hover:text-red-500 p-3 border-red-500 font-semibold text-lg'>This Month</h3>
            {/* Countdown timer */}
            <div className="flex justify-between items-center mt-10">
                <h4 className=' text-4xl font-bold text-black'>Best Selling Products</h4>
                <button className='bg-red-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-600 transition'>
                    View All
                </button>
            </div>
            {/* Items carousel */}
            <div className="mt-10">
                {/* Items */}
                <div className="grid grid-cols-4 gap-6 overflow-hidden p-2 w-full">
                    {itemsData.map(item => (
                        <div key={item.id} className="min-w-[220px] bg-white rounded-lg shadow-md p-4 grid grid-rows-3">
                            <div className="relative row-span-2 bg-slate-300/30 rounded-md flex justify-center items-center group">
                                <Image src={item.img} alt={item.name} width={120} height={120} className="mb-4 object-contain" />
                                <Heart className='absolute top-0 right-0 -translate-x-2 translate-y-2 bg-white text-red-500 p-1 rounded-full cursor-pointer' />
                                <Eye className='absolute top-0 right-0 -translate-x-2 translate-y-10 bg-white text-red-500 p-1 rounded-full cursor-pointer' />
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
            </div>
        </div>
    )
}

export default Month;