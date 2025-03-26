import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Card from "./Card";
import Skeleton from "./Skeleton";
import { useState, useEffect } from "react";
import { FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaYahoo } from "react-icons/fa";
const Gallery = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      <Navbar />
      <div className="relative">
        <div>
          {/* overlay */}
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50" />
          <div className="absolute w-full h-full text-white flex flex-col justify-center">
            <div className="uppercase px-8 text-3xl md:text-7xl font-thin">
              Picture Perfect Details
              <p className="text-sm font-thin">
                See the stunning results of our expert detailing
              </p>
            </div>
          </div>
          <img
            src="/images/image-2.png"
            alt="image-2"
            loading="lazy"
            className="w-full max-h-[700px] object-cover"
          />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center text-center items-center my-2">
        <h1 className="font-thin text-2xl md:text-4xl uppercase">
          Follow us on our Socials for more !
        </h1>
        <div className="flex justify-between text-3xl">
          <a
            href="https://www.instagram.com/battleborn_detailing/"
            className="p-5"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@battleborndetailing?_t=ZT-8uG20gM12nm&_r=1"
            className="p-5"
          >
            <AiFillTikTok />
          </a>
          <a
            href="https://www.yelp.com/biz/battle-born-detailing-las-vegas"
            className="p-5"
          >
            <FaYahoo />
          </a>
        </div>
      </div>
      <div className="pb-16">{loading ? <Skeleton /> : <Card />}</div>
      <Footer />
    </div>
  );
};

export default Gallery;
