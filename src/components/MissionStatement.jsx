import { useState, useRef } from "react";

const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef();

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 10;
    const tiltY = (relativeX - 0.5) * -10;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95, 0.95, 0.95)`;

    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };
  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};
const MissionStatement = () => {
  return (
    <div className="w-full flex">
      <div className="w-full bg-white p-5">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="py-[60px] lg:pr-[40px] md:p-[40px] lg:pb-0 order-2 lg:order-none">
            <div className="flex flex-col">
              <h2 className="uppercase font-thin text-4xl">
                Driven by Excellence: Our Mission
              </h2>
              <div className="bg-black rounded-md w-[70px] h-[2px] my-4" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="font-thin text-sm leading-7">
                <div className="py-1">
                  At Battle Born Detailing, our goal is to provide top-quality
                  detailing services while educating our customers on proper
                  vehicle care. We believe that a clean car isn&apos;t just
                  about appearance—it&apos;s about preservation and protection.
                  By using high-quality products and professional techniques, we
                  ensure every vehicle gets the care it deserves.
                </div>
                <div className="py-1">
                  We prioritize trust and customer satisfaction, taking the time
                  to understand each client&apos;s needs. Whether it&apos;s a
                  routine maintenance wash or a full interior deep clean, we
                  treat every vehicle like our own. Our mission is to keep Las
                  Vegas cars spotless—one detail at a time in the Battle Born
                  State.
                </div>
              </div>
            </div>
            <div className="pt-5">
              <a
                href="/ceramic-coatings"
                className="uppercase display flex justify-center items-center rounded-md bg-black text-sm text-white w-[250px] h-[60px] duration-300 hover:bg-gray-600"
              >
                ceramic coatings
              </a>
            </div>
            <div className="pt-5">
              <a
                href="/detail-packages"
                className="uppercase display flex justify-center items-center rounded-md bg-white text-sm text-black border-[1px] border-black w-[250px] h-[60px] duration-300 hover:bg-black hover:text-white"
              >
                Detail packages
              </a>
            </div>
          </div>
          <BentoTilt>
            <img
              src="/images/red-toyota.png"
              alt="image-8"
              className="w-[65rem] h-[40rem] object-cover object-bottom rounded-sm"
            />
          </BentoTilt>
        </div>
      </div>
    </div>
  );
};

export default MissionStatement;
