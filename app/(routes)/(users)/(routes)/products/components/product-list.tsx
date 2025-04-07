import ProductCard from "./product-card";

type Product = {
  id:  string;
  name: string;
  price: number;
  image: string;
  rating: number;
}

interface productListProps{
  products:Product[];
}



export default function ProductList({
  products
} : productListProps) {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

