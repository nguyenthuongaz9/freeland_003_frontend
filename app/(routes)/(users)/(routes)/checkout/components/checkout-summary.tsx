"use client"

import { Button } from '@/components/ui/button';
import React from 'react';

const CheckoutSummary = () => {
    return (
        <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
            <div className="flow-root">
                <div className="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
                    <dl className="flex items-center justify-between gap-4 py-3">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Tạm tính</dt>
                        <dd className="text-base font-medium text-gray-900 dark:text-white">8.094.000₫</dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4 py-3">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Giảm giá</dt>
                        <dd className="text-base font-medium text-green-500">0₫</dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4 py-3">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Nhận tại cửa hàng</dt>
                        <dd className="text-base font-medium text-gray-900 dark:text-white">99.000₫</dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4 py-3">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Thuế</dt>
                        <dd className="text-base font-medium text-gray-900 dark:text-white">199.000₫</dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4 py-3">
                        <dt className="text-base font-bold text-gray-900 dark:text-white">Tổng cộng</dt>
                        <dd className="text-base font-bold text-gray-900 dark:text-white">8.392.000₫</dd>
                    </dl>
                </div>
            </div>

            <Button type="submit" className="w-full bg-[#242e52] p-6 font-semibold rounded-full hover:bg-opacity-90">
                Thanh toán ngay
            </Button>
        </div>
    );
}

export default CheckoutSummary;
