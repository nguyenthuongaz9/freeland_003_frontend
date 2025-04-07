

import ProductDetailContainer from './components/product-detail-container';
// import RelatedProducts from './components/related-product';

interface Props {
    params: Promise<{ productId: string}>;
    searchParams: Promise<{ sortOrder: string }>;
  }
  
const ProductIdPage = async (props: Props) => {


    const productId = (await props.params).productId;


    return (
        <div >             
            <ProductDetailContainer productId={productId} />
        </div>
    );
};

export default ProductIdPage;
