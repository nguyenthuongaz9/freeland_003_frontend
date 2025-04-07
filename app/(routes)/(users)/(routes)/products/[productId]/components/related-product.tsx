// import ProductCard from "@/app/(routes)/(users)/(routes)/products/components/product-card";
import { Button } from "@/components/ui/button";



export default function RelatedProducts() {

    // const relatedProducts = [
    //     { id: 1, name: 'Giày Sneaker', price: '1.200.000₫', image: '/images/shoe1.jpg', rating: 4.5, reviews: 120 },
    //     { id: 2, name: 'Áo Hoodie', price: '450.000₫', image: '/images/hoodie.jpg', rating: 4.7, reviews: 98 },
    //     { id: 3, name: 'Balo Laptop', price: '650.000₫', image: '/images/backpack.jpg', rating: 4.3, reviews: 75 },
    //     { id: 4, name: 'Tai nghe Bluetooth', price: '1.500.000₫', image: '/images/headphone.jpg', rating: 4.8, reviews: 200 },
    //     { id: 5, name: 'Đồng hồ thông minh', price: '2.300.000₫', image: '/images/smartwatch.jpg', rating: 4.6, reviews: 150 },
    // ];
    return (
        <div className="mt-12 bg-white border-box p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Sản phẩm đề xuất</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {/* {relatedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))} */}
            </div>

            <div className="flex items-center justify-center mt-2">
                <Button>xem tất cả</Button>
            </div>
        </div>
    );
}
