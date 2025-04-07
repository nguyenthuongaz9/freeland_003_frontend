"use client"

import React, { useState } from 'react';
import { Radio } from 'lucide-react';

const DeliveryMethod = () => {
    const [selectedMethod, setSelectedMethod] = useState('');

    const handleSelect = (method:string) => {
        setSelectedMethod(method);
    };

    return (
        <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Phương thức thanh toán</h3>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {/* VNPay */}
                <div 
                    className={`rounded-lg border p-4 ps-4 cursor-pointer ${selectedMethod === 'vnpay' ? 'border-primary-500 bg-blue-100 dark:bg-blue-900' : 'border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800'}`}
                    onClick={() => handleSelect('vnpay')}
                >
                    <div className="flex items-start">
                        <div className="flex h-5 items-center">
                            <Radio className={`h-4 w-4 ${selectedMethod === 'vnpay' ? 'text-primary-600' : 'text-gray-400'}`} />
                        </div>
                        <div className="ms-4 text-sm">
                            <label className="font-medium leading-none text-gray-900 dark:text-white">
                                Thanh toán qua VNPay {selectedMethod === 'vnpay' && '(Đã chọn)'}
                            </label>
                            <p className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">
                                Thanh toán an toàn và nhanh chóng qua VNPay
                            </p>
                        </div>
                    </div>
                </div>

                {/* MoMo */}
                <div 
                    className={`rounded-lg border p-4 ps-4 cursor-pointer ${selectedMethod === 'momo' ? 'border-primary-500 bg-blue-100 dark:bg-blue-900' : 'border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800'}`}
                    onClick={() => handleSelect('momo')}
                >
                    <div className="flex items-start">
                        <div className="flex h-5 items-center">
                            <Radio className={`h-4 w-4 ${selectedMethod === 'momo' ? 'text-primary-600' : 'text-gray-400'}`} />
                        </div>
                        <div className="ms-4 text-sm">
                            <label className="font-medium leading-none text-gray-900 dark:text-white">
                                Thanh toán qua MoMo {selectedMethod === 'momo' && '(Đã chọn)'}
                            </label>
                            <p className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">
                                Thanh toán dễ dàng qua ví MoMo
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeliveryMethod;
