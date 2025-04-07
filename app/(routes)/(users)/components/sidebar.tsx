"use client";

import { useSidebarStore } from "@/hooks/use-sidebar-store";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

export const Sidebar = () => {
  const { isOpen, onClose } = useSidebarStore();


  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="w-64 bg-white">
        <SheetHeader>
          <SheetTitle className="text-lg font-semibold text-gray-800">
            Danh mục
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-4 flex flex-col gap-4">
          {["Tổ yến Khánh Hòa", "Quà tặng cao cấp", "Thương hiệu", "Yến chưng tươi"].map(
            (text, index) => (
              <SheetClose asChild key={index}>
                <a
                  href="/products"
                  className="text-gray-700 text-md hover:text-red-500 transition-all duration-300"
                >
                  {text}
                </a>
              </SheetClose>
            )
          )}
        </nav>
      </SheetContent>
    </Sheet>  );
};

