import React from 'react'
import DeliveryDetail from './components/delivery-detail'
import DeliveryMethod from './components/delivery-method'
import CheckoutSummary from './components/checkout-summary'
// import ProductItem from '../cart/components/product-item'
import Breadcrumb from '../../components/bread-crumb'

const CheckoutPage = () => {
    return (
        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16 rounded-md shadow-md">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <Breadcrumb/>
            </div>
            <form action="#" className="mx-auto max-w-screen-xl px-4 2xl:px-0">

                <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
                    <div className="min-w-0 flex-1 space-y-8">

                        <DeliveryDetail />

                        {/* <ProductItem /> */}



                        <DeliveryMethod />

                    </div>

                    <CheckoutSummary />

                </div>
            </form>
        </section>
    )
}

export default CheckoutPage
