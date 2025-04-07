"use client";

import { Menu, Search, ShoppingCart } from "lucide-react";
import { UserDropdownMenu } from "./user-dropdown-menu";
import Link from "next/link";
import { useSidebarStore } from "@/hooks/use-sidebar-store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useProductQuery } from "@/hooks/use-product-query";
import { useCartStore } from "@/hooks/use-cart-store";

// Define the Product interface
interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  rating: number;
  reviews: number;
}

export const Header = () => {
  const { onOpen } = useSidebarStore();
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const { cart } = useCartStore();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchTerm]);

  const { products, isFetching } = useProductQuery({
    page: 1,
    sort: "id,desc",
    filters: {},
    search: debouncedSearch,
  });

  return (
    <header className="fixed w-full h-20 top-0 left-0 z-50">
      <div className="relative flex items-center justify-between bg-[#242e52] w-full px-6 py-4 md:px-60 shadow-xl drop-shadow-lg z-30">
        <button className="md:hidden flex items-center justify-center" onClick={onOpen}>
          <Menu className="text-white" />
        </button>

        <span className="text-white font-bold text-xl cursor-pointer">Logo</span>

        {/* Ô tìm kiếm */}
        <div className="hidden md:w-[35rem] h-[3.3rem] bg-white rounded-full md:flex items-center gap-2 relative ">
          <div className="ml-2 w-10 h-10 flex items-center aspect-square justify-center rounded-full border-2 border-[#2d3859]">
            <Search className="w-5 h-5 text-[#2d3859]" />
          </div>
          <input
            className="outline-none w-[90%] pr-5 mr-5 py-2 text-[#2d3859]"
            placeholder="Tìm..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {debouncedSearch && (
            <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-lg mt-1 z-50">
              {isFetching ? (
                <p className="p-2 text-gray-500">Đang tìm kiếm...</p>
              ) : products.length > 0 ? (
                products.map((product: Product) => (
                  <div
                    key={product.id}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => router.push(`/products/${product.id}`)}
                  >
                    {product.name}
                  </div>
                ))
              ) : (
                <p className="p-2 text-gray-500">Không tìm thấy sản phẩm</p>
              )}
            </div>
          )}
        </div>

        <div className="flex items-center gap-10 text-white">
          <UserDropdownMenu />
          <div className="relative">
            <ShoppingCart onClick={() => router.push("/cart")} size={35} className="font-semibold cursor-pointer" />
            <span className="w-5 h-5 absolute -top-2 -right-2 bg-red-500 text-white rounded-full flex items-center justify-center text-xs">
              {cart?.length || 0}
            </span>
          </div>
        </div>
      </div>

      <div className="hidden w-full md:flex items-center gap-10 bg-white shadow-md md:px-60 py-2 z-50">
        <Link href="/products" className="group">
          <p className="text-[#2d3859] font-semibold md:text-lg group-hover:text-[#bf6b21] transition-all duration-300 relative">
            Tổ yến Khánh Hòa
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#bf6b21] group-hover:w-full transition-all duration-300"></span>
          </p>
        </Link>
        <Link href="" className="group">
          <p className="text-[#2d3859] font-semibold md:text-lg group-hover:text-[#bf6b21] transition-all duration-300 relative">
            Quà tặng cao cấp
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#bf6b21] group-hover:w-full transition-all duration-300"></span>
          </p>
        </Link>
        <Link href="" className="group">
          <p className="text-[#2d3859] font-semibold md:text-lg group-hover:text-[#bf6b21] transition-all duration-300 relative">
            Thương hiệu
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#bf6b21] group-hover:w-full transition-all duration-300"></span>
          </p>
        </Link>
        <Link href="" className="group">
          <p className="text-[#2d3859] font-semibold md:text-lg group-hover:text-[#bf6b21] transition-all duration-300 relative">
            Yến chưng tươi
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#bf6b21] group-hover:w-full transition-all duration-300"></span>
          </p>
        </Link>
      </div>
    </header>
  );
};
