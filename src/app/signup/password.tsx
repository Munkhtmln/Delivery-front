import { ChevronLeft } from "lucide-react";

export default function Password() {
  return (
    <div className="flex gap-5 m-auto max-w-[2000px] max-h-[2000px] mt-[50px]">
      <div className="flex flex-col max-w-[416px]  h-[288px] m-auto items-start">
        <button className="mb-8 border-[1px] rounded-sm">
          <ChevronLeft />
        </button>
        <h1>asdasdhgaaSA </h1>
        <p className="text-gray-500 ">GASFSDGASFASFA</p>
        <input
          className="border-2 w-[416px] h-[36px] rounded-sm mt-8 pl-4"
          type="mail"
          name=""
          id=""
          placeholder="Enter your email address"
        />
        <button className="w-[416px] h-[36px] rounded-sm mt-8 bg-gray-300">
          Let's Go
        </button>
        <div className="flex mt-8 justify-center w-[416px] gap-2">
          <p className="text-gray-500">Already have an account?</p>{" "}
          <p className="text-blue-600">Log in</p>
        </div>
      </div>
      <div className="  m-auto h-[100%]">
        <img className="w-[856px] h-[904px]" src="./Frame.svg" alt="" />
      </div>
    </div>
  );
}
