
"use client"
import React from 'react';
import ReviewItem from './review-item';
import ProductDesciption from './product-desciption';
import ProductInfo from './product-info';
import RelatedProducts from './related-product';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useCommentQuery } from '@/hooks/use-comment-query';
import { hostname } from '@/constants/hostname';

interface ProductDetailContainerProps {
  productId: string;
}

interface Comment {
  id: string;
  content: string;
  rating: number;
  createdAt: string;
  fullname: string;
  email: string;
}

const ProductDetailContainer = ({ productId }: ProductDetailContainerProps) => {

  console.log(productId)
  const { data: product } = useQuery({
    queryKey: ['product'],
    queryFn: async () => {
      const response = await axios.get(`${hostname}/products/public/${productId}`, {
        headers: {
          'ngrok-skip-browser-warning': 'true'
        }
      });
      console.log(response)
      return response.data.data;
    },
    enabled: !!productId, 
  });
  console.log(product)

  const { data: commentData } = useCommentQuery({ productId });
  const comments: Comment[] = commentData?.content || [];

  if (!product) return null;

  return (
    <div>
      <div className="bg-white py-2 rounded-md shadow-md">
        <ProductInfo
          description={product.description}
          name={product.productName}
          // stock={product.quantity} 
          price={product.price}
        />
        <main className="pt-10 sm:pt-16">
          <div className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="font-semibold md:text-md text-sm">Mô tả sản phẩm</h2>
          </div>

          <div className="mx-auto max-w-2xl px-4 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16">
            <ProductDesciption />

            <div className="lg:col-span-2 lg:pr-8">
              <section
                aria-labelledby="reviews-heading"
                className="border-t border-gray-200 pt-10 lg:pt-16"
              >
                <div className="space-y-10 pb-10">
                  {comments.map((comment) => (
                    <div key={comment.id}>
                      <ReviewItem
                        // id={comment.id}
                        content={comment.content}
                        rating={comment.rating}
                        createdAt={new Date(comment.createdAt)}
                        fullname={comment.fullname}
                        // email={comment.email}
                      />
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>

      <RelatedProducts />
    </div>
  );
};

export default ProductDetailContainer;
