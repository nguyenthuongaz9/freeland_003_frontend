"use client"

import { Button } from '@/components/ui/button';
import { useCartQuery } from '@/hooks/use-cart-query';
import { useCartStore } from '@/hooks/use-cart-store';
import { useRouter } from 'next/navigation';

interface Product {
  id:  string;
  name: string;
  price: number;
  image: string;
  rating: number;
}
interface ProductCardProps {
  product: Product;
}


export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();
  const { addItem } = useCartQuery()
  const { addToCart } = useCartStore()

  const addToCartItem = async () => {
    const item = {
      productId: product.id,
      quantity: 1,
      unitPrice: product.price
    }
    try {
      addItem(item)
    } catch (error) {
      console.log(error)
    }
    const newItem = {
      accountId: localStorage.getItem("accountId") || "",
      productId: product.id,
      quantity: 1,
      unitPrice: product.price,
      total: product.price,
      productName: product.name,
      productImage: product.image,
      key: product.id,
    };

    addToCart(newItem)

  };

  return (
    <div className="border rounded-lg p-4 shadow-md flex flex-col cursor-pointer">
      <div
        className="relative w-full aspect-square"
        onClick={() => router.push(`products/${product.id}`)}
      >
        {/* <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-lg"
        /> */}
      </div>
      <h3
        className="mt-4 text-lg font-semibold text-gray-900 hover:underline"
        onClick={() => router.push(`products/${product.id}`)}
      >
        {product.name}
      </h3>
      <div className="flex items-center mt-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index} className={`text-yellow-500 ${index < Math.floor(product.rating) ? 'text-yellow-500' : 'text-gray-300'}`}>
            ★
          </span>
        ))}
        <span className="ml-2 text-gray-600 text-sm">12k (đã bán)</span>
      </div>
      <p className="text-red-500 font-medium mt-2">{
        new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(product.price)
      }</p>
      <Button className="mt-4 w-full" onClick={() => addToCartItem()}>
        Thêm vào giỏ hàng
      </Button>
    </div>
  );
}
