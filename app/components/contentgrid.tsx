import Image from "next/image";

type Props = {
  imgSrcs: string[];
  designSvg?: string;
  details: string;
  headerText?: string;
  title: string;
};
export const ContentGrid = ({
  details,
  headerText,
  imgSrcs,
  title,
  designSvg,
}: Props) => {
  return (
    <div className=" mx-auto relative mt-10 md:mt-0">
      <p className="forma-deck block text-md md:text-xl uppercase">{title}</p>
      {designSvg && (
        <Image
          height={400}
          width={400}
          src={designSvg}
          alt={designSvg}
          className=" w-[50px] h-[50px] my-4"
        />
      )}
      <div className="md:text-xl text-justify text-md">
        <p
          className="font-medium opacity-80 leading-snug absans-regular"
          dangerouslySetInnerHTML={{ __html: details }}
        ></p>
      </div>
      <div className="grid grid-cols-1 gap-3 my-10 md:my-20">
        {imgSrcs.map((img) => (
          <Image
            alt=""
            height={1500}
            width={1500}
            src={img}
            key={img}
            className="w-full bg- p-4   object-cover border shadow-lg"
          />
        ))}
      </div>
    </div>
  );
};
