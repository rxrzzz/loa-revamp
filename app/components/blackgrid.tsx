import Image from "next/image";

type Props = {
  details: string;
  imgSrc: string;
  bgColor: string;
};

export const BlackGrid = ({ details, imgSrc, bgColor }: Props) => {
  return (
    <div
      className="md:px-12  shadow-xl md:pt-12 pb-6 h-fit p-4 md:my-16 md:py-16 md:min-h-screen absans-regular"
      style={{ backgroundColor: bgColor }}
    >
      <div className="md:flex flex-wrap justify-between mx-auto py-16">
        <div className="md:w-6/12 text-white max-w-2xl">
          <p className="lg:text-4xl md:text-3xl text-lg mt-4 lead">{details}</p>
        </div>
        <div className="md:w-6/12 sticky top-16 ">
          <Image alt="" src={imgSrc} height={1000} width={1000} className="" />
        </div>
      </div>
    </div>
  );
};
