import Image from "next/image";
import F1 from '@/public/f1.png';
import F2 from '@/public/f2.png';
import F3 from '@/public/f3.png';
import F4 from '@/public/f4.png';
import { Button } from "@/components/ui/button";

// Featured component: Responsive grid of featured/new arrival products
const Featured = () => {
    return (
        // Main container with padding and minimum height
        <div className='container min-h-[450px] mx-auto py-8 px-3 md:px-6'>
            {/* Section title */}
            <h3 className='border-l-4 text-[#2F2F60] hover:text-red-500 p-3 border-red-500 font-semibold text-lg'>Featured</h3>
            {/* Subtitle */}
            <div className="my-10 text-3xl md:text-4xl font-bold text-black">
                New Arrival
            </div>
            {/* Responsive grid: custom layout on md+, stacked on mobile */}
            <div className="
                grid gap-6
                grid-cols-1
                md:grid-cols-4 md:grid-rows-2
                auto-rows-fr
                h-auto
            ">
                {/* 1. Large PlayStation 5 card (2x2 on md+, full width on mobile) */}
                <div className="
                    relative bg-neutral-950 rounded-lg overflow-hidden
                    md:col-span-2 md:row-span-2
                    flex flex-col justify-end min-h-[220px] md:min-h-[320px] p-6
                ">
                    {/* Product image */}
                    <Image className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 sm:w-40 md:w-60" src={F1} alt="Featured Image 1" />
                    {/* Product info */}
                    <div className="relative z-10 w-full md:w-[70%]">
                        <h4 className="text-xl md:text-2xl font-semibold text-white">PlayStation 5</h4>
                        <p className="text-[13px] md:text-[14px] my-1.5 text-gray-300 font-normal">Black and White version of the PS5 coming out on sale.</p>
                        <Button variant='link' className="text-white text-[15px] md:text-[16px] font-medium underline px-0">
                            Shop Now
                        </Button>
                    </div>
                </div>
                {/* 2. Medium Women's Collections card (2x1 on md+, full width on mobile) */}
                <div className="
                    relative bg-[#0D0D0D] rounded-lg overflow-hidden
                    md:col-span-2 md:row-span-1
                    flex flex-col justify-end min-h-[180px] p-6
                ">
                    {/* Product image */}
                    <Image className="absolute bottom-0 right-0 w-32 sm:w-40 md:w-52" src={F2} alt="Featured Image 2" />
                    {/* Product info */}
                    <div className="relative z-10 w-full md:w-[70%]">
                        <h4 className="text-xl md:text-2xl font-semibold text-white">Women’s Collections</h4>
                        <p className="text-[13px] md:text-[14px] my-1.5 text-gray-300 font-normal">Featured woman collections that give you another vibe.</p>
                        <Button variant='link' className="text-white text-[15px] md:text-[16px] font-medium underline px-0">
                            Shop Now
                        </Button>
                    </div>
                </div>
                {/* 3. Small Speakers card (1x1) */}
                <div className="
                    relative bg-[#0D0D0D] rounded-lg overflow-hidden
                    flex flex-col justify-end min-h-[120px] p-6
                ">
                    {/* Product image */}
                    <Image className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 sm:w-28 md:w-32" src={F3} alt="Featured Image 3" />
                    {/* Product info */}
                    <div className="relative z-10">
                        <h4 className="text-lg md:text-2xl font-semibold text-white">Speakers</h4>
                        <p className="text-[13px] md:text-[14px] my-1.5 text-gray-300 font-normal">Amazon wireless speakers</p>
                        <Button variant='link' className="text-white text-[15px] md:text-[16px] font-medium underline px-0">
                            Shop Now
                        </Button>
                    </div>
                </div>
                {/* 4. Small Perfume card (1x1) */}
                <div className="
                    relative bg-[#0D0D0D] rounded-lg overflow-hidden
                    flex flex-col justify-end min-h-[120px] p-6
                ">
                    {/* Product image */}
                    <Image className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 sm:w-28 md:w-32" src={F4} alt="Featured Image 4" />
                    {/* Product info */}
                    <div className="relative z-10">
                        <h4 className="text-lg md:text-2xl font-semibold text-white">Perfume</h4>
                        <p className="text-[13px] md:text-[14px] my-1.5 text-gray-300 font-normal">GUCCI INTENSE OUD EDP</p>
                        <Button variant='link' className="text-white text-[15px] md:text-[16px] font-medium underline px-0">
                            Shop Now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured