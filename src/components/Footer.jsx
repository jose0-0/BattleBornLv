import { FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaYahoo } from "react-icons/fa";

const Footer = () => {
  let phoneNumber = import.meta.env.VITE_PHONE_NUMBER;
  let emailAddress = import.meta.env.VITE_EMAIL_ADDRESS;
  const links = [
    // {
    //   name: "Home",
    //   path: "/",
    // },
    {
      name: "Services",
      path: "/#services",
    },
    // {
    //   name: "Areas",
    //   path: "/#areas",
    // },
    {
      name: "Reviews",
      path: "/#reviews",
    },
    // {
    //   name: "FAQ",
    //   path: "/faq",
    // },
    {
      name: "Gallery",
      path: "/gallery",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div>
      <div className="flex flex-col justify-center bg-black/5">
        <div className="bg-black/5 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-10">
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold text-3xl pb-6">SOCIALS</p>
              <div className="flex gap-6 pb-5">
                <a href="https://www.instagram.com/battleborn_detailing/">
                  <FaInstagram className="text-2xl cursor-pointer hover:text-accent" />
                </a>
                <a href="https://www.tiktok.com/@battleborndetailing?_t=ZT-8uG20gM12nm&_r=1">
                  <AiFillTikTok className="text-2xl cursor-pointer hover:text-accent" />
                </a>
                <a href="https://www.yelp.com/biz/battle-born-detailing-las-vegas">
                  <FaYahoo className="text-2xl cursor-pointer hover:text-accent" />
                </a>
              </div>
            </ul>
            <div className="pt-5">
              <ul className="">
                <p className="text-gray-800 font-bold text-3xl pb-3">
                  CONTACT US
                </p>
                <a
                  href={"tel:" + phoneNumber}
                  className="text-gray-500 text-sm pb-3 font-semibold hover:text-blue-600 cursor-pointer"
                >
                  {phoneNumber}
                </a>
                <div>
                  <a
                    href="mailto:battleborndetailing@yahoo.com"
                    className="text-gray-500 text-sm pb-3 font-semibold hover:text-blue-600 cursor-pointer"
                  >
                    {emailAddress}
                  </a>
                </div>
              </ul>
            </div>
          </div>
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold text-2xl pb-4">
                QUICK LINKS
              </p>
              <div className="flex flex-col">
                {links.map((link, index) => {
                  return (
                    <a
                      href={link.path}
                      key={index}
                      className="text-gray-500 text-sm pb-3 font-semibold hover:text-blue-600 cursor-pointer"
                    >
                      {link.name}
                    </a>
                  );
                })}
              </div>
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold text-2xl pb-4">
                HOURS OF OPERATION
              </p>
              <div className="">
                <h1 className="font-bold text-md">BY APPOINTMENT ONLY</h1>
                <div className="text-gray-500">
                  Monday - Friday: 5:00 PM - 8:00 PM
                </div>
                <div className="text-gray-500">Saturday: 6:30AM - 5:30PM</div>
                <div className="text-gray-500">Sunday: 6:30AM - 10:00AM</div>
              </div>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center p-5 bg-black/5">
          <h1 className="text-gray-500 font-semibold">
            © 2025 All rights reserved
            <span className="hover:text-accent font-semibold cursor-pointer">
              {" "}
              Battle Born LV
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
