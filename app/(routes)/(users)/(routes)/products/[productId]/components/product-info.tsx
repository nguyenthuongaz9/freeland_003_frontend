"use client"
import React, { useState } from 'react'
// import Image from 'next/image'

interface ProductInfoProps {
    name: string;
    price: number;
    description: string;
}

const ProductInfo = ({
    name,
    price,
    description
}: ProductInfoProps) => {

    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity((prev) => prev + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value > 0) {
            setQuantity(value);
        }
    };

    const images = [
        "https://hongsamhanquocbmt.vn/upload/product/z33854852868989ab10943df63b09f2723ff567ca5e760-8633.jpg",
        "https://hongsamhanquocbmt.vn/upload/product/z33854852868989ab10943df63b09f2723ff567ca5e760-8633.jpg",
        "https://hongsamhanquocbmt.vn/upload/product/z33854852868989ab10943df63b09f2723ff567ca5e760-8633.jpg",
        "https://hongsamhanquocbmt.vn/upload/product/z33854852868989ab10943df63b09f2723ff567ca5e760-8633.jpg",
        "https://hongsamhanquocbmt.vn/upload/product/z33854852868989ab10943df63b09f2723ff567ca5e760-8633.jpg"
    ];

    const [mainImage, setMainImage] = useState(images[0]);

    return (
        <div className="antialiased py-6">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row -mx-4">
                    {/* Hình ảnh sản phẩm */}
                    <div className="md:w-1/2 px-4">
                        <div className="rounded-lg border border-gray-200 overflow-hidden">
                            <img
                                src={mainImage}
                                alt="Product"
                                width={500} // Specify a width
                                height={500} // Specify a height
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="flex mt-4 space-x-2">
                            {images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt="Thumbnail"
                                    width={64} // Specify a width
                                    height={64} // Specify a height
                                    className="w-16 h-16 border border-gray-300 cursor-pointer hover:border-indigo-500"
                                    onClick={() => setMainImage(img)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Thông tin sản phẩm */}
                    <div className="md:w-1/2 px-4">
                        <h2 className="text-3xl font-bold text-gray-800">{name}</h2>
                        <div className='flex items-center gap-2 mt-2'>
                            <div className='flex items-center justify-center gap-2 border-r border-r-gray-400 pr-2'>
                                <span className='underline'>4.0</span>
                                <div className='flex items-center justify-center gap-0'>
                                    {/* Rating Stars */}
                                    {/* ... (Same star SVG code) */}
                                </div>
                            </div>
                            <div className='flex items-center justify-center gap-2 border-r border-r-gray-400 pr-2'>
                                <span className='underline'>14k</span>
                                <p className='text-[#767676] text-sm'>Đánh giá</p>
                            </div>

                            <div className='flex items-center justify-center gap-2'>
                                <span className='underline'>14k</span>
                                <p className='text-[#767676] text-sm'>Đã bán</p>
                            </div>

                        </div>
                        <div className="mt-4">
                            <span className="text-2xl font-bold text-indigo-600">{(price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }))}</span>
                            <span className="text-green-500 text-lg font-semibold ml-2">Giảm 12%</span>
                        </div>
                        <p className="text-gray-600 mt-4">{description}</p>

                        {/* Chọn số lượng & Nút mua */}
                        <div className="flex items-center mt-6 space-x-4">
                            <button
                                className="px-3 py-2 bg-gray-200 rounded-lg"
                                onClick={handleDecrease}
                            >
                                -
                            </button>
                            <input
                                type="number"
                                className="w-16 border border-gray-300 text-center rounded-lg px-2 py-2 appearance-none"
                                value={quantity}
                                onChange={handleChange}
                                min="1"
                            />
                            <button
                                className="px-3 py-2 bg-gray-200 rounded-lg"
                                onClick={handleIncrease}
                            >
                                +
                            </button>
                            <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-2 rounded-lg">
                                Thêm vào giỏ hàng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo
