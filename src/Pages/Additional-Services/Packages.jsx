const Packages = () => {
  let phoneNumber = import.meta.env.VITE_PHONE_NUMBER;
  return (
    <div>
      <div id="packages" className="w-full bg-black/10">
        <div className="text-center py-5">
          <div className="flex justify-center font-thin text-5xl">
            Additional Services
          </div>
          <div className="bg-black rounded-md w-[70px] h-[2px] m-auto mt-4" />
        </div>
        {/* package 1 */}
        <div id="package-1" className="w-full justify-center bg-white p-5">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="py-[60px] lg:pr-[40px] md:p-[40px] lg:pb-0 order-2 lg:order-none">
              <div className="flex flex-col">
                <h2 className="uppercase font-thin text-4xl">
                  Standard Exterior Detail
                </h2>
                <div className="bg-black rounded-md w-[70px] h-[2px] my-4" />
              </div>
              <div className="flex flex-col gap-4">
                <div className="font-thin text-sm leading-7">
                  <div className="py-1">
                    A Standard Exterior Wash is designed to keep your vehicle
                    looking fresh and well-maintained with a thorough yet gentle
                    cleaning process.
                  </div>
                  <div className="py-1">
                    First, we rinse the vehicle to remove loose dirt and debris,
                    followed by a high-quality foam bath to break down grime,
                    road dust, and contaminants. Using a safe hand-wash method
                    with microfiber mitts, we carefully clean every surface to
                    prevent scratches and swirl marks. The wheels, tires, and
                    wheel wells are deep cleaned to remove built-up brake dust
                    and dirt.
                  </div>
                  <div className="py-1">
                    After a final rinse, we use a soft, high-quality drying
                    method to ensure a streak-free finish. To complete the
                    service, we apply a spray wax or sealant for added shine and
                    light protection, followed by a tire dressing to enhance the
                    overall look. This service is ideal for regular maintenance,
                    keeping your vehicle looking clean and polished between
                    deeper detailing sessions.
                  </div>
                </div>
                <div className="uppercase text-xl">
                  Starting at $60{" "}
                  <span className="font-bold">COUPEs / SEDANs</span>
                </div>
                <div className="uppercase text-xl">
                  Starting at $70{" "}
                  <span className="font-bold">TRUCKs / SEDANs / XL</span>
                </div>
              </div>
              <div className="pt-5">
                <a
                  href="/contact-us"
                  className="display flex justify-center items-center rounded-md bg-black text-sm text-white w-[250px] h-[60px] duration-300 hover:bg-gray-600"
                >
                  GET A QUOTE
                </a>
              </div>
              <div className="pt-5">
                <a
                  href={"tel:" + phoneNumber}
                  className="display flex justify-center items-center rounded-md bg-white text-sm text-black border-[1px] border-black hover:bg-black hover:text-white w-[250px] h-[60px] duration-300"
                >
                  CALL US
                </a>
              </div>
            </div>
            <div>
              <img
                src="/images/image-23.png"
                alt="image-23"
                className="w-[65rem] h-[40rem] object-cover object-bottom rounded-sm"
              />
            </div>
          </div>
        </div>
        {/* package 2 */}
        <div
          id="package-2"
          className="w-full flex justify-center mt-10 bg-white p-5 "
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
              <img
                src="/images/black-bmw.png"
                alt="image-5"
                className="w-[65rem] h-[40rem] object-cover object-bottom rounded-sm"
              />
            </div>
            <div className="py-[60px] lg:pr-[40px] md:p-[40px] lg:pb-0">
              <div className="flex flex-col ">
                <h2 className="uppercase font-thin text-4xl">
                  Motorcycle Services
                </h2>
                <div className="bg-black rounded-md w-[70px] h-[2px] my-4" />
              </div>
              <div className="flex flex-col gap-4 text-black">
                <div className="font-thin text-sm leading-7">
                  <div className="py-1">
                    A Standard Exterior Wash for Motorcycles is designed to
                    safely and effectively clean bikes of all types, including
                    sport bikes, cruisers, choppers, and touring motorcycles.
                  </div>
                  <div className="py-1">
                    We start by gently rinsing the bike to remove loose dirt,
                    dust, and road grime, paying special attention to delicate
                    areas like the engine, exhaust, and chrome components. A
                    high-quality, pH-balanced foam wash is then applied to break
                    down grease and contaminants. Using soft microfiber mitts
                    and detailing brushes, we carefully hand-wash the bodywork,
                    frame, wheels, and spokes, ensuring every part is cleaned
                    without causing scratches.
                  </div>
                  <div className="py-1">
                    After a thorough rinse, we use a streak-free drying method,
                    including compressed air for hard-to-reach areas, preventing
                    water spots and corrosion. To finish, we apply a light spray
                    wax or sealant for added shine and protection, along with a
                    tire dressing to enhance the bike&apos;s overall appearance.
                    This service keeps your motorcycle looking sharp and
                    well-maintained between more intensive detailing sessions.
                  </div>
                </div>
                <div className="text-xl">
                  STARTING AT $60 FOR{" "}
                  <span className="font-bold">BIKEs / CRUISERs</span>
                </div>
                <div className="text-xl">
                  STARTING AT $70 FOR{" "}
                  <span className="font-bold">CHOPPERs</span>
                </div>
                <div className="text-xl">
                  STARTING AT $100 FOR{" "}
                  <span className="font-bold">TOURING</span>
                </div>
              </div>
              <div className="pt-5">
                <a
                  href="/contact-us"
                  className="display flex justify-center items-center rounded-md bg-black text-sm text-white w-[250px] h-[60px] duration-300 hover:bg-gray-600"
                >
                  GET A QUOTE
                </a>
              </div>
              <div className="pt-5">
                <a
                  href={"tel:" + phoneNumber}
                  className="display flex justify-center items-center rounded-md bg-white text-sm text-black border-[1px] border-black hover:bg-black hover:text-white w-[250px] h-[60px] duration-300"
                >
                  CALL US
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-center py-5"></div>
        {/* Package 3 */}
        <div className="w-full bg-white p-5">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="py-[60px] lg:pr-[40px] md:p-[40px] lg:pb-0 order-2 lg:order-none">
              <div className="flex flex-col">
                <h2 className="uppercase font-thin text-4xl">RV VEHICLES</h2>
                <div className="bg-black rounded-md w-[70px] h-[2px] my-4" />
              </div>
              <div className="flex flex-col gap-4">
                <div className="font-thin text-sm leading-7">
                  <div className="py-1">
                    A Standard Exterior Wash for RVs is designed to keep your
                    recreational vehicle looking clean and protected while
                    preserving its exterior surfaces.
                  </div>
                  <div className="py-1">
                    We begin with a thorough rinse to remove loose dirt, dust,
                    and road grime, ensuring no debris scratches the surface
                    during the wash. Next, we apply a high-quality, pH-balanced
                    foam wash to break down tough contaminants such as bug
                    splatter, tree sap, and road film. Using soft wash mitts and
                    extendable brushes, we carefully hand-wash the entire
                    exterior, including the roof, side panels, windows, wheels,
                    and tires. Special attention is given to awnings, seals, and
                    trim to prevent buildup and maintain their condition.
                  </div>
                  <div className="py-1">
                    After a complete rinse, we dry the RV using soft microfiber
                    towels and a spot-free drying method to prevent water spots
                    and streaks. As a finishing touch, we apply a UV-protectant
                    spray or sealant to help guard against sun damage and
                    fading, keeping your RV looking fresh and well-maintained
                    for your next adventure.
                  </div>
                </div>
                <div className="text-xl">
                  STARTING AT $7 <span className="font-bold">/sqft</span>
                </div>
                <div className="text-xl">+ $50 cleaning (optional)</div>
              </div>
              <div className="pt-5">
                <a
                  href="/contact-us"
                  className="display flex justify-center items-center rounded-md bg-black text-sm text-white w-[250px] h-[60px] duration-300 hover:bg-gray-600"
                >
                  GET A QUOTE
                </a>
              </div>
              <div className="pt-5">
                <a
                  href={"tel:" + phoneNumber}
                  className="display flex justify-center items-center rounded-md bg-white text-sm text-black border-[1px] border-black hover:bg-black hover:text-white w-[250px] h-[60px] duration-300"
                >
                  CALL US
                </a>
              </div>
            </div>
            <div>
              <img
                src="/images/black-bmw.png"
                alt="image-8"
                className="w-[65rem] h-[40rem] object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
