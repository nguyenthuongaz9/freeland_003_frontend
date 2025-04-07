"use client";

import React, { useState } from "react";
import { Minus, Plus, X } from "lucide-react";
import { useCartQuery } from "@/hooks/use-cart-query";
// import Image from "next/image";  // Import the Image component

interface ProductItemProps {
    name: string;
    totalPrice: number;
    image: string;
    accountId: string;
    productQuantity: number;
    productId: string;
    
}

const ProductItem = ({
    name,
    totalPrice,
    accountId,
    image,
    productId,
    productQuantity
}: ProductItemProps) => {
    const [quantity, setQuantity] = useState(productQuantity);
    const { updateItem } = useCartQuery();

    const handleIncrement = async () => {
        const data = {
            accountId: accountId,
            productId: productId,
            quantity: quantity + 1
        };
        updateItem(data);
        setQuantity((prev) => prev + 1);
    };

    const handleDecrement = async () => {
        if (quantity > 1) {
            const data = {
                accountId: accountId,
                productId: productId,
                quantity: quantity - 1
            };
            updateItem(data);
            setQuantity((prev) => prev - 1);
        }
    };

    return (
        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
            <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                <a href="#" className="shrink-0 md:order-1">
                    <img
                        className="h-20 w-20 dark:hidden"
                        src={image}
                        alt={name}  // Make sure to add alt text for accessibility
                        width={80}  // Specify width
                        height={80} // Specify height
                    />
                </a>

                <label htmlFor="counter-input" className="sr-only">
                    Choose quantity:
                </label>
                <div className="flex items-center justify-between md:order-3 md:justify-end">
                    <div className="flex items-center">
                        <button
                            type="button"
                            onClick={handleDecrement}
                            className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                        >
                            <Minus className="h-3 w-3 text-gray-900 dark:text-white" />
                        </button>
                        <input
                            type="text"
                            id="counter-input"
                            className="w-10 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value) || 1)}
                            required
                        />
                        <button
                            type="button"
                            onClick={handleIncrement}
                            className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                        >
                            <Plus className="h-3 w-3 text-gray-900 dark:text-white" />
                        </button>
                    </div>
                    <div className="text-end md:order-4 md:w-32">
                        <p className="text-base font-bold text-gray-900 dark:text-white">
                            {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(totalPrice)}
                        </p>
                    </div>
                </div>

                <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                    <a
                        href="#"
                        className="text-base font-medium text-gray-900 hover:underline dark:text-white"
                    >
                        {name}
                    </a>

                    <div className="flex items-center gap-4">
                        <button
                            type="button"
                            className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                        >
                            <X className="mr-1.5 h-5 w-5" />
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
