import { Images } from "../../constants";

const Card = () => {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-5 lg:gap-8 [&>img:not(:first-child)]:mt-5 md:[&>img:not(:first-child)]:mt-8 overflow:hidden px-5">
      {Images.map((image, index) => {
        return (
          <img
            loading="lazy"
            key={index}
            src={image.img}
            alt={image.alt}
            className="hover:scale-110 duration-300 transition-transform"
          />
        );
      })}
    </div>
  );
};

export default Card;
