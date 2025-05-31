const Packages = () => {
  let phoneNumber = import.meta.env.VITE_PHONE_NUMBER;
  return (
    <div id="packages" className="w-full bg-black/10">
      <div className="text-center py-5">
        <div className="flex justify-center font-thin text-5xl">
          Detail Packages
        </div>
        <div className="bg-black rounded-md w-[70px] h-[2px] m-auto mt-4" />
      </div>
      {/* package 1 */}
      <div id="package-1" className="w-full justify-center bg-white p-5">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="py-[60px] lg:pr-[40px] md:p-[40px] lg:pb-0 order-2 lg:order-none">
            <div className="flex flex-col">
              <h2 className="uppercase font-thin text-4xl">
                Mini Jackpot (standard detail)
              </h2>
              <div className="bg-black rounded-md w-[70px] h-[2px] my-4" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="font-thin text-sm leading-7">
                <div className="py-1">
                  Our standard detail begins with a thorough cleaning of every
                  crevice in your car, followed by a complete vacuuming to
                  remove loose debris. We wipe down the interior surfaces,
                  ensuring everything is spotless, and clean the windows to a
                  streak-free finish—one of the most important aspects of our
                  service.
                </div>
                <div className="py-1">
                  We clean the wheels, tires, and wheel wells before foaming
                  down the exterior with high-quality products. After hand
                  washing every part of the car, we rinse and apply a one-month
                  wax for added protection. To finish, we spray on our signature
                  detailing spray, apply sling-free tire shine, and complete the
                  service with the BattleBorn signature scent. This package is
                  ideal for cars needing a refresh without a full deep clean.
                </div>
              </div>
              <div className="text-xl">
                STARTING AT $90 FOR{" "}
                <span className="font-bold">COUPEs / SEDANs</span>
              </div>
              <div className="text-xl">
                STARTING AT $100 FOR <span className="font-bold">SUVs</span>
              </div>
              <div className="text-xl">
                STARTING AT $130 FOR{" "}
                <span className="font-bold">TRUCKs / XL</span>
              </div>
            </div>
            <div className="pt-5">
              <a
                href="/contact"
                className="display flex justify-center items-center rounded-md bg-black text-sm text-white md:w-[250px] w-full h-[60px] duration-300 hover:bg-gray-600"
              >
                GET A QUOTE
              </a>
            </div>
            <div className="pt-5">
              <a
                href={"tel:" + phoneNumber}
                className="display flex justify-center items-center rounded-md bg-white text-sm text-black border-[1px] border-black hover:bg-black hover:text-white md:w-[250px] w-full h-[60px] duration-300"
              >
                CALL US
              </a>
            </div>
          </div>
          <div>
            <img
              src="/images/image-32.png"
              alt="image-32"
              loading="lazy"
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
              src="/images/image-11.png"
              alt="image-11"
              loading="lazy"
              className="w-[65rem] h-[40rem] object-cover object-bottom rounded-sm"
            />
          </div>
          <div className="py-[60px] lg:pr-[40px] md:p-[40px] lg:pb-0">
            <div className="flex flex-col ">
              <h2 className="uppercase font-thin text-4xl">
                VGK (interior deep clean)
              </h2>
              <div className="bg-black rounded-md w-[70px] h-[2px] my-4" />
            </div>
            <div className="flex flex-col gap-4 text-black">
              <div className="font-thin text-sm leading-7">
                <div className="py-1">
                  Our Interior Deep Clean is a comprehensive interior-only
                  detail, with the option to add exterior services if desired.
                  We begin by thoroughly blowing out all crevices and vacuuming
                  every area, including pet hair removal if necessary. We then
                  address any stains to the best of our ability, ensuring the
                  carpets look refreshed and rejuvenated. Each interior surface
                  is carefully scrubbed with specialized brushes, steam cleaning
                  and tools, providing a thorough &quot;factory reset&quot; to
                  your vehicle&apos;s interior.
                </div>
                <div className="py-1">
                  To complete the service, we clean the interior windows to a
                  streak-free shine and apply our signature scent, leaving your
                  car with a fresh, clean atmosphere. This package is ideal for
                  vehicles with children or for interiors that require a deep,
                  restorative clean.
                </div>
              </div>
              <div className="text-xl">
                STARTING AT $130 FOR{" "}
                <span className="font-bold">COUPEs / SEDANs</span>
              </div>
              <div className="text-xl">
                STARTING AT $140 FOR <span className="font-bold">SUVs</span>
              </div>
              <div className="text-xl">
                STARTING AT $150 FOR{" "}
                <span className="font-bold">TRUCKs / XL</span>
              </div>
            </div>
            <div className="pt-5">
              <a
                href="/contact"
                className="display flex justify-center items-center rounded-md bg-black text-sm text-white md:w-[250px] w-full h-[60px] duration-300 hover:bg-gray-600"
              >
                GET A QUOTE
              </a>
            </div>
            <div className="pt-5">
              <a
                href={"tel:" + phoneNumber}
                className="display flex justify-center items-center rounded-md bg-white text-sm text-black border-[1px] border-black hover:bg-black hover:text-white md:w-[250px] w-full h-[60px] duration-300"
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
              <h2 className="uppercase font-thin text-4xl">
                UNLV (Clay & Seal)
              </h2>
              <div className="bg-black rounded-md w-[70px] h-[2px] my-4" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="font-thin text-sm leading-7">
                <div className="py-1">
                  Our Exterior-Only package, with the option to add interior
                  services, starts with a deep cleaning of the wheels, ensuring
                  every detail is perfect—from the wheels and tires to the wheel
                  wells. We then begin the decontamination process by applying
                  high pH foam to break down any wax, sealants, dirt, and bugs.
                  After rinsing, we apply an iron decontaminant to the paint to
                  remove any embedded iron particles.
                </div>
                <div className="py-1">
                  Once the iron decontaminant is rinsed off, we use a clay bar
                  to eliminate any remaining contamination on the surface,
                  leaving the paint smooth and clean. We finish by applying a
                  6-month ceramic sealant to protect and enhance the paint. This
                  package is perfect for brand-new cars or vehicles in need of a
                  fresh start on the exterior. for years.
                </div>
              </div>
              <div className="text-xl">
                STARTING AT $130 FOR{" "}
                <span className="font-bold">COUPEs / SEDANs</span>
              </div>
              <div className="text-xl">
                STARTING AT $140 FOR <span className="font-bold">SUVs</span>
              </div>
              <div className="text-xl">
                STARTING AT $170 FOR{" "}
                <span className="font-bold">TRUCKs / XL</span>
              </div>
            </div>
            <div className="pt-5">
              <a
                href="/contact"
                className="display flex justify-center items-center rounded-md bg-black text-sm text-white md:w-[250px] w-full h-[60px] duration-300 hover:bg-gray-600"
              >
                GET A QUOTE
              </a>
            </div>
            <div className="pt-5">
              <a
                href={"tel:" + phoneNumber}
                className="display flex justify-center items-center rounded-md bg-white text-sm text-black border-[1px] border-black hover:bg-black hover:text-white md:w-[250px] w-full h-[60px] duration-300"
              >
                CALL US
              </a>
            </div>
          </div>
          <div>
            <img
              src="/images/image-1.png"
              alt="image-1"
              loading="lazy"
              className="w-[65rem] h-[40rem] object-cover rounded-sm"
            />
          </div>
        </div>
      </div>
      {/* Package 4 */}
      <div
        id="package-2"
        className="w-full flex justify-center mt-10 bg-white p-5 "
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <img
              src="/images/image-35.png"
              alt="image-35"
              loading="lazy"
              className="w-[65rem] h-[40rem] object-cover object-bottom rounded-sm"
            />
          </div>
          <div className="py-[60px] lg:pr-[40px] md:p-[40px] lg:pb-0">
            <div className="flex flex-col ">
              <h2 className="uppercase font-thin text-4xl">mega jackpot</h2>
              <div className="bg-black rounded-md w-[70px] h-[2px] my-4" />
            </div>
            <div className="flex flex-col gap-4 text-black">
              <div className="font-thin text-sm leading-7">
                <div className="py-1">
                  Our Mega Jackpot package provides a complete, all-inclusive
                  detail for both the interior and exterior of your vehicle. We
                  start by thoroughly cleaning every nook and cranny, blowing
                  out crevices and vacuuming up all debris, including pet hair.
                  Stains are treated and removed, ensuring your carpets are left
                  looking like new. We give the entire interior a deep scrub
                  with specialized brushes, steam cleaning, and tools, restoring
                  it to a pristine condition. The final touch includes cleaning
                  the interior windows to a flawless, streak-free finish and
                  infusing the cabin with our signature scent.
                </div>
                <div className="py-1">
                  For the exterior, we begin with an intensive wheel cleaning
                  process, ensuring every detail—from the wheels to the tires
                  and wheel wells—is immaculate. We then perform a thorough
                  decontamination, starting with a high pH foam wash to lift
                  away dirt, waxes, sealants, and any debris. After rinsing, we
                  apply an iron remover to eliminate iron contaminants, followed
                  by a clay bar treatment to smooth the paint and remove any
                  remaining surface imperfections. To finish, we apply a 6-month
                  ceramic sealant, providing lasting protection and a glossy,
                  showroom-quality finish.
                </div>
              </div>
              <div className="text-xl">
                STARTING AT $250 FOR{" "}
                <span className="font-bold">COUPEs / SEDANs</span>
              </div>
              <div className="text-xl">
                STARTING AT $270 FOR <span className="font-bold">SUVs</span>
              </div>
              <div className="text-xl">
                STARTING AT $330 FOR{" "}
                <span className="font-bold">TRUCKs / XL</span>
              </div>
            </div>
            <div className="pt-5">
              <a
                href="/contact"
                className="display flex justify-center items-center rounded-md bg-black text-sm text-white md:w-[250px] w-full h-[60px] duration-300 hover:bg-gray-600"
              >
                GET A QUOTE
              </a>
            </div>
            <div className="pt-5">
              <a
                href={"tel:" + phoneNumber}
                className="display flex justify-center items-center rounded-md bg-white text-sm text-black border-[1px] border-black hover:bg-black hover:text-white md:w-[250px] w-full h-[60px] duration-300"
              >
                CALL US
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
