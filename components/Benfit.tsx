import { Headset, ShieldCheck, Truck } from "lucide-react"

// Benfit component: Displays store/customer benefits in a responsive layout
const Benfit = () => {
    return (
        // Main container: responsive flex layout, stacks on small screens, row on md+
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 my-20">
            {/* Benefit 1: Free and Fast Delivery */}
            <div className="flex flex-col items-center text-center max-w-xs">
                {/* Truck icon with styled background */}
                <Truck className="bg-[#010186] text-white rounded-full size-14 p-3 ring-8 ring-[#2F2E30]/15" />
                <h4 className="text-[#01014C] text-xl font-semibold mt-6 md:mt-10">FREE AND FAST DELIVERY</h4>
                <p className="text-[14px] font-normal">Free delivery for all orders over $140</p>
            </div>
            {/* Benefit 2: 24/7 Customer Service */}
            <div className="flex flex-col items-center text-center max-w-xs">
                {/* Headset icon with styled background */}
                <Headset className="bg-[#010186] text-white rounded-full size-14 p-3 ring-8 ring-[#2F2E30]/15" />
                <h4 className="text-[#01014C] text-xl font-semibold mt-6 md:mt-10">24/7 CUSTOMER SERVICE</h4>
                <p className="text-[14px] font-normal">Friendly 24/7 customer support</p>
            </div>
            {/* Benefit 3: Money Back Guarantee */}
            <div className="flex flex-col items-center text-center max-w-xs">
                {/* ShieldCheck icon with styled background */}
                <ShieldCheck className="bg-[#010186] text-white rounded-full size-14 p-3 ring-8 ring-[#2F2E30]/15" />
                <h4 className="text-[#01014C] text-xl font-semibold mt-6 md:mt-10">MONEY BACK GUARANTEE</h4>
                <p className="text-[14px] font-normal">We return money within 30 days</p>
            </div>
        </div>
    )
}

export default Benfit