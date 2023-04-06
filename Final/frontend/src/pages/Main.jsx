import '../index.css';
import Header from '../header/Header';
import { Footer } from '../footer/Footer';
import { Banner } from '../banner/Banner';
import { OfferBanner } from '../offer-banner/OfferBanner';
import { About } from '../about/About';
import { Testimonial } from '../testimonial/Testimonial';
import { WhoWeAre } from '../who-we-are/WhoWeAre';
import { Gallery } from '../gallery/Gallery';
import { Blog } from '../blog/Blog';
import { Newsletter } from '../newsletter/Newsletter';
import { Offer } from '../offer/Offer';
import { Shop } from '../shop/Shop';

function Main() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <OfferBanner></OfferBanner>
      <About></About>
      <Shop></Shop>
      <Testimonial></Testimonial>
      <Offer></Offer>
      <WhoWeAre></WhoWeAre>
      <Gallery></Gallery>
      <Blog></Blog>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </>
  );
}

export default Main;
