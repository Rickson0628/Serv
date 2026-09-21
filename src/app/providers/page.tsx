import ProviderCard from "@/components/providers/ProviderCard";

const providers = [
  {
    id: 1,
    name: "John's Auto",
    service: "Auto Repair",
  },
  {
    id: 2,
    name: "Mike's Detailing",
    service: "Detailing",
  },
  {
    id: 3,
    name: "ABC Windshield",
    service: "Windshield Repair",
  },
];
const page = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 w-full min-h-screen">
      {providers.map((provider) => (
        <ProviderCard
          key={provider.id}
          id={provider.id}
          name={provider.name}
          service={provider.service}
        />
      ))}
    </div>
  );
};

export default page;