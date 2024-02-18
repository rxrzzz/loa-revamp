import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="z-10 h-8 w-fit mx-auto  fixed md:top-3 top-3 text-xl right-3 md:right-3   font-medium  flex gap-6 items-center px-5">
      <Link href={"/"}>Home</Link>
      <Link
        href="https://drive.google.com/file/d/1veTRsVzRgQ1US1iTT2cn8_Yay5lGQpeJ/view"
        target="_blank"
      >
        Resume
      </Link>
    </div>
  );
};
