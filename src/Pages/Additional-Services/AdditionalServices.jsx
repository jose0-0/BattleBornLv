import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Packages from "./Packages";

const addOns = [
  {
    product: "Engine Bay Cleaning",
    description:
      "Removes built-up grime, grease, and dirt, leaving your engine bay looking fresh and well-maintained.",
    price: 40,
  },
  {
    product: "Leather Conditioner ",
    description:
      "Nourishes and protects leather surfaces, preventing cracks and fading while keeping them soft and supple",
    price: 40,
  },
  {
    product: "Leather Ceramic Protection",
    description:
      "Adds a durable ceramic coating to your leather, repelling spills and stains while enhancing longevity.",
    price: 100,
  },
  {
    product: "Cloth Seat Protection",
    description:
      "Creates a protective barrier against spills and stains, keeping fabric seats cleaner for longer.",
    price: 50,
  },
];

const addedFees = [
  {
    product: "Lifted Truck Fee",
    description:
      "Applied to lifted trucks requiring extra time and effort for a complete detail.",
    price: 10,
  },
  {
    product: "Pet Hair Removal",
    description:
      "Thoroughly removes embedded pet hair from carpets and upholstery for a spotless interior.",
    price: 30,
  },
];
const AdditionalServices = () => {
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
              <div className="uppercase px-8 text-lg md:text-7xl font-thin">
                Enhance Your Vehicle Care
                <p className="text-sm font-thin">
                  Tailor Your Package with Specialized Add-Ons
                </p>
              </div>
              <div className="px-8 py-5">
                <a
                  href="#packages"
                  className="font-thin uppercase px-6 py-4 border text-white rounded-md hover:bg-yellow-300 hover:text-black hover:border-none duration-300"
                >
                  Our packages
                </a>
              </div>
            </div>
            <img
              src="/images/image-8.png"
              alt="image-08"
              className="w-full max-h-[700px] object-cover"
            />
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 p-5">
            <div className="pb-4 lg:pb-0 order-2 lg:order-none">
              <div className="py-[60px] lg:pr-[40px] md:p-[40px]">
                <div className="flex flex-col text-left">
                  <h2 className="uppercase font-thin text-4xl text-center">
                    Specialty Treatments
                  </h2>
                  <div className="bg-black rounded-md w-[70px] h-[2px] m-auto my-4" />
                </div>
                <div className="flex flex-col gap-4 text-sm font-thin text-black leading-7">
                  <div>
                    <span>
                      Enhance your detail with our specialized add-ons, designed
                      to provide extra protection and care for your vehicle.
                      Whether you&apos;re looking to protect your interior,
                      restore key areas, or tackle stubborn cleaning challenges,
                      these services offer the perfect finishing touch to your
                      detail.
                    </span>
                  </div>
                  <div>
                    <span>Available Add-Ons:</span>
                    {addOns.map((service) => {
                      return (
                        <div key={service}>
                          <ul>
                            <li>
                              <b>
                                ${service.price} - {service.product}
                              </b>{" "}
                              - {service.description}
                            </li>
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                  <div>
                    <span>Additional Fees</span>
                    {addedFees.map((fee) => {
                      return (
                        <div key={fee}>
                          <ul>
                            <li>
                              <b>
                                ${fee.price} - {fee.product}
                              </b>{" "}
                              - {fee.description}
                            </li>
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                  <div>
                    <span>
                      These add-ons can be combined with any detail package to
                      customize your service and keep your vehicle looking its
                      best!
                    </span>
                  </div>
                </div>
                <div className="pt-5">
                  <a
                    href="/contact-us"
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
            <img
              src="/images/image-22.png"
              alt="image-22"
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

export default AdditionalServices;
