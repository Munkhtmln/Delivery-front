import Link from "next/link";

export default function Header1() {
  return (
    <div className="flex bg-[#18181B] h-[68px] justify-between px-24 items-center">
      <div className="flex w-[146px] h-[44px] gap-3">
        <img src="./Logo=Horizon.svg" alt="" />
      </div>
      <div className="flex  gap-3">
        <Link href={"/signup"}>
          <button className="bg-white">sign up</button>
        </Link>
        <button className="bg-red-500">login</button>
      </div>
    </div>
  );
}
