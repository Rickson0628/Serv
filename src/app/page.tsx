import Navbar from "@/components/layout/Navbar";
import ServiceCategories from "@/components/home/ServiceCategories";
import ServiceSection from "@/components/home/ServiceSection";
import Offer from "@/components/home/Offer";
import Footer from "@/components/layout/Footer";


export default function Home() {
  return (
    <section>
      <Navbar />
      <ServiceSection title="Get the service you need with" coloredTitle="Serv"  eyebrow="Skilled people, real solutions." description="Connect with trusted mechanics, detailers, and windshield repair professionals — all in one place." buttonText="Book a Service" image="/home/HomeMechanic.png"  imagePosition="right" />
      <ServiceCategories />
      <ServiceSection title="Turn your skills into" coloredTitle="opportunities"
      eyebrow="Work on your terms" description="Join Servas a provider and connect with customers in your area. Set your own schedule, grow your business, and do what you love." buttonText="Become a Provider" image="/home/TrustedTeam.png"  imagePosition="left" />
      <Offer />
      <Footer />

    </section>
   
  );
}
