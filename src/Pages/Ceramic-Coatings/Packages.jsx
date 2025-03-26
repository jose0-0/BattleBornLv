const Packages = () => {
  let phoneNumber = import.meta.env.VITE_PHONE_NUMBER;
  return (
    <div id="packages" className="w-full bg-black/10">
      <div className="text-center py-5">
        <div className="flex justify-center font-thin text-5xl">
          CERAMIC COATING PACKAGES
        </div>
        <div className="bg-black rounded-md w-[70px] h-[2px] m-auto mt-4" />
      </div>
      {/* package 1 */}
      <div id="package-1" className="w-full justify-center bg-white p-5">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="py-[60px] lg:pr-[40px] md:p-[40px] lg:pb-0 order-2 lg:order-none">
            <div className="flex flex-col">
              <h2 className="uppercase font-thin text-4xl">
                1 Year Ceramic Coating
              </h2>
              <div className="bg-black rounded-md w-[70px] h-[2px] my-4" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="font-thin text-sm leading-7">
                <div className="py-1">
                  Our 1-Year Ceramic Coating is a fast and efficient solution to
                  protect your vehicle&apos;s paint. This service applies a
                  durable ceramic coating that creates a long-lasting shield
                  against dirt, water, UV rays, and scratches. The coating
                  provides a smooth, glossy finish that enhances the appearance
                  of your car while making maintenance effortless.
                </div>
                <div className="py-1">
                  Not only does it offer superior protection, but it also
                  reduces the need for frequent washing, as dirt and water slide
                  off easily. The hydrophobic properties keep your vehicle
                  cleaner for longer, while the UV protection prevents oxidation
                  and fading. With our 1-Year Ceramic Coating, you&apos;ll enjoy
                  a high-performance finish and lasting protection with minimal
                  effort, keeping your car looking like new for years to come.
                </div>
              </div>
              <div className="uppercase text-xl">
                Starting at $100 for <b>all vehicle&apos;s types</b>
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
              src="/images/image-42.png"
              alt="image-12"
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
              src="/images/image-27.png"
              alt="image-27"
              className="w-[65rem] h-[40rem] object-cover object-bottom rounded-sm"
            />
          </div>
          <div className="py-[60px] lg:pr-[40px] md:p-[40px] lg:pb-0">
            <div className="flex flex-col ">
              <h2 className="uppercase font-thin text-4xl">
                5 Year Ceramic Coating
              </h2>
              <div className="bg-black rounded-md w-[70px] h-[2px] my-4" />
            </div>
            <div className="flex flex-col gap-4 text-black">
              <div className="font-thin text-sm leading-7">
                <div className="py-1">
                  The 5-Year Ceramic Coating is a multi-step process that begins
                  with decontaminating the paint to remove any waxes or existing
                  protection. Next, I eliminate any iron contaminants from the
                  surface and then prep the paint with panel prep. Once the
                  paint is properly prepped, I apply the ceramic coating, allow
                  it to cure, and carefully wipe off any excess while checking
                  for high spots that may need correction. This ensures
                  long-lasting protection and a smooth, glossy finish.
                </div>
                <div className="py-1">
                  If a 1-Step Polish and Ceramic Coating is selected, the
                  process remains similar: after decontaminating and removing
                  iron contaminants, I polish each panel with one pass, followed
                  by panel prep and then the application of the ceramic coating.
                </div>
              </div>
              <div className="text-xl">
                STARTING AT $500 FOR{" "}
                <span className="font-bold">COUPEs / SEDANs</span>
              </div>
              <div className="text-xl">
                STARTING AT $700 FOR{" "}
                <span className="font-bold">TRUCKs / SUVs</span>
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
                1 Step polish with 5 year ceramic coating
              </h2>
              <div className="bg-black rounded-md w-[70px] h-[2px] my-4" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="font-thin text-sm leading-7">
                <div className="py-1">
                  The 5-Year Ceramic Coating with Polish is a comprehensive,
                  multi-step process designed to enhance and protect your
                  vehicle&apos;s paint for years to come. The process begins
                  with decontaminating the surface to remove any waxes,
                  sealants, or previous protection. Next, I eliminate any iron
                  contaminants from the paint, followed by a thorough polish to
                  remove light swirl marks and imperfections, restoring a
                  smooth, glossy finish.
                </div>
                <div className="py-1">
                  Once the paint is perfected, I apply a premium panel prep to
                  ensure proper bonding, then apply the 5-year ceramic coating.
                  After letting it cure, I carefully wipe off any excess and
                  check for high spots that may need correction. This
                  combination of polishing and ceramic coating offers a
                  mirror-like finish with superior protection, making
                  maintenance easier and keeping your vehicle looking brand new
                  for years.
                </div>
              </div>
              <div className="text-xl">
                STARTING AT $850 FOR{" "}
                <span className="font-bold">COUPEs / SEDANs</span>
              </div>
              <div className="text-xl">
                STARTING AT $1150 FOR{" "}
                <span className="font-bold">TRUCKs / SUVs</span>
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
              src="/images/image-17.png"
              alt="image-17"
              className="w-[65rem] h-[40rem] object-cover rounded-sm"
            />
          </div>
        </div>
      </div>
      {/* Package 4 */}
      <div
        id="package-2"
        className="w-full flex justify-center mt-10 bg-white p-5 pb-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <img
              src="/images/image-2.png"
              alt="image-2"
              className="w-[65rem] h-[40rem] object-cover object-bottom rounded-sm"
            />
          </div>
          <div className="py-[60px] lg:pr-[40px] md:p-[40px] lg:pb-0">
            <div className="flex flex-col ">
              <h2 className="uppercase font-thin text-4xl">
                2 step polish with 5 year ceramic coating
              </h2>
              <div className="bg-black rounded-md w-[70px] h-[2px] my-4" />
            </div>
            <div className="flex flex-col gap-4 text-black">
              <div className="font-thin text-sm leading-7">
                <div className="py-1">
                  The 2-Step Polish with 5-Year Ceramic Coating is the ultimate
                  paint enhancement and protection package. This multi-step
                  process begins with decontaminating the surface to remove any
                  waxes, sealants, or previous protection, followed by the
                  removal of iron contaminants. Then, I perform the first stage
                  of polishing to eliminate deeper swirl marks and
                  imperfections. After this, I complete a second polishing pass
                  to refine the finish and achieve a smooth, mirror-like shine.
                </div>
                <div className="py-1">
                  Once the paint is flawlessly prepared, I apply panel prep to
                  ensure proper bonding, followed by the application of the
                  5-year ceramic coating. The coating provides long-lasting
                  protection, repelling dirt, water, UV rays, and scratches
                  while maintaining that deep gloss and sleek finish. This
                  service offers the highest level of paint correction and
                  protection, leaving your vehicle looking pristine for years to
                  come.
                </div>
              </div>
              <div className="text-xl">
                STARTING AT $1200 FOR{" "}
                <span className="font-bold">COUPEs / SEDANs</span>
              </div>
              <div className="text-xl">
                STARTING AT $1600 FOR{" "}
                <span className="font-bold">TRUCKs / SUVs</span>
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
