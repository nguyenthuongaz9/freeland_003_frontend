

import OrderInfo from "./components/order-info";

const orders = [
  { id: "100001", date: "2024-03-01", status: "Chờ thanh toán", total: 500000, address: "123 Đường Trần Phú, TP.HCM",
    items: [
      { id: "1", name: "Nước Yến Sào Cao Cấp", image: "/images/yensao1.jpg", price: 250000, quantity: 2 },
    ] },
  { id: "100002", date: "2024-02-28", status: "Đang vận chuyển", total: 1200000, address: "456 Đường Lê Lợi, Hà Nội",
    items: [
      { id: "2", name: "Yến Chưng Táo Đỏ", image: "/images/yensao2.jpg", price: 400000, quantity: 3 },
    ] },
  { id: "100003", date: "2024-02-27", status: "Hoàn thành", total: 800000, address: "789 Đường Nguyễn Huệ, Đà Nẵng",
    items: [
      { id: "3", name: "Nước Yến Sào Tổ Chưng", image: "/images/yensao3.jpg", price: 800000, quantity: 1 },
    ] },
];


interface Props {
  params: Promise<{ orderId: string}>;
  searchParams: Promise<{ sortOrder: string }>;
}
export default async function OrderIdPage(props: Props) {
    const  orderId = (await props.params).orderId
  const order = orders.find(order => order.id === orderId);

  if (!order) return <p className="text-center text-gray-500">Đơn hàng không tồn tại</p>;

  return (
    <OrderInfo order={order}/>
  );
}
