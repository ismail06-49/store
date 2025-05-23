import Image from "next/image"
import Messi from '@/public/messi.png';
import Soccer from '@/public/soccer.png'
import Link from "next/link";

const Hero = () => {
    return (
        // Main container with a 3-column grid layout
        <div className="container min-h-[450px] grid grid-cols-3 gap-6 mx-auto py-8 px-6">
            {/* Category List: Left column with product categories */}
            <ul className="bg-white rounded-lg shadow p-6 flex flex-col gap-3 overflow-hidden animate-slide-to-up">
                <li className="font-medium text-lg cursor-pointer animate-slide-to-right">
                    <Link className="hover:text-red-500" href=''>Woman’s Fashion</Link>
                </li>
                <li className="font-medium text-lg cursor-pointer animate-slide-to-right delay-[500ms]">
                    <Link className="hover:text-red-500" href=''>Men’s Fashion</Link>
                </li>
                <li className="font-medium text-lg cursor-pointer animate-slide-to-right delay-[1000ms]">
                    <Link className="hover:text-red-500" href=''>Electronics</Link>
                </li>
                <li className="font-medium text-lg cursor-pointer animate-slide-to-right delay-[1500ms]">
                    <Link className="hover:text-red-500" href=''>Home & Lifestyle</Link>
                </li>
                <li className="font-medium text-lg cursor-pointer animate-slide-to-right delay-[2000ms]">
                    <Link className="hover:text-red-500" href=''>Sports & Outdoor</Link>
                </li>
                <li className="font-medium text-lg cursor-pointer animate-slide-to-right delay-[2500ms]">
                    <Link className="hover:text-red-500" href=''>Baby’s & Toys</Link>
                </li>
                <li className="font-medium text-lg cursor-pointer animate-slide-to-right delay-[3000ms]">
                    <Link className="hover:text-red-500" href=''>Groceries & Pets</Link>
                </li>
            </ul>
            {/* Hero Banner: Right two columns with promotional content and images */}
            <div className="col-span-2 flex items-center justify-start bg-gradient-to-r from-slate-800 to-blue-950 rounded-lg shadow relative overflow-hidden animate-slide-to-up">
                {/* Text content for the hero section */}
                <div className="text-white m-6 z-10 animate-slide-to-right delay-[2000ms]">
                    <h2 className="w-[360px] text-6xl font-black mb-4">SHOP LIKE 
                    A PLAYER</h2>
                    <button className="bg-white hover:bg-red-400 text-slate-900 font-semibold px-6 py-2 rounded shadow cursor-pointer transition">Shop Now</button>
                </div>
                {/* Messi image positioned absolutely on the right */}
                <Image className="absolute bottom-0 right-5 z-20 animate-slide-to-up delay-[3000ms]" src={Messi} alt="" />
                {/* Soccer image as a background element behind Messi */}
                <Image className="absolute bottom-0 right-0 z-10 animate-rotate delay-[3000ms]" src={Soccer} alt=""/>
            </div>
        </div>
    )
}

export default Hero