import Link from "next/link";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-24">
      <div className="flex flex-col items-center gap-8 w-full h-full py-10 shadow-lg shadow-white bg-[url('../public/assets/images/bg7.jpg')]">
        <div className="mt-20">
          <h1 className="text-neutral-content text-5xl">
            <span className="text-stone-200">PA</span>{" "}
            <span className="text-amber-500">Station</span>
          </h1>
          <h2>
            All In One Pasting{" "}
            <span className="text-emerald-400">Solution</span>
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
