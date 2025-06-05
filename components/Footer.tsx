import { Facebook, Instagram, Linkedin, SendHorizonal, Twitter } from "lucide-react";
import Image from "next/image";
import Qr from '@/public/Qrcode 1.png';
import Ps from '@/public/playStore.png';
import As from '@/public/appStore.png';

// Footer component: Responsive and mobile-friendly
const Footer = () => {
    return (
        <footer className="w-full bg-[#000022] text-white">
            {/* Main grid container for footer sections */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 container min-h-[450px] mx-auto py-16 px-4 md:px-8">
                {/* Brand and newsletter subscription */}
                <div className="flex flex-col gap-6">
                    <h4 className="text-2xl font-bold">Exclusive</h4>
                    <h5 className="text-[20px] font-medium">Subscribe</h5>
                    <p className="text-[16px] font-normal">Get 10% off your first order</p>
                    {/* Email input with send button */}
                    <div className="relative max-w-xs">
                        <input
                            type="text"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 text-white bg-transparent border border-white/30 rounded-sm focus:outline-none"
                        />
                        <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-transparent">
                            <SendHorizonal className="text-white w-5 h-5" />
                        </button>
                    </div>
                </div>
                {/* Support/contact info */}
                <div className="flex flex-col gap-6">
                    <h4 className="text-2xl font-bold">Support</h4>
                    <p className="text-[16px] font-normal">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                    <p className="text-[16px] font-normal">exclusive@gmail.com</p>
                    <p className="text-[16px] font-normal">+88015-88888-9999</p>
                </div>
                {/* Account links */}
                <div className="flex flex-col gap-6">
                    <h4 className="text-2xl font-bold">Account</h4>
                    <p className="text-[16px] font-normal">My Account</p>
                    <p className="text-[16px] font-normal">Login / Register</p>
                    <p className="text-[16px] font-normal">Cart</p>
                    <p className="text-[16px] font-normal">Wishlist</p>
                    <p className="text-[16px] font-normal">Shop</p>
                </div>
                {/* Quick links */}
                <div className="flex flex-col gap-6">
                    <h4 className="text-2xl font-bold">Quick Link</h4>
                    <p className="text-[16px] font-normal">Privacy Policy</p>
                    <p className="text-[16px] font-normal">Terms Of Use</p>
                    <p className="text-[16px] font-normal">FAQ</p>
                    <p className="text-[16px] font-normal">Contact</p>
                </div>
                {/* App download and social icons */}
                <div className="flex flex-col gap-6">
                    <h4 className="text-2xl font-bold">Download App</h4>
                    {/* App download section with QR and store badges */}
                    <div className="grid grid-cols-2 grid-rows-3 gap-2">
                        <p className="col-span-2 text-[12px] font-medium">Save $3 with App New User Only</p>
                        <Image src={Qr} alt="Qr code" className="row-span-2 row-start-2 w-20 h-20 object-contain" />
                        <Image src={Ps} alt="Play store" className="row-start-2 w-20 h-8 object-contain" />
                        <Image src={As} alt="App store" className="col-start-2 row-start-3 w-20 h-8 object-contain" />
                    </div>
                    {/* Social media icons */}
                    <div className="flex gap-4 mt-2">
                        <Facebook className="size-6" />
                        <Twitter className="size-6" />
                        <Instagram className="size-6" />
                        <Linkedin className="size-6" />
                    </div>
                </div>
            </div>
            {/* Divider line */}
            <div className='w-full text-center h-0.5 bg-white/15'></div>
            {/* Copyright notice */}
            <p className="text-white/35 text-center text-lg font-normal py-4">
                <span>&copy; </span>Copyright <span className="font-medium underline">Ismail</span> &amp; <span className="font-medium underline">Joy</span> 2025. All right reserved
            </p>
        </footer>
    )
}

export default Footer