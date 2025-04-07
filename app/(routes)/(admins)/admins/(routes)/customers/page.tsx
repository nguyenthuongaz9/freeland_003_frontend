import { Metadata } from "next";
import Customers from "./components";



export const metadata: Metadata = {
  title: "Customers",
};

export default async function CustomersPage() {
  return <Customers />;
}
