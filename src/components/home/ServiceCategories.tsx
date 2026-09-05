const ServiceCategories = () => {
  return (
    <div className="w-full py-6 sm:py-10 px-4 sm:px-10 bg-[#AAB2C8]">

      {/* Service Categories Container */}
      <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-10 text-white text-center text-[clamp(0.8rem,2.5vw,1rem)] font-semibold">
        <div>Auto Mechanic</div>
        <div>Auto Detailer</div>
        <div>Windshield Repair</div>
      </div>
    </div>
  );
};

export default ServiceCategories;