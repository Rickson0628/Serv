import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ServiceProps {
  title: string;
  coloredTitle: string,
  eyebrow: string,
  description: string;
  buttonText: string;
  image: string | StaticImageData;
  imagePosition: "right" | "left";
}

const ServiceSection = ({
  title,
  coloredTitle,
  eyebrow,
  description,
  buttonText,
  image,
  imagePosition = "right",
}: ServiceProps) => {
  return (
    <section
      className={`w-full md:flex bg-gray-100 ${
        imagePosition === "left" ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Content Container */}
      <div className="p-10 md:w-1/2 flex flex-col justify-center gap-3">

        <p className="text-eyebrow">{eyebrow}</p>
        <h1 className=" text-heading">
          {title} 
          <span className="text-primary"> {coloredTitle}</span>
        </h1>

        <p className="text-body">
          {description}
        </p>

        <Link
          href="/login"
          className="btn-primary md:self-start"
        >
          {buttonText}
        </Link>
      </div>

      {/* Image Container */}
      <div className="md:w-1/2 relative">
        <Image
          src={image}
          width={550}
          height={550}
          alt={`${title} image`}
          className="w-full h-full object-fill"
        />

        {/* Gradient Overlay */}
      <div
  className={`hidden md:block absolute top-0 bottom-0 w-[10%] ${
    imagePosition === "right"
      ? "left-0 bg-linear-to-r from-gray-100 to-transparent"
      : "right-0 bg-linear-to-l from-gray-100 to-transparent"
  }`}
        />
      </div>
    </section>
  );
};

export default ServiceSection;