import BestSale from "../components/best-sale";
import { HomeCarousel } from "../components/home-carousel";
import LinkSocialMedia from "../components/link-social-media";
import NewsHome from "../components/news-home";

const PageHome = () => {
  return (
    <>
      <HomeCarousel />
      <BestSale />
      <LinkSocialMedia />
      <NewsHome />
    </>
  );
};
export default PageHome;
