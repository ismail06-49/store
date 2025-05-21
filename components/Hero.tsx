import Image from "next/image"
import Messi from '@/public/messi.png';
import Soccer from '@/public/soccer.png'

const Hero = () => {
    return (
        // Main container with a 3-column grid layout
        <div className="container grid grid-cols-3 gap-6 mx-auto py-8 px-6">
            {/* Category List: Left column with product categories */}
            <ul className="bg-white rounded-lg shadow p-6 flex flex-col gap-3">
                <li className="font-medium text-lg hover:text-blue-600 cursor-pointer">Woman’s Fashion</li>
                <li className="font-medium text-lg hover:text-blue-600 cursor-pointer">Men’s Fashion</li>
                <li className="font-medium text-lg hover:text-blue-600 cursor-pointer">Electronics</li>
                <li className="font-medium text-lg hover:text-blue-600 cursor-pointer">Home & Lifestyle</li>
                <li className="font-medium text-lg hover:text-blue-600 cursor-pointer">Sports & Outdoor</li>
                <li className="font-medium text-lg hover:text-blue-600 cursor-pointer">Baby’s & Toys</li>
                <li className="font-medium text-lg hover:text-blue-600 cursor-pointer">Groceries & Pets</li>
            </ul>
            {/* Hero Banner: Right two columns with promotional content and images */}
            <div className="col-span-2 flex items-center justify-start bg-gradient-to-r from-slate-800 to-blue-950 rounded-lg shadow relative overflow-hidden">
                {/* Text content for the hero section */}
                <div className="text-white m-6 z-10">
                    <h2 className="w-[360px] text-6xl font-black mb-4">SHOP LIKE 
                    A PLAYER</h2>
                    <button className="bg-white text-slate-900 font-semibold px-6 py-2 rounded shadow hover:bg-blue-100 transition">Shop Now</button>
                </div>
                {/* Messi image positioned absolutely on the right */}
                <Image className="absolute right-4 z-20" src={Messi} alt="" />
                {/* Soccer image as a background element behind Messi */}
                <Image className="absolute right-0 z-10" src={Soccer} alt=""/>
            </div>
        </div>
    )
}

export default Hero