"use client"

import { useState } from 'react'
import { ChevronDown, Filter } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import MobileFilter from '../../../components/mobile-filter'
import ProductList from './product-list'

import { useProductQuery } from '@/hooks/use-product-query'
import { useBrandQuery } from '@/hooks/use-brand-query'
import { useCategoryQuery } from '@/hooks/use-category-query'
import { useProductFilterStore } from '@/hooks/use-product-filter-store'

const sortOptions = [
  { name: 'Bán chạy nhất', value: 'best_selling' },
  { name: 'Đánh giá cao', value: 'top_rated' },
  { name: 'Mới nhất', value: 'newest' },
  { name: 'Giá: Thấp đến Cao', value: 'price_asc' },
  { name: 'Giá: Cao đến Thấp', value: 'price_desc' },

]

interface Category{
  id: string;
  name: string;
}
interface Brand{
  id: string;
  name: string;
}
export default function ProductsContainer() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const { brandId, categoryId, selectedSort, page, setFilters, setPage } = useProductFilterStore()
  const filters = { brandId, categoryId }

  const { data: brands = [] } = useBrandQuery()
  const { data: categories = [] } = useCategoryQuery()
  const { products, totalPages } = useProductQuery({ page, filters, sort: selectedSort })

  const handleBrandFilterChange = (value: string) => {
    setFilters({ brandId: brandId === value ? '' : value })
  }

  const handleCategoryFilterChange = (value: string) => {
    setFilters({ categoryId: categoryId === value ? '' : value })
  }

  return (
    <div className="bg-white rounded-md mt-5">
      <MobileFilter
        mobileFiltersOpen={mobileFiltersOpen}
        setMobileFiltersOpen={setMobileFiltersOpen}
        brands={brands}
        categories={categories}
      />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Sản phẩm Yến Sào</h1>
          <div className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sắp xếp <ChevronDown className="ml-1 h-5 w-5 text-gray-400" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                {sortOptions.map((option) => (
                  <DropdownMenuItem key={option.value} asChild>
                    <button
                      className={selectedSort === option.value ? "font-medium text-gray-900" : "text-gray-500"}
                    // onClick={() => setSelectedSort(option.value)}
                    >
                      {option.name}
                    </button>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              variant="ghost"
              onClick={() => setMobileFiltersOpen(true)}
              className="ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
            >
              <Filter className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <section aria-labelledby="products-heading" className="pt-6 pb-24">
          <h2 id="products-heading" className="sr-only">Danh sách sản phẩm</h2>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            <aside className="hidden lg:block">
              <h3 className="text-sm font-medium text-gray-900">Thương hiệu</h3>
              <ul className="mt-2 space-y-2">
                {brands.map((brand:Brand) => (
                  <li key={brand.id} className="flex items-center space-x-2">
                    <label className="flex items-center text-gray-700">
                      <input
                        type="checkbox"
                        name="brand"
                        className="mr-2"
                        id={`brand-${brand.id}`}
                        checked={brandId === brand.id}
                        onChange={() => handleBrandFilterChange(brand.id)}
                      />
                      {brand.name}
                    </label>
                  </li>
                ))}
              </ul>

              <h3 className="mt-6 text-sm font-medium text-gray-900">Thể loại</h3>
              <ul className="mt-2 space-y-2">
                {categories.map((category:Category) => (
                  <li key={category.id} className="flex items-center space-x-2">
                    <label className="flex items-center text-gray-700">
                      <input
                        type="checkbox"
                        name="category"
                        className="mr-2"
                        id={`category-${category.id}`}
                        checked={categoryId === category.id}
                        onChange={() => handleCategoryFilterChange(category.id)}
                      />
                      {category.name}
                    </label>
                  </li>
                ))}
              </ul>
            </aside>

            <div className="lg:col-span-3">
              <ProductList products={products} />
              <Pagination className="mt-10">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      className="cursor-pointer"
                      onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    />
                  </PaginationItem>

                  {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                    <PaginationItem key={pageNumber}>
                      <PaginationLink
                        className="cursor-pointer"
                        isActive={page === pageNumber}
                        onClick={() => setPage(pageNumber)}
                      >
                        {pageNumber}
                      </PaginationLink>
                    </PaginationItem>
                  ))}

                  <PaginationItem>
                    <PaginationNext
                      className="cursor-pointer"
                      onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
