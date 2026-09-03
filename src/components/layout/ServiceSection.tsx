import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface ServiceProps{
  title:string,
  description:string, 
  buttonText:string,
  image: string | StaticImageData,
  imagePosition: "right" | "left"
};


const ServiceSection = ({title, description, buttonText, image, imagePosition= "right" }: ServiceProps) => {

  return (
    <section className={`w-full flex bg-gray-100 ${imagePosition === "left" ? "flex-row-reverse" : ""}`}>
        <div className='p-10 w-1/2 flex flex-col justify-center gap-3 '>
          <div className='text-heading'>{title}</div>
          <p className='text-body'>{description}</p>
          <Link href={"/login"} className='btn-primary self-start'>{buttonText}</Link>
        </div>
        
        <div className='w-1/2 relative'>
          <Image src={image} width={550} height={550} alt={`${image} image`} className='w-full h-full object-cover'/>
        </div>
        
      
    </section>
  );
};

export default ServiceSection;