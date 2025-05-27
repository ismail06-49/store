import { Headset, ShieldCheck, Truck } from "lucide-react"

const Benfit = () => {
    return (
        <div className="flex justify-center items-center gap-20 my-20">
            <div className="flex flex-col items-center">
                <Truck className="bg-[#010186] text-white rounded-full size-14 p-3 ring-8 ring-[#2F2E30]/15" />
                <h4 className="text-[#01014C] text-xl font-semibold mt-10">FREE AND FAST DELIVERY</h4>
                <p className="text-[14px] font-normal">Free delivery for all orders over $140</p>
            </div>
            <div className="flex flex-col items-center">
                <Headset className="bg-[#010186] text-white rounded-full size-14 p-3 ring-8 ring-[#2F2E30]/15" />
                <h4 className="text-[#01014C] text-xl font-semibold mt-10">24/7 CUSTOMER SERVICE</h4>
                <p className="text-[14px] font-normal">Friendly 24/7 customer support</p>
            </div>
            <div className="flex flex-col items-center">
                <ShieldCheck className="bg-[#010186] text-white rounded-full size-14 p-3 ring-8 ring-[#2F2E30]/15" />
                <h4 className="text-[#01014C] text-xl font-semibold mt-10">MONEY BACK GUARANTEE</h4>
                <p className="text-[14px] font-normal">We return money within 30 days</p>
            </div>
        </div>
    )
}

export default Benfit
