import Image, { StaticImageData } from "next/image";

// Type for each offer
interface OfferType {
  title: string;
  description: string;
  image: string | StaticImageData;
}

// Offer data
const offers: OfferType[] = [
  {
    title: "Easy to book",
    description: "Find and book a skilled worker in just a few steps",
    image: "/home/EasyBook.png",
  },
  {
    title: "Best Quality",
    description: "Choose from highly skilled workers based on real ratings and reviews",
    image: "/home/BestQuality.png",
  },
  {
    title: "Affordable",
    description: "Communicate and pay skilled worker directly for the sevice you need with confidence",
    image: "/home/Affordable.png",
  },
];

const Offer = () => {
  return (
    <section className="section-padding py-15 px-10 max-w-7xl mx-auto">
      {/* Header Container */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          {/* Blue Line */}
          <div className="h-0.5 w-15 bg-primary" />
          <p className="text-eyebrow-blue">What we offer</p>
           {/* Blue Line */}
           <div className="h-0.5 w-15 bg-primary" />
        </div>


      <div className="flex flex-col justify-center items-center gap-2">
        <h2 className="text-heading">
          Connect with the best skilled workers
        </h2>
        <p className="text-muted text-body md:w-1/2">From finding the right professional to getting the job done, we make it simple, reliable, and affordable.</p>

        </div>
      </div>

      {/* Offers Container */}
      {/* Offers Container */}
<div className="mt-10  flex flex-col md:flex-row gap-10 md:gap-5 w-full">

        {offers.map((offer) => (
          /* Offer Card */
          <div
            key={offer.title}
            className="flex-1 flex flex-col items-center text-center"
          >

            {/* Image Container */}
            <div className="relative w-[clamp(190px,22vw,290px)] aspect-square">
              <Image
                src={offer.image}
                alt={`${offer.title} image`}
                fill
                className="object-contain"
              />
            </div>

            {/* Content Container */}
            <div className="flex flex-col justify-center items-center gap-2">
              <h3 className="text-subtitle">
                {offer.title}
              </h3>

              <p className="text-body text-muted w-3/4">
                {offer.description}
              </p>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Offer;