import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Packages from "./Packages";
const DetailPackages = () => {
  let phoneNumber = import.meta.env.VITE_PHONE_NUMBER;
  return (
    <div>
      <Navbar />
      <div className="w-full mx-auto">
        <div className="relative">
          <div>
            {/* overlay */}
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50" />
            <div className="absolute w-full h-full text-white flex flex-col justify-center">
              <div className="uppercase px-8 sm:text-5xl md:text-7xl font-thin">
                Signature Premium <br /> detail packages
                <p className="text-sm font-thin">
                  Unparalleled Service, Exceptional Results
                </p>
              </div>
              <div className="px-8 py-5">
                <a
                  href="#packages"
                  className=" uppercase px-6 py-4 border rounded-md hover:bg-[white] hover:text-black duration-300"
                >
                  our packages
                </a>
              </div>
            </div>
            <img
              src="/images/image-10.png"
              alt="image-10"
              className="w-full max-h-[700px] object-cover"
            />
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 p-5">
            <div className="pb-4 lg:pb-0 order-2 lg:order-none">
              <div className="py-[60px] lg:pr-[40px] md:p-[40px]">
                <div className="flex flex-col text-left">
                  <h2 className="uppercase font-thin text-4xl">
                    Ceramic Coating: Gloss, Protection & Durability
                  </h2>
                  <div className="bg-black rounded-md w-[70px] h-[2px] m-auto my-4" />
                </div>
                <div className="flex flex-col gap-4 text-sm font-thin text-black leading-7">
                  <div>
                    <span>
                      Protect your car with our premium ceramic coating—a
                      durable shield against dirt, UV rays, and scratches. Enjoy
                      a deep, glossy finish, water-repelling technology, and
                      long-lasting protection that makes maintenance a breeze.
                    </span>
                  </div>
                  <div>
                    <span>
                      Our advanced ceramic coating enhances your vehicle&apos;s
                      paint, preventing oxidation and fading while adding a
                      slick, mirror-like shine. Say goodbye to constant waxing
                      and hello to effortless cleaning, as dirt and grime slide
                      right off. Keep your ride looking showroom-new for years
                      to come with the ultimate in paint protection!
                    </span>
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
            <img
              src="/images/image-14.png"
              alt="image-14"
              className="w-[65rem] h-[40rem] object-cover rounded-sm"
            />
          </div>
        </div>
        <Packages />
      </div>
      <Footer />
    </div>
  );
};

export default DetailPackages;
