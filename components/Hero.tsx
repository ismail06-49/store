import Image from "next/image"
import Messi from '@/public/messi.png';
import Soccer from '@/public/soccer.png'
import Link from "next/link";

// Hero component: Displays the main promotional banner and category links
const Hero = () => {
    return (
        // Responsive main container: 3 columns on large screens, 1 column (vertical) on small screens
        <div className="container min-h-[450px] grid grid-cols-1 lg:grid-cols-3 gap-6 mx-auto py-8 px-3 md:px-6">
            {/* Category List: Top section on mobile, left column on desktop */}
            <ul className="bg-white rounded-lg shadow p-6 flex flex-col gap-3 overflow-hidden animate-slide-to-up">
                {/* Each category link with animation */}
                <li className="font-medium text-center text-lg cursor-pointer animate-slide-to-right">
                    <Link className="hover:text-red-500" href=''>Woman’s Fashion</Link>
                </li>
                <li className="font-medium text-center text-lg cursor-pointer animate-slide-to-right delay-[500ms]">
                    <Link className="hover:text-red-500" href=''>Men’s Fashion</Link>
                </li>
                <li className="font-medium text-center text-lg cursor-pointer animate-slide-to-right delay-[1000ms]">
                    <Link className="hover:text-red-500" href=''>Electronics</Link>
                </li>
                <li className="font-medium text-center text-lg cursor-pointer animate-slide-to-right delay-[1500ms]">
                    <Link className="hover:text-red-500" href=''>Home & Lifestyle</Link>
                </li>
                <li className="font-medium text-center text-lg cursor-pointer animate-slide-to-right delay-[2000ms]">
                    <Link className="hover:text-red-500" href=''>Sports & Outdoor</Link>
                </li>
                <li className="font-medium text-center text-lg cursor-pointer animate-slide-to-right delay-[2500ms]">
                    <Link className="hover:text-red-500" href=''>Baby’s & Toys</Link>
                </li>
                <li className="font-medium text-center text-lg cursor-pointer animate-slide-to-right delay-[3000ms]">
                    <Link className="hover:text-red-500" href=''>Groceries & Pets</Link>
                </li>
            </ul>
            {/* Hero Banner: Middle section on mobile, right two columns on desktop */}
            <div className="relative flex flex-col justify-center items-center bg-gradient-to-r from-slate-800 to-blue-950 rounded-lg shadow overflow-hidden animate-slide-to-up min-h-[320px] md:col-span-2">
                {/* Text content for the hero section */}
                <div className="md:absolute md:left-5 text-white m-6 z-10 animate-slide-to-right delay-[2000ms] flex flex-col items-center">
                    <h2 className="w-full lg:w-[360px] text-3xl md:text-5xl lg:text-6xl font-black mb-4 text-center lg:text-left">
                        SHOP LIKE <br className="block lg:hidden" />
                        A PLAYER
                    </h2>
                    <button className="bg-white hover:bg-red-400 text-slate-900 font-semibold px-6 py-2 rounded shadow cursor-pointer transition">
                        Shop Now
                    </button>
                </div>
                {/* Images: stack vertically on mobile, overlap on desktop */}
                <div className="flex justify-center items-end w-full min-h-[180px] lg:min-h-0">
                    {/* Messi image positioned absolutely on the right for lg+, static for mobile */}
                    <Image
                        className="z-20 animate-slide-to-up delay-[3000ms] w-[70%] h-auto md:w-[50%] lg:w-auto absolute bottom-0 right-10"
                        src={Messi}
                        alt=""
                    />
                    {/* Soccer image as a background element behind Messi */}
                    <Image
                        className="z-10 animate-rotate delay-[3000ms] w-[70%] h-auto md:w-[60%] lg:w-auto absolute bottom-0 right-0"
                        src={Soccer}
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero