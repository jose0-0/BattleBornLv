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
      <div className="flex flex-col justify-center bg-[#4169E1]">
        <div className="bg-black/5 h-1/2 w-full flex md:flex-row flex-col justify-around items-center p-10">
          <div className="p-5 text-center items-center">
            <ul>
              <p className="text-white font-thin text-3xl pb-6">SOCIALS</p>
              <div className="flex gap-6 pb-5 justify-center">
                <a href="https://www.instagram.com/battleborn_detailing/">
                  <FaInstagram className="text-2xl cursor-pointer text-white" />
                </a>
                <a href="https://www.tiktok.com/@battleborndetailing?_t=ZT-8uG20gM12nm&_r=1">
                  <AiFillTikTok className="text-2xl cursor-pointer text-white" />
                </a>
                <a href="https://www.yelp.com/biz/battle-born-detailing-las-vegas">
                  <FaYahoo className="text-2xl cursor-pointer text-white" />
                </a>
              </div>
            </ul>
            <div className="pt-5">
              <ul>
                <p className="text-white font-thin text-3xl pb-3">CONTACT US</p>
                <a
                  href={"tel:" + phoneNumber}
                  className="text-white text-sm pb-3 font-thin cursor-pointer"
                >
                  {phoneNumber}
                </a>
                <div>
                  <a
                    href="mailto:battleborndetailing@yahoo.com"
                    className="text-white text-sm pb-3 font-thin cursor-pointer"
                  >
                    {emailAddress}
                  </a>
                </div>
              </ul>
            </div>
          </div>
          <div className="p-5 text-center">
            <ul>
              <p className="text-white font-thin text-2xl pb-4">QUICK LINKS</p>
              <div className="flex flex-col text-center">
                {links.map((link, index) => {
                  return (
                    <a
                      href={link.path}
                      key={index}
                      className="text-white text-sm pb-3 font-thin cursor-pointer"
                    >
                      {link.name}
                    </a>
                  );
                })}
              </div>
            </ul>
          </div>
          <div className="p-5 text-center">
            <ul>
              <p className="text-white font-thin text-2xl pb-4">
                HOURS OF OPERATION
              </p>
              <div className="">
                <h1 className="font-thin text-white text-md">
                  BY APPOINTMENT ONLY
                </h1>
                <div className="text-white">
                  Monday - Friday: 5:00 PM - 8:00 PM
                </div>
                <div className="text-white">Saturday: 6:30AM - 5:30PM</div>
                <div className="text-white">Sunday: 6:30AM - 10:00AM</div>
              </div>
            </ul>
          </div>
        </div>
        <div className="text-white font-thin flex flex-col justify-center items-center text-center p-2 bg-[#100845]">
          <h1 className="">
            © 2025 All rights reserved
            <span className=" cursor-pointer"> Battle Born LV</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
