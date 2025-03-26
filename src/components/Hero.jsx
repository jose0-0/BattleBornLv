import { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 1;

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedVideos === totalVideos - 1) {
      setIsLoading(false);
    }
  }, [loadedVideos]);

  return (
    <div className="relative h-dvh w-full overflow-x-hidden">
      {isLoading && (
        <div className="flex-center absolute z-100 h-dvh w-full overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot" />
            <div className="three-body__dot" />
            <div className="three-body__dot" />
          </div>
        </div>
      )}
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-full overflow-hidden"
      >
        <div>
          <img
            src="/images/image-47.png"
            alt="hero-image"
            loading="lazy"
            className="absolute left-0 top-0 size-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <h1 className="hero-heading absolute bottom-5 right-5 z-40 sm:px-10 px-5 text-white">
          Mobile Detailing
        </h1>
        <div className="absolute left-0 top-0 z-40 size-full ">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="hero-heading text-white">Battle Born Lv</h1>
            <p className="mb-5 max-w-64 text-white font-thin">
              {" "}
              Experience showroom shine, wherever you are.{" "}
            </p>
            <div className="py-5">
              <a
                href="/contact"
                className=" uppercase px-6 py-4 border text-white rounded-md hover:bg-yellow-300 hover:text-black hover:border-none duration-300"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
