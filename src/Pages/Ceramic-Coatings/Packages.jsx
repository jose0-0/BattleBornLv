const Packages = () => {
  let phoneNumber = import.meta.env.VITE_PHONE_NUMBER;
  return (
    <div id="packages" className="w-full bg-black/10">
      <div className="text-center py-5">
        <div className="flex justify-center font-thin text-3xl">
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
                1 step Ceramic Coating (1 Year)
              </h2>
              <div className="bg-black rounded-md w-[70px] h-[2px] my-4" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="font-thin text-sm leading-7">
                <div className="py-1">
                  Our 1-Step Ceramic Coating is a fast and efficient solution to
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
                  and fading. With our 1-Step Ceramic Coating, you&apos;ll enjoy
                  a high-performance finish and lasting protection with minimal
                  effort, keeping your car looking like new for years to come.
                </div>
              </div>
              <div className="text-xl">
                STARTING AT $900 FOR{" "}
                <span className="font-bold">COUPEs / SEDANs</span>
              </div>
              <div className="text-xl">
                STARTING AT $1100 FOR{" "}
                <span className="font-bold">TRUCKs / SUVs</span>
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
              src="/images/black-bmw.png"
              alt="image-5"
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
                1 step Ceramic Coating & paint enhancement
              </h2>
              <div className="bg-black rounded-md w-[70px] h-[2px] my-4" />
            </div>
            <div className="flex flex-col gap-4 text-black">
              <div className="font-thin text-sm leading-7">
                <div className="py-1">
                  Our 1-Step Ceramic Coating with Paint Enhancement combines the
                  best of both worlds—improving your vehicle&apos;s appearance
                  while providing long-lasting protection. This service starts
                  with a light paint enhancement, removing light swirl marks,
                  scratches, and imperfections to restore a smooth, glossy
                  finish.
                </div>
                <div className="py-1">
                  Next, we apply a premium ceramic coating that creates a
                  durable barrier against dirt, water, UV rays, and scratches.
                  The result is a stunning, high-gloss shine that enhances the
                  depth of your paint and makes maintenance easier. With this
                  all-in-one solution, your car will not only look incredible
                  but also stay protected, with fewer washes needed and
                  long-lasting defense against environmental damage. Enjoy
                  superior protection and a flawless finish in just one step!
                </div>
                <div className="py-1">
                  Inside, our team meticulously vacuums, wipes down, and
                  conditions the interior, ensuring a pristine finish.
                </div>
              </div>
              <div className="text-xl">
                STARTING AT $1200 FOR{" "}
                <span className="font-bold">COUPEs / SEDANs</span>
              </div>
              <div className="text-xl">
                STARTING AT $1400 FOR{" "}
                <span className="font-bold">TRUCKs / SUVs</span>
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
              <h2 className="uppercase font-thin text-4xl">
                1 step ceramic coating (no polishing)
              </h2>
              <div className="bg-black rounded-md w-[70px] h-[2px] my-4" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="font-thin text-sm leading-7">
                <div className="py-1">
                  Protect your wheels from brake dust, road grime, and corrosive
                  elements with our ceramic coating. This durable shield
                  enhances gloss and makes cleaning effortless, helping to
                  preserve the pristine appearance of your wheels.
                </div>
                <div className="py-1">
                  Our ceramic coating creates a strong barrier that not only
                  repels contaminants but also minimizes the risk of scratching
                  and chipping. With its hydrophobic properties, water and dirt
                  slide off easily, reducing the need for frequent cleaning.
                  Enjoy the peace of mind that comes with knowing your wheels
                  are safeguarded against the harsh elements of the road, while
                  maintaining their stunning shine. Experience the difference
                  with our ceramic coating, designed for long-lasting protection
                  and effortless upkeep.
                </div>
              </div>
              <div className="text-xl">+ $35 PER WHEEL (wheel face only)</div>
              <div className="text-xl">
                + $50 PER WHEEL (Whole wheel coated with barrels included)
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
              src="/images/black-bmw.png"
              alt="image-8"
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
              src="/images/black-bmw.png"
              alt="image-5"
              className="w-[65rem] h-[40rem] object-cover object-bottom rounded-sm"
            />
          </div>
          <div className="py-[60px] lg:pr-[40px] md:p-[40px] lg:pb-0">
            <div className="flex flex-col ">
              <h2 className="uppercase font-thin text-4xl">
                1 ceramic coating & Polish
              </h2>
              <div className="bg-black rounded-md w-[70px] h-[2px] my-4" />
            </div>
            <div className="flex flex-col gap-4 text-black">
              <div className="font-thin text-sm leading-7">
                <div className="py-1">
                  Our 1-Step Ceramic Coating with Polish provides a
                  comprehensive solution for both enhancing and protecting your
                  vehicle&apos;s paint. This service begins with a gentle polish
                  that removes light swirl marks, scratches, and imperfections,
                  restoring a smooth, glossy finish.
                </div>
                <div className="py-1">
                  Once the surface is refined, we apply a high-quality ceramic
                  coating that forms a protective barrier against dirt, water,
                  UV rays, and scratches. The result is a beautifully enhanced
                  paint job with a deep, mirror-like shine, along with
                  long-lasting protection that makes maintenance a breeze. This
                  all-in-one service gives you the best of both worlds: a
                  flawless finish and superior protection, all in one step.
                </div>
                <div className="py-1">
                  Enjoy enhanced clarity and a more comfortable, stress-free
                  drive no matter the conditions.
                </div>
              </div>
              <div className="text-xl">+ $100 FRONT WINDSHIELD ONLY</div>
              <div className="text-xl">+ $80 ALL OTHER EXTERIOR WINDOWS</div>
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
    </div>
  );
};

export default Packages;
