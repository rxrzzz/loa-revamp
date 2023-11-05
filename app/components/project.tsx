import Image from "next/image";
import Link from "next/link";

type Props = {
  link: string;
  name: string;
  src: string;
  tags: string[];
};


export const Project = ({ link, name, src, tags }: Props) => {
  return (
    <Link
      href={link}
      className={`lg:h-[600px] h-[300px] w-full bg-tertiary rounded-xl relative overflow-clip cursor-pointer flex items-center justify-center hover:[&>img]:border-3 group transition-colors duration-300  
        }`}
    >
      <Image
        alt={name}
        src={src}
        height={800}
        width={1000}
        className="w-full mx-auto h-[70%] min-w-[320px] max-w-[90%] object-cover group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300 rounded-lg"
      />
      <p className="absolute bottom-4 left-4  text-xl font-medium ">{name}</p>
      <div className="xl:flex gap-4 text-sm absolute flex-wrap hidden bottom-4 right-4">
        {tags.map((tag) => (
          <p key={tag} className="rounded-3xl opacity-80">
            {tag}
          </p>
        ))}
      </div>
    </Link>
  );
};
