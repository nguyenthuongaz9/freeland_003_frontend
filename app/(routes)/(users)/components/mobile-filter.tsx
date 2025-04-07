"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
// import { X } from "lucide-react";
import { useProductFilterStore } from "@/hooks/use-product-filter-store";

interface MobileFilterProps {
  mobileFiltersOpen: boolean;
  setMobileFiltersOpen: (open: boolean) => void;
  brands: { id: string; name: string }[];
  categories: { id: string; name: string }[];
}

export default function MobileFilter({
  mobileFiltersOpen,
  setMobileFiltersOpen,
  brands,
  categories,
}: MobileFilterProps) {
  const { brandId, categoryId, setFilters } = useProductFilterStore();

  const handleFilterChange = (filterType: "brandId" | "categoryId", value: string) => {
    setFilters({ [filterType]: value === (filterType === "brandId" ? brandId : categoryId) ? null : value });
  };

  return (
    <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
      <SheetContent side="right" className="w-full max-w-xs p-4 bg-white">
        <SheetHeader className="flex items-center justify-between border-b pb-2">
          <SheetTitle className="text-lg font-medium text-gray-900">Bộ lọc</SheetTitle>
          
        </SheetHeader>

        {/* Bộ lọc thương hiệu */}
        <Accordion type="multiple" className="mt-4">
          <AccordionItem value="brandId">
            <AccordionTrigger className="text-gray-900 font-medium">Thương hiệu</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 px-2">
                {brands.map((brand) => (
                  <div key={brand.id} className="flex items-center gap-3">
                    <Checkbox
                      id={`filter-mobile-brand-${brand.id}`}
                      checked={brandId === brand.id}
                      onCheckedChange={() => handleFilterChange("brandId", brand.id)}
                    />
                    <label htmlFor={`filter-mobile-brand-${brand.id}`} className="text-gray-500">
                      {brand.name}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Bộ lọc loại sản phẩm */}
          <AccordionItem value="categoryId">
            <AccordionTrigger className="text-gray-900 font-medium">Loại sản phẩm</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 px-2">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center gap-3">
                    <Checkbox
                      id={`filter-mobile-category-${category.id}`}
                      checked={categoryId === category.id}
                      onCheckedChange={() => handleFilterChange("categoryId", category.id)}
                    />
                    <label htmlFor={`filter-mobile-category-${category.id}`} className="text-gray-500">
                      {category.name}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </SheetContent>
    </Sheet>
  );
}
