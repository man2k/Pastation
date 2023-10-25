import Image from "next/image";
import Link from "next/link";

const navIcons = [
  // { src: "/assets/icons/search.svg", alt: "search" },
  // { src: "/assets/icons/black-heart.svg", alt: "heart" },
  { src: "/assets/icons/user.svg", alt: "user" },
];

const Navbar = () => {
  return (
    <header className="w-full overflow-hidden">
      <nav className="flex justify-between items-center px-6 md:px-20 backdrop-blur-md border-b-[0.5px] border-white bg-gray-850 relative w-full bg-zinc-950">
        <Link href="/" className="">
          {/* <Image
            width={27}
            height={27}
            alt="logo"
            src="/logo.png"
            className="rounded-full"
          /> */}
          <div className="flex gap-2 text-accent">
            <p className="text-white text-xl mt-4 mb-2">Pastation</p>
            <Image
              src="/assets/images/train.png"
              alt="train-logo"
              width={40}
              height={40}
              className="fixed ml-24 mt-1"
            />
          </div>
        </Link>
        <Link href="/paste">
          <button className="btn text-sm bg-gray-900 hover:bg-black font-mono shadow-lg capitalize font-bold border-b-[1px] border-b-white shadow-slate-500 mr-16 text-white">
            NEW
          </button>
        </Link>
        <div className="flex items-center gap-5">
          {navIcons.map((icon) => (
            <Link href={`/${icon.alt}`}>
              <Image
                key={icon.alt}
                alt={icon.alt}
                src={icon.src}
                width={28}
                height={28}
                style={{ filter: "invert(100%)" }}
                className="object-contain"
              />
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
