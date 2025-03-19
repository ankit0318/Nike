import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffers,
  CustomerReviews,
  Subscribe,
  Footer,
} from "./sections";
import Nav from "./components/Nav";
export default function App() {
  return (
    <main className="relative">
      <Nav />
      <section id="home" className="max-lg:py-28 pb-24 pr-0 xl:pl-16 xl:pr-0 ">
        <Hero />
      </section>
      <section id='products'
      className="sm:py-24 sm:px-16 py-12 px-8">
      
        <PopularProducts />
      </section>
      <section id='about-us'
      className="sm:py-24 sm:px-28 py-12 px-16 ">
        <SuperQuality />
      </section>
      <section 
      className="sm:py-24 sm:px-28 py-12 px-16 ">
        <Services />
      </section>
      <section className="sm:py-24 sm:px-28 py-12 px-16 ">
        <SpecialOffers />
      </section>
      <section className="sm:py-24 sm:px-28 py-12 px-16 bg-slate-50 ">
        <CustomerReviews />
      </section>
      <section id="contact-us" className="sm:py-24 sm:px-28 py-12 px-16 ">
        <Subscribe />
      </section>
      <section className="sm:py-24 sm:px-28 py-12 px-16 bg-black">
        <Footer />
      </section>
    </main>
  );
}
