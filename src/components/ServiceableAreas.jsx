const areas = [
  {
    places: "Sky Canyon",
  },
  {
    places: "Centennial Hills",
  },
  {
    places: "Summerlin",
  },
  {
    places: "NorthWest Las Vegas",
  },
  {
    places: "Henderson",
  },
  {
    places: "Enterprise",
  },
];

const ServiceableAreas = () => {
  return (
    <div
      id="areas"
      className="w-full bg-white flex justify-center items-center py-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 p-5">
        <div className="w-full">
          <img
            src="/images/grey-audi.png"
            alt="summary-image"
            className="w-[65rem] h-[40rem] object-cover object-center rounded-sm"
          />
        </div>
        <div className="pb-4">
          <div className="py-[60px] md:p-[40px]">
            <div className="flex flex-col">
              <h2 className="uppercase font-thin text-4xl">Where we operate</h2>
              <div className="bg-black rounded-md w-[70px] h-[2px] my-4" />
            </div>
            <div className="text-sm font-thin text-black leading-7">
              <p>
                We offer professional mobile car detailing services across the
                Vegas Valley. Fully equipped with our own water and power, we
                bring high-quality detailing directly to you. Whether at home or
                work, you can sit back and relax while we take care of your
                vehicle.
              </p>
              <p className="py-1">
                Our services are designed to protect and enhance your car&apos;s
                appearance, using premium products and expert techniques. From
                deep interior cleaning to paint protection, we ensure every
                detail meets the highest standards. No need to drive to a
                shop—we bring convenience, quality, and care straight to your
                doorstep.
              </p>
              <div>
                <p>Areas serviceable include: </p>
                <div className="pt-4 grid grid-cols-3 border-white text-center">
                  {areas.map((area, index) => {
                    return (
                      <div key={index}>
                        <ul className="">
                          <li className="hover:text-accent duration-300">
                            {area.places}
                          </li>
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceableAreas;
