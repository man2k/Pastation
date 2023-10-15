import Image from "next/image";
import Link from "next/link";

const navIcons = [
  { src: "/assets/icons/search.svg", alt: "search" },
  { src: "/assets/icons/black-heart.svg", alt: "heart" },
  { src: "/assets/icons/user.svg", alt: "user" },
];

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="flex justify-between items-center px-6 md:px-20 py-2 backdrop-blur-md">
        <Link href="/">
          <Image
            width={27}
            height={27}
            alt="logo"
            src="/logo.png"
            className="rounded-full"
          />
          <p>
            <span className="text-white font-serif mr-1">PA</span>
            <span className="text-green-300 text-xl font-serif">STATION</span>
          </p>
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
