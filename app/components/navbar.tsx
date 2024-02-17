import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="z-10 h-8  fixed md:top-8 top-3 right-3 md:right-8 bg-opacity-90 backdrop-blur-3xl backdrop-filter font-medium bg-[#D9D9D8] border-opacity-50 flex gap-6 items-center px-5">
      <Link href={"/"}>Home</Link>
      <Link
        href="https://drive.google.com/file/d/1veTRsVzRgQ1US1iTT2cn8_Yay5lGQpeJ/view"
        target="_blank"
      >
        Resume
      </Link>
      {/* <Link href="/#work">Work</Link> */}
    </div>
  );
};
