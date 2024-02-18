import Image from "next/image";
import React from "react";

type Props = {
  previousName: string;
  previousLink: string;
  nextName: string;
  nextLink: string;
};

export default function ProjectFooter({
  previousName,

  previousLink,
  nextName,

  nextLink,
}: Props) {
  return (
    <div className="mx-10 flex justify-between pb-8 text-4xl text-black font-extrabold absans-regular">
      <a href={previousLink} className="flex gap-3 items-center">
        <Image
          alt="Previous project"
          src={"/left.svg"}
          width={80}
          height={80}
        />{" "}
        <span>{previousName}</span>
      </a>
      <a href={nextLink} className="flex gap-3 items-center">
        <span>{nextName}</span>
        <Image
          alt="Next project"
          src={"/right.svg"}
          width={80}
          height={80}
        />{" "}
      </a>
    </div>
  );
}
