import Navbar from "@/components/layout/Navbar";
import ServiceSection from "@/components/layout/ServiceSection";


export default function Home() {
  return (
    <section>
      <Navbar />
      <ServiceSection title="Get it service with Serv" description="Looking for an auto mechanic, windshield repair expert, or auto detailing expert?" buttonText="Book Now" image="/FirstLandingPagePicture.png"  imagePosition="right" />
      <div></div>
      <ServiceSection title="Work when you want, make what you need" description="Are you a licensed auto mechanic, windshield repair expert, or auto detailing expert?" buttonText="Start Now" image="/SecondLandingPagePicture.png"  imagePosition="left" />


    </section>
   
  );
}
