import { Heart, Search, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

// Header component for the store's main navigation and announcement bar
const Header = () => {
    return (
        <header className="bg-white shadow-md">
            {/* Announcement bar at the top */}
            <div className='font-normal bg-slate-900 text-white text-sm flex flex-row justify-center p-3'>
                <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                {/* ShopNow link next to the announcement */}
                <Link className='font-semibold underline ms-4' href=''>ShopNow</Link>
            </div>
            {/* Main navigation bar */}
            <nav className="container mx-auto flex items-center justify-between py-4 px-6">
                {/* Store logo/title */}
                <h1 className="font-bold text-black text-2xl">Exclusive</h1>
                {/* Navigation links */}
                <ul className="flex gap-8">
                    <li className="font-normal text-black text-lg hover:text-blue-600 cursor-pointer">Home</li>
                    <li className="font-normal text-black text-lg hover:text-blue-600 cursor-pointer">Contact</li>
                    <li className="font-normal text-black text-lg hover:text-blue-600 cursor-pointer">About</li>
                    <li className="font-normal text-black text-lg hover:text-blue-600 cursor-pointer">Sign Up</li>
                </ul>
                {/* Search input and action icons */}
                <div className="flex items-center gap-4">
                    {/* Search input with icon inside */}
                    <div className="relative">
                        <input
                            type="search"
                            placeholder="Search"
                            className="border rounded-md pl-10 pr-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        {/* Search icon positioned inside the input */}
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                    {/* Favorite (Heart) icon */}
                    <Heart className="w-6 h-6 text-gray-700 hover:text-red-500 cursor-pointer" />
                    {/* Shopping cart icon */}
                    <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-blue-500 cursor-pointer" />
                </div>
            </nav>
        </header>
    )
}

export default Header
