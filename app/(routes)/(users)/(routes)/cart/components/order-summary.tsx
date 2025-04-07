"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";


const OrderSummary = () => {
  const router = useRouter();

  const [isDelivery, setIsDelivery] = useState(false);
  const [isPickup, setIsPickup] = useState(false);
  const [voucherCode, setVoucherCode] = useState("");
  const [voucherDiscount, setVoucherDiscount] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const shippingFee = 50000;
  const storePickupFee = 99000;
  const originalPrice = 7592000;
  const discount = 299000;
  const tax = 799000;

  const validVouchers: Record<string, number> = {
    SALE50: 50000,
    DISCOUNT100: 100000,
  };

  const handleDeliveryChange = () => {
    setIsDelivery(!isDelivery);
    if (!isDelivery) setIsPickup(false);
  };

  const handlePickupChange = () => {
    setIsPickup(!isPickup);
    if (!isPickup) setIsDelivery(false);
  };

  const handleApplyVoucher = (e: React.FormEvent) => {
    e.preventDefault();
    if (voucherCode in validVouchers) {
      setVoucherDiscount(validVouchers[voucherCode]);
      setErrorMessage("");
    } else {
      setVoucherDiscount(0);
      setErrorMessage("Mã giảm giá không hợp lệ!");
    }
  };

  const formatCurrency = (amount: number) =>
    amount.toLocaleString("vi-VN", { style: "currency", currency: "VND" });

  const total = isDelivery
    ? originalPrice - discount - voucherDiscount + shippingFee + tax
    : isPickup
    ? originalPrice - discount - voucherDiscount + storePickupFee + tax
    : originalPrice - discount - voucherDiscount + tax;

  // const handleCheckout = () => {
  //   router.push("/checkout");
  // };

  return (
    <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
      <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
        <p className="text-xl font-semibold text-gray-900 dark:text-white">
          Tóm tắt đơn hàng
        </p>

        <div className="space-y-4">
          <div className="space-y-2">
            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                Giá gốc
              </dt>
              <dd className="text-base font-medium text-gray-900 dark:text-white">
                {formatCurrency(originalPrice)}
              </dd>
            </dl>

            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                Tiết kiệm
              </dt>
              <dd className="text-base font-medium text-green-600">
                -{formatCurrency(discount)}
              </dd>
            </dl>

            {voucherDiscount > 0 && (
              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Giảm giá từ voucher
                </dt>
                <dd className="text-base font-medium text-green-600">
                  -{formatCurrency(voucherDiscount)}
                </dd>
              </dl>
            )}

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="delivery"
                  checked={isDelivery}
                  onChange={handleDeliveryChange}
                  className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                />
                <label
                  htmlFor="delivery"
                  className="text-sm font-medium text-gray-900 dark:text-white"
                >
                  Giao tận nơi (+{formatCurrency(shippingFee)})
                </label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="pickup"
                  checked={isPickup}
                  onChange={handlePickupChange}
                  className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                />
                <label
                  htmlFor="pickup"
                  className="text-sm font-medium text-gray-900 dark:text-white"
                >
                  Nhận tại cửa hàng (+{formatCurrency(storePickupFee)})
                </label>
              </div>
            </div>

            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                Thuế
              </dt>
              <dd className="text-base font-medium text-gray-900 dark:text-white">
                {formatCurrency(tax)}
              </dd>
            </dl>
          </div>

          <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
            <dt className="text-base font-bold text-gray-900 dark:text-white">
              Tổng cộng
            </dt>
            <dd className="text-base font-bold text-gray-900 dark:text-white">
              {formatCurrency(total)}
            </dd>
          </dl>
        </div>

        <Button onClick={()=> router.push('/checkout')} type="submit" className="w-full bg-[#242e52] p-6 font-semibold rounded-full hover:bg-opacity-90">
            Tiến hành thanh toán
          </Button>
        <div className="flex items-center justify-center gap-2">
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            hoặc
          </span>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
          >
            Tiếp tục mua sắm
            <ArrowLeft className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
        <form onSubmit={handleApplyVoucher} className="space-y-4">
          <div>
            <label
              htmlFor="voucher"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Bạn có mã giảm giá hoặc thẻ quà tặng không?
            </label>
            <input
              type="text"
              id="voucher"
              value={voucherCode}
              onChange={(e) => setVoucherCode(e.target.value)}
              className="block w-full rounded-lg border bg-gray-50 p-2.5 text-sm text-gray-900"
              placeholder="Nhập mã tại đây"
              required
            />
            {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
          </div>
          <Button type="submit" className="w-full bg-[#242e52] p-6 font-semibold rounded-full hover:bg-opacity-90">
            Áp dụng mã
          </Button>
        </form>
      </div>
    </div>
  );
};

export default OrderSummary;
