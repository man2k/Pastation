import Image from "next/image";
// import loading from "../public/assets/loading.gif";

const Loading = () => {
  return (
    <>
      <Image
        src="/assets/loading.gif"
        alt="loading"
        width={80}
        height={80}
        className="stroke-white font-bold bg-inherit"
      />
    </>
  );
};

export default Loading;
