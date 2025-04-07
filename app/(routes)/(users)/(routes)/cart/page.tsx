"use client"

import React from 'react'
import ProductItem from './components/product-item'
import OrderSummary from './components/order-summary'
import { useCartStore } from '@/hooks/use-cart-store'

const CartPage = () => {


  const { cart } = useCartStore();
  console.log("cart", cart)

  if(cart.length === 0){
    return <div>
      Không có sản phẩm nào trong giỏ hàng
    </div>
  }

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16 rounded-md shadow-md">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Giỏ hàng</h2>
        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div className="space-y-6">

              {cart.map((item, index) => (
                <ProductItem
                  productId={item.productId}
                  accountId={item.accountId}
                  key={`${item.productId}-${index}`}
                  name={item.productName}
                  totalPrice={item.total}
                  image={item.productImage}
                  productQuantity={item.quantity}
                  // unitPrice={item.unitPrice}
                />
              ))}
             
            </div>

          </div>

          <OrderSummary/>


        </div>
      </div>
    </section>
  )
}

export default CartPage
