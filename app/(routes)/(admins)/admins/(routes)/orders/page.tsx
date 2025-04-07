import { Metadata } from "next";
import Orders from "./components";



export const metadata: Metadata = {
  title: "Orders",
};

export default async function OrdersPage() {
  return <Orders />;
}
