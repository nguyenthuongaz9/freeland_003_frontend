import { HomeCarousel } from "../../components/home-carousel";
import ProductsContainer from "./components/products-container";




export default function ProductPage(){
    return (
        <div className="w-full">
            <HomeCarousel/>
            <ProductsContainer/> 
        
        </div>
    )
}
