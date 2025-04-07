import { MdOutlineDashboard } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCoupon2Line } from "react-icons/ri";
import { TbSettings } from "react-icons/tb";
import { TbTag } from "react-icons/tb";
import { TbBriefcase } from "react-icons/tb";
import { MdOutlineShoppingCart } from "react-icons/md";

export const navItems = [
  {
    title: "Dashboard",
    url: "/admins",
    icon: <MdOutlineDashboard />,
  },
  {
    title: "Products",
    url: "/admins/products",
    icon: <MdOutlineShoppingCart />,
  },
  {
    title: "Categories",
    url: "/admins/categories",
    icon: <TbTag />,
  },
  {
    title: "Customers",
    url: "/admins/customers",
    icon: <LuUsers />,
  },
  {
    title: "Orders",
    url: "/admins/orders",
    icon: <TbTruckDelivery />,
  },
  {
    title: "Vouchers",
    url: "/admins/vouchers",
    icon: <RiCoupon2Line />,
  },
  {
    title: "Staff",
    url: "/admins/staff",
    icon: <TbBriefcase />,
  },
  
];
