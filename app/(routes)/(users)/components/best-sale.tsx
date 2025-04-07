import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
// import Image from "next/image"; // Import Image component from next/image

const products = [
  {
    id: 1,
    name: "Yến sào thô cao cấp",
    price: "2.500.000đ",
    image: "/images/1.jpg",
    rating: 5,
    reviews: 120,
  },
  {
    id: 2,
    name: "Yến tinh chế hộp 100g",
    price: "3.200.000đ",
    image: "/images/2.jpg",
    rating: 4,
    reviews: 85,
  },
  {
    id: 3,
    name: "Yến chưng sẵn 6 hũ",
    price: "890.000đ",
    image: "/images/3.jpg",
    rating: 4.5,
    reviews: 60,
  },
  {
    id: 4,
    name: "Phụ kiện chế biến yến",
    price: "150.000đ",
    image: "/images/1.jpg",
    rating: 3,
    reviews: 30,
  },
];

const BestSale = () => {

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Sản phẩm giảm giá</h2>
        <Link href="/sale">
          <Button variant="outline">Xem tất cả</Button>
        </Link>
      </div>
      <ScrollArea className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <Card key={product.id} className="w-full">
              <CardContent className="p-4">
                <img
                  src={product.image || ""}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded"
                  width={300} // Set a fixed width for the image
                  height={160} // Set a fixed height for the image
                />
                <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
                <p className="text-red-500 font-bold">{product.price}</p>
                <div className="flex items-center mt-1 text-sm text-gray-600">
                  <span className="mr-2">⭐ {product.rating}</span>
                  <span>({product.reviews} đánh giá)</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default BestSale;
