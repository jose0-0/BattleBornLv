import { Images } from "../../constants";

const Skeleton = () => {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-5 lg:gap-8 [&>img:not(:first-child)]:mt-5 md:[&>img:not(:first-child)]:mt-8 overflow:hidden">
      {Images.map((image, index) => {
        return (
          <div
            key={index}
            className="border-1 rounded shadow-2xl w-[80%] max-w-[500px] m-6"
          >
            <div className="relative h-60 flex justify-center items-center bg-gray-300 animate-pulse">
              <svg
                className="w-10 h-10 text-gray-200 dark:text-gray-600 hover:scale-110 duration-300 transition-transform animate-pulse"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Skeleton;
