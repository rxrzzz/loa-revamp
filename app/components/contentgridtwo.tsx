import Image from "next/image";

type Props = {
  imgSrcs: string[];
  details: string;
  headerText: string;
  designSvg?: string;
  title: string;
};
export const ContentGridTwo = ({
  details,
  headerText,
  imgSrcs,
  designSvg,
  title,
}: Props) => {
  return (
    <div className=" mx-auto relative md:flex justify-between">
      <div className="md:text-3xl text-lg md:mb-20 mb-5 md:w-5/12 max-w-3xl md:sticky top-10 md:h-screen">
        <p className="forma-deck block text-xl md:text-2xl uppercase ">
          {title}
        </p>
        {designSvg && (
          <Image
            height={400}
            width={400}
            src={designSvg}
            alt={designSvg}
            className=" w-[50px] h-[50px] my-4"
          />
        )}
        <p
          className="font-medium opacity-90 leading-snug max-w-xl"
          dangerouslySetInnerHTML={{ __html: details }}
        ></p>
      </div>
      <div className="flex flex-col md:w-6/12 gap-8 md:mb-20 mb-10">
        {imgSrcs.map((img) => (
          <Image
            alt=""
            height={1000}
            width={1000}
            src={img}
            key={img}
            className="w-full  object-cover border shadow-lg "
          />
        ))}
      </div>
    </div>
  );
};
