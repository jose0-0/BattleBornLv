const services = [
  {
    img: "/images/black-bmw.png",
    path: "/ceramic-coatings",
    title: "Ceramic Coatings",
    description:
      "Our premium ceramic coating delivers a long-lasting, high-gloss shield that repels dirt, UV rays, and scratches, ensuring effortless maintenance and a showroom finish for years.",
  },
  {
    img: "/images/red-toyota.png",
    path: "/detail-packages",
    title: "Detail Packages",
    description:
      "We offer a range of premium detailing packages, from quick refreshes to deep interior cleans and full exterior decontamination, including clay bar treatments and maintenance plans, all designed to keep your car looking pristine and protected.",
  },
  {
    img: "/images/grey-audi.png",
    path: "/additional-services",
    title: "Additional-Services",
    description:
      "Enhance your detail with our premium additional services, designed to protect, restore, and elevate your vehicle's appearance.",
  },
];

const Cards = () => {
  return (
    <div id="services" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[10px]">
          Welcome to Battle Born Lv
        </h2>
        <div className="mt-5 text-center text-4xl uppercase leading-[0.8] md:text-[6rem]">
          Experience unparalleled auto care with our premium detailing services.
        </div>
      </div>
      <div className="px-[1rem] pb-[1rem] grid grid-col-1 md:grid-cols-3 gap-1">
        {services.map((service, index) => {
          return (
            <a key={index} href={service.path}>
              <div key={index} className="relative w-full mx-auto mt-4">
                <img
                  src={service.img}
                  alt="services-background"
                  className="h-79 md:h-175 w-[900px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/30 hover:bg-white/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="flex text-center text-white text-3xl font-thin">
                    {service.title}
                  </h2>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
