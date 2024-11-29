import HotelHeroSection from "../components/HotelHeroSection";
import Hotels from "../components/Hotels";

const HotelsPage = () => {
  return (
    <>
      <section>
        {/* <Breadcrumb currentPageTitle={"Hotels"} /> */}
        <HotelHeroSection />
        <Hotels />
      </section>
    </>
  );
};

export default HotelsPage;
