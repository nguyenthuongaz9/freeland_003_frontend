import { Metadata } from "next";
import Products from "./components";



export const metadata: Metadata = {
  title: "Products",
};

export default async function ProductsPage() {
  return <Products />;
}
