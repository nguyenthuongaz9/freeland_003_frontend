"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
// import Image from "next/image";

const orders = [
    {
        id: "100001", date: "2024-03-01", status: "Chờ thanh toán", total: 350000, items: [
            { id: 1, name: "Nước Yến Sào Cao Cấp", image: "/images/nuoc-yen-1.jpg", price: 350000, quantity: 1 },
        ]
    },
    {
        id: "100002", date: "2024-02-28", status: "Đang vận chuyển", total: 780000, items: [
            { id: 2, name: "Yến Chưng Đông Trùng Hạ Thảo", image: "/images/nuoc-yen-2.jpg", price: 390000, quantity: 2 },
        ]
    },
    {
        id: "100003", date: "2024-02-27", status: "Hoàn thành", total: 1200000, items: [
            { id: 3, name: "Combo 6 Lọ Nước Yến Chưng", image: "/images/nuoc-yen-3.jpg", price: 200000, quantity: 6 },
        ]
    },
];

const statusTabs = [
    "Tất cả đơn", "Chờ thanh toán", "Đang vận chuyển", "Chờ giao hàng", "Hoàn thành", "Đã hủy"
];

export default  function PurchasePage() {
    const [activeTab, setActiveTab] = useState("Tất cả đơn");
    const router = useRouter()

    const filteredOrders = activeTab === "Tất cả đơn" ? orders : orders.filter(order => order.status === activeTab);

    return (
        <div className="w-full p-4 min-h-[50vh]">
            <h2 className="text-lg sm:text-xl font-bold mb-4 max-md:text-center">Lịch sử mua hàng</h2>

            {/* Tabs */}
            <div className="flex overflow-x-auto space-x-2 pb-2 mb-4 border-b">
                {statusTabs.map(status => (
                    <button
                        key={status}
                        className={`whitespace-nowrap px-3 py-2 text-sm sm:text-base ${activeTab === status ? "border-b-2 border-blue-500 font-bold" : "text-gray-600"}`}
                        onClick={() => setActiveTab(status)}
                    >
                        {status}
                    </button>
                ))}
            </div>

            {/* Order List */}
            <div className="space-y-4">
                {filteredOrders.length > 0 ? (
                    filteredOrders.map(order => (
                        <div key={order.id} className="border p-3 sm:p-4 rounded-md bg-white shadow-sm">
                            <div className="flex justify-between items-center mb-2 text-sm sm:text-base">
                                <span className="text-gray-500">Mã đơn: {order.id}</span>
                                <span className="font-semibold text-blue-600">{order.status}</span>
                            </div>
                            <div className="space-y-2">
                                {order.items.map(item => (
                                    <div key={item.id} className="flex items-center gap-3 sm:gap-4 border-b pb-2">
                                        <img src={item.image} alt={item.name} className="w-12 h-12 sm:w-16 sm:h-16 object-cover" />
                                        <div className="flex-1">
                                            <p className="font-semibold text-sm sm:text-base">{item.name}</p>
                                            <p className="text-gray-500 text-xs sm:text-sm">{item.quantity} x {item.price.toLocaleString()}đ</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-between items-center mt-2 text-sm sm:text-base">
                                <span className="font-bold">Tổng tiền: {order.total.toLocaleString()}đ</span>
                                <Button onClick={() => router.push(`/purchase/${order.id}`)} className="bg-[#242e52] px-4 py-2 text-xs sm:text-sm font-semibold rounded-full hover:bg-opacity-90">
                                    Xem chi tiết
                                </Button>
                            </div>
                        </div>
                    ))
                ) : (
                        <p className="text-gray-500 text-center text-sm sm:text-base">Không có đơn hàng nào</p>
                )}
            </div>
        </div>
    );
}
