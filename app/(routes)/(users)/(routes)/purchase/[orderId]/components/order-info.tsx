"use client"

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
// import Image from "next/image";

// Define interfaces for the order and item
interface OrderItem {
    id: string;
    name: string;
    image: string;
    quantity: number;
    price: number;
}

interface Order {
    id: string;
    date: string;
    status: string;
    address: string;
    items: OrderItem[];
    total: number;
}

interface OrderInforProps {
    order: Order;
}

const OrderInfo = ({
    order
}: OrderInforProps) => {

    const router = useRouter();
    
    return (
        <div className="p-4 max-w-2xl mx-auto bg-white shadow-md rounded-md">
            <h2 className="text-xl font-bold mb-4">Chi tiết đơn hàng</h2>
            <p><strong>Mã đơn:</strong> {order.id}</p>
            <p><strong>Ngày đặt:</strong> {order.date}</p>
            <p><strong>Trạng thái:</strong> <span className="text-blue-600 font-semibold">{order.status}</span></p>
            <p><strong>Địa chỉ giao hàng:</strong> {order.address}</p>

            <h3 className="mt-4 font-semibold">Sản phẩm</h3>
            <div className="border-t mt-2 space-y-2">
                {order.items.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 py-2 border-b">
                        <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-16 h-16 object-cover" 
                            width={64} // Set the width of the image
                            height={64} // Set the height of the image
                        />
                        <div className="flex-1">
                            <p className="font-semibold">{item.name}</p>
                            <p className="text-gray-500">{item.quantity} x {item.price.toLocaleString()}đ</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-4 flex justify-between items-center font-bold text-lg">
                <span>Tổng tiền:</span>
                <span>{order.total.toLocaleString()}đ</span>
            </div>

            <Button 
                onClick={() => router.push("/purchase")}  
                className="bg-[#242e52] px-4 py-2 text-xs sm:text-sm font-semibold rounded-full hover:bg-opacity-90 mt-4"
            >
                Quay lại lịch sử mua hàng
            </Button>
        </div>
    )
}

export default OrderInfo;
