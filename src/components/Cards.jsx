const services = [
  {
    img: "/images/black-bmw.png",
    path: "/ceramic-coatings",
    title: "Ceramic Coatings",
  },
  {
    img: "/images/red-toyota.png",
    path: "/detail-packages",
    title: "Detail Packages",
  },
  {
    img: "/images/grey-audi.png",
    path: "/additional-services",
    title: "Additional-Services",
  },
];

const Cards = () => {
  return (
    <div id="services" className="p-6 bg-[#f3f3f3]">
      <div className="bg-white border-black/20">
        <div className="uppercase flex flex-col justify-center text-center items-center font-thin text-4xl my-4 pt-2">
          Experience unparalleled auto care with our premium detailing services.
          <div className="bg-black rounded-md w-[70px] mx-[1rem] h-[2px] mt-2" />
        </div>
        <div className="h-[100%] px-[1rem] pb-[1rem] grid grid-col-1 md:grid-cols-3 gap-1">
          {services.map((service, index) => {
            return (
              <a key={index} href={service.path}>
                <div key={service} className="relative w-full mx-auto mt-4">
                  <img
                    src={service.img}
                    alt="services-background"
                    className="h-150 w-[900px] object-cover"
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
    </div>
  );
};

export default Cards;
