export default function Header1() {
  return (
    <div className="flex bg-[#18181B] h-[68px] justify-between px-24 items-center">
      <div className="flex w-[146px] h-[44px] gap-3">
        <img src="./Logo=Horizon.svg" alt="" />
      </div>
      <div className="flex  gap-3">
        <button className="bg-white">sign up</button>
        <button className="bg-red-500">login</button>
      </div>
    </div>
  );
}
