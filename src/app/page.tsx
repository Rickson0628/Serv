import Navbar from "@/components/layout/Navbar";
import ServiceCategories from "@/components/home/ServiceCategories";
import ServiceSection from "@/components/home/ServiceSection";
import Offer from "@/components/home/Offer";


export default function Home() {
  return (
    <section>
      <Navbar />
      <ServiceSection title="Get it service with Serv" description="Looking for an auto mechanic, windshield repair expert, or auto detailing expert?" buttonText="Book Now" image="/home/FirstLandingPagePicture.png"  imagePosition="right" />
      <ServiceCategories />
      <ServiceSection title="Work when you want, make what you need" description="Are you a licensed auto mechanic, windshield repair expert, or auto detailing expert?" buttonText="Start Now" image="/home/SecondLandingPagePicture.png"  imagePosition="left" />
      <Offer />

    </section>
   
  );
}
