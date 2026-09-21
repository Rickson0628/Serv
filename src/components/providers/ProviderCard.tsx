import Link from "next/link";


interface Provider {
  id: number;
  name: string;
  service: string;
}




const ProviderCard = ( {id, name, service}:Provider) => {
  return (

        <div className="p-5 flex flex-col justify-center gap-4  border items-center bg-white text-black">
          <div>{name}</div>
          <div>{service}</div>

          <Link href={`/providers/${id}`} className="btn-primary">View Provider </Link>
        </div>
  );
};

export default ProviderCard;