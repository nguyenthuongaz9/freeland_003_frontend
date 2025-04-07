import { Metadata } from "next";
import Coupons from "./components";



export const metadata: Metadata = {
  title: "Coupons",
};

export default async function CouponsPage() {
  return <Coupons />;
}
