import Image from "next/image";
import F1 from '@/public/f1.png';
import F2 from '@/public/f2.png';
import F3 from '@/public/f3.png';
import F4 from '@/public/f4.png';
import { Button } from "@/components/ui/button";

// Featured component: Displays a grid of featured/new arrival products in a custom layout
const Featured = () => {
    return (
        // Main container with padding and minimum height
        <div className='container min-h-[450px] mx-auto py-8 px-6'>
            {/* Section title */}
            <h3 className='border-l-20 text-[#2F2F60] hover:text-red-500 p-3 border-red-500 font-semibold text-lg'>Featured</h3>
            {/* Subtitle */}
            <div className="my-10 text-4xl font-bold text-black">
                New Arrival
            </div>
            {/* Custom grid: 4 columns, 2 rows */}
            <div className="h-[600px] grid grid-cols-4 grid-rows-2 gap-6">
                {/* 1. Large PlayStation 5 card (2x2) */}
                <div className="relative col-span-2 row-span-2 bg-neutral-950">
                    {/* Product image */}
                    <Image className="absolute bottom-0 left-[50%] -translate-x-1/2" src={F1} alt="Featured Image 1" />
                    {/* Product info */}
                    <div className="absolute bottom-10 left-10 w-[30%]">
                        <h4 className="text-2xl font-semibold text-white">PlayStation 5</h4>
                        <p className="text-[14px] my-1.5 text-gray-300 font-normal">Black and White version of the PS5 coming out on sale.</p>
                        <Button variant='link' className="text-white text-[16px] font-medium underline">
                            Shop Now
                        </Button>
                    </div>
                </div>
                {/* 2. Medium Women's Collections card (2x1) */}
                <div className="relative col-span-2 col-start-3 bg-[#0D0D0D]">
                    {/* Product image */}
                    <Image className="absolute bottom-0 right-0" src={F2} alt="Featured Image 2" />
                    {/* Product info */}
                    <div className="absolute bottom-10 left-10 w-[35%]">
                        <h4 className="text-2xl font-semibold text-white">Women’s Collections</h4>
                        <p className="text-[14px] my-1.5 text-gray-300 font-normal">Featured woman collections that give you another vibe.</p>
                        <Button variant='link' className="text-white text-[16px] font-medium underline">
                            Shop Now
                        </Button>
                    </div>
                </div>
                {/* 3. Small Speakers card (1x1) */}
                <div className="relative col-start-3 row-start-2 bg-[#0D0D0D]">
                    {/* Product image */}
                    <Image className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2" src={F3} alt="Featured Image 3" />
                    {/* Product info */}
                    <div className="absolute bottom-5 left-5">
                        <h4 className="text-2xl font-semibold text-white">Speakers</h4>
                        <p className="text-[14px] my-1.5 text-gray-300 font-normal">Amazon wireless speakers</p>
                        <Button variant='link' className="text-white text-[16px] font-medium underline">
                            Shop Now
                        </Button>
                    </div>
                </div>
                {/* 4. Small Perfume card (1x1) */}
                <div className="relative col-start-4 row-start-2 bg-[#0D0D0D]">
                    {/* Product image */}
                    <Image className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2" src={F4} alt="Featured Image 4" />
                    {/* Product info */}
                    <div className="absolute bottom-5 left-5">
                        <h4 className="text-2xl font-semibold text-white">Perfume</h4>
                        <p className="text-[14px] my-1.5 text-gray-300 font-normal">GUCCI INTENSE OUD EDP</p>
                        <Button variant='link' className="text-white text-[16px] font-medium underline">
                            Shop Now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured