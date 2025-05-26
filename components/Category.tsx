import { Smartphone, Laptop, Watch, Camera, Headphones, Gamepad } from "lucide-react";

const categories = [
    { name: 'Phones', icon: Smartphone },
    { name: 'Laptops', icon: Laptop },
    { name: 'Watches', icon: Watch },
    { name: 'Camera', icon: Camera },
    { name: 'Headphones', icon: Headphones },
    { name: 'Gaming', icon: Gamepad },
]

const Category = () => {
    return (
        <div className='container min-h-[450px] mx-auto py-8 px-6'>
            <h3 className='border-l-20 text-[#2F2F60] hover:text-red-500 p-3 border-red-500 font-semibold text-lg'>Categories</h3>
            <div className="my-10 text-4xl font-bold text-black">
                Browse By Category
            </div>
            <div className="grid grid-cols-6 grid-rows-1 gap-4">
                {categories.map((category, index) => {
                    const Icon = category.icon;
                    return (
                        <div key={index} className="flex flex-col items-center justify-center px-4 py-8 bg-white rounded-lg border-2 border-gray-500 hover:bg-red-500 hover:text-white transition">
                            <Icon className="text-lg h-12 w-12 mb-3" />
                            <span className="text-lg font-normal">{category.name}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Category