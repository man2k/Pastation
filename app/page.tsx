import Link from "next/link";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-24 bg-[url('../public/assets/bck.jpg')]">
      <div className="flex flex-col items-center gap-8 w-full h-[25rem] py-10 shadow-lg shadow-white bg-[url('../public/assets/bck.jpg')]">
        <div className="mt-20">
          <h1 className="text-neutral-content text-5xl">
            <span className="text-white">PA</span>{" "}
            <span className="text-amber-400">Station</span>
          </h1>
          <h2 className="text-white">
            All In One Pasting{" "}
            <span className="text-emerald-300">Solution</span>
          </h2>
        </div>
        <div>
          <Link href="/paste">
            <button className="btn border-0 border-b-[1px] border-white">
              Try it now..
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default page;
