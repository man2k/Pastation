import Image from "next/image";
import Link from "next/link";

const navIcons = [
  { src: "/assets/icons/search.svg", alt: "search" },
  // { src: "/assets/icons/black-heart.svg", alt: "heart" },
  { src: "/assets/icons/user.svg", alt: "user" },
];

const Navbar = () => {
  return (
    <header className="w-full overflow-hidden">
      <nav
        className="flex justify-between items-center px-6 md:px-20 backdrop-blur-md border-b-[0.5px] border-white bg-gray-850 relative w-full
      "
      >
        <Link href="/" className="">
          {/* <Image
            width={27}
            height={27}
            alt="logo"
            src="/logo.png"
            className="rounded-full"
          /> */}
          <div className="flex gap-2 text-accent">
            <p className="text-neutral-content text-xl mt-4 mb-2">Pastation</p>
            <Image
              src="/assets/images/train.png"
              alt="train-logo"
              width={50}
              height={50}
              className="invert fixed ml-24"
            />
          </div>
        </Link>
        <Link href="/paste">
          <button className="btn text-xs rounded-full font-mono shadow-lg capitalize font-bold border-b-[1px] border-b-white shadow-slate-500">
            NEW
          </button>
        </Link>
        <div className="flex items-center gap-5">
          {navIcons.map((icon) => (
            <Image
              key={icon.alt}
              alt={icon.alt}
              src={icon.src}
              width={28}
              height={28}
              style={{ filter: "invert(100%)" }}
              className="object-contain"
            />
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
