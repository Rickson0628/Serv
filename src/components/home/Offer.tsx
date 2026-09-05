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
    description: "Connect with a skilled worker in a few steps",
    image: "/home/EasyToBook.png",
  },
  {
    title: "Best Quality",
    description: "Find highly skilled workers by checking their reviews",
    image: "/home/BestQuality.png",
  },
  {
    title: "Affordable",
    description: "Communicate and pay skilled worker directly",
    image: "/home/Affordable.png",
  },
];

const Offer = () => {
  return (
    <section className="py-15 px-10">

      {/* Header Container */}
      <div className="text-center">
        <p className="text-subtitle text-primary">
          What we offer
        </p>

        <h2 className="text-heading">
          Connect with the best skilled workers
        </h2>
      </div>

      {/* Offers Container */}
      <div className="flex flex-col md:flex-row gap-5 w-full">

        {offers.map((offer) => (
          /* Offer Card */
          <div
            key={offer.title}
            className="flex-1 flex flex-col items-center text-center"
          >

            {/* Image Container */}
            <div className="relative w-[clamp(180px,20vw,260px)] aspect-square">
              <Image
                src={offer.image}
                alt={`${offer.title} image`}
                fill
                className="object-contain"
              />
            </div>

            {/* Content Container */}
            <div>
              <h3 className="text-subtitle">
                {offer.title}
              </h3>

              <p className="text-body">
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