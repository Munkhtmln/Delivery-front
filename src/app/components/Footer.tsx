import { FacebookIcon, InstagramIcon, LucideFacebook } from "lucide-react";

export default function Footer() {
  return (
    <div className="max-w-[1440[px] flex flex-col h-[755px] mt-20 bg-[#18181B]  ">
      <div className="flex w-[100vw] ">
        {Array.from(Array(5)).map((_: any, index: any) => {
          return (
            <div key={index} className="w-[100%]">
              <h1 className=" h-[92px]  bg-red-500 font-bold text-2xl mt-20 items-center flex text-center text-wrap text-white  ">
                fresh fast delivered
              </h1>
            </div>
          );
        })}
      </div>
      <div className="flex w-[1264px] h-[228px] m-auto gap-[220px]">
        <div className="w-[116px]">
          <img src="./Logo=Vertical.svg" alt="" />
        </div>
        <div className="flex text-white w-[788px] h-[228px] gap-[112px]">
          <div className="font-normal text-base flex flex-col gap-4">
            <h1 className="text-[#71717A] ">NOMNOM</h1>
            <p>Home</p>
            <p>Contact us</p>
            <p>Delivery zone</p>
          </div>
          <div className="font-normal text-base flex flex-col gap-4">
            <h1 className="text-[#71717A]">Menu</h1>
            <p>Appetizers</p>
            <p>Salads </p>
            <p>Pizzas </p>
            <p>Lunch favorites</p>
            <p>Main dishes</p>
          </div>
          <div className="font-normal text-base flex flex-col gap-4">
            <h1 className="text-[#71717A]">""</h1>
            <p>Side dish</p>
            <p>Brunch</p>
            <p>Desserts</p>
            <p>Beverages</p>
            <p>Fish & Sea foods</p>
          </div>
          <div className="font-normal text-base flex flex-col gap-4">
            <h1 className="text-[#71717A]">Follow us</h1>
            <div className="flex gap-4">
              <LucideFacebook className=" bg-white fill-black rounded-xl stroke-inherit" />
              <InstagramIcon />
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="flex text-[#71717A] w-[1264px] h-[84px] border-t-[1px] border-gray-600 m-auto gap-[48px] items-center">
        <p>Copy right 2024©Nomnom LLC</p>
        <p>Privacy policy </p>
        <p>Terms and conditoin</p>
        <p>Cookie policy</p>
      </div>
    </div>
  );
}
