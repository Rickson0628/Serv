import Image from "next/image";
import Link from "next/link";

interface DashboardProps {
  title: string;
  description: string;
  buttonName: string;
  desktopHeroImage: string,
  mobileHeroImage: string;
}

const DashboardCard = ({title,description,buttonName,mobileHeroImage,desktopHeroImage,}: DashboardProps) => {
  return (
    <article className="relative h-64 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm md:h-72 lg:h-90">
      {/* Mobile / Smaller Image */}
      <Image
        src={mobileHeroImage}
        alt="Serv professional"
        fill
        className="object-cover lg:hidden"
      />

      {/* Desktop Image */}
      <div className="absolute inset-y-0 right-0 hidden w-[70%] lg:block">
        <Image
          src={desktopHeroImage}
          alt="Serv professional"
          fill
          sizes="70vw"
          className="object-cover object-[60%_45%]"
        />
      </div>
      {/* Gradient Overlay */}
      <div className="absolute inset-y-0 left-0 z-1 w-[55%] bg-gradient-to-r from-white via-white/95 to-transparent lg:w-[70%] lg:via-white" />

      {/* Content */}
      <div className="relative z-10 flex h-full w-[45%] flex-col justify-center gap-4 p-6">


        <h2 className="text-2xl md:text-4xl font-black leading-[1.05] tracking-tight">
          {title}
        </h2>

        <div className="h-1.5 w-12 md:w-15 lg:w-20  lg:h-2 rounded-full bg-primary" />

        <p className="text-muted md:text-xl">
          {description}
        </p>

        <Link
          href="/book/customer"
          className="btn-primary mt-1 w-fit whitespace-nowrap"
        >
          {buttonName}
        </Link>
      </div>
    </article>
  );
};

export default DashboardCard;