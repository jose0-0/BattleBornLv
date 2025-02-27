const services = [
  {
    img: "/images/black-bmw.png",
    path: "",
    title: "Ceramic Coatings",
    description:
      "Our premium ceramic coating delivers a long-lasting, high-gloss shield that repels dirt, UV rays, and scratches, ensuring effortless maintenance and a showroom finish for years.",
  },
  {
    img: "/images/red-toyota.png",
    path: "",
    title: "Detail Packages",
    description:
      "We offer a range of premium detailing packages, from quick refreshes to deep interior cleans and full exterior decontamination, including clay bar treatments and maintenance plans, all designed to keep your car looking pristine and protected.",
  },
  {
    img: "/images/grey-audi.png",
    path: "",
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
      <div className="h-[100%] px-[1rem] pb-[1rem] grid grid-col-1 md:grid-cols-3 gap-1">
        {services.map((service, index) => {
          return (
            <div
              key={index}
              className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
            >
              <div className="h-96">
                <img
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-125"
                  src={service.img}
                  alt="cards"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  {service.title}
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {service.description}
                </p>
                <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  See More
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
