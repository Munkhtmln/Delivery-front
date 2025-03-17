import {
  Bold,
  Italic,
  LayoutDashboardIcon,
  SettingsIcon,
  TruckIcon,
  Underline,
} from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-[10%] h-[100vh] bg-white flex-col gap-8">
      <img src="./Logo.svg" alt="" className="text-black " />
      <ToggleGroup
        type="single"
        variant="outline"
        className="flex-col gap-4 mt-8 justify-center items-center pr-2"
      >
        <Link href={"/foodmenu"}>
          <ToggleGroupItem
            className="data-[state=on]:bg-black w-[165px] h-[40px] data-[state=on]:text-white rounded-full border-none"
            value="bold"
          >
            <LayoutDashboardIcon />
            Foodmenu
          </ToggleGroupItem>
        </Link>
        <ToggleGroupItem
          className="data-[state=on]:bg-black  w-[165px] h-[40px] data-[state=on]:text-white border-none"
          value="italic"
        >
          <TruckIcon />
          Order info
        </ToggleGroupItem>
        <ToggleGroupItem
          className="data-[state=on]:bg-black  w-[165px] h-[40px] data-[state=on]:text-white border-none"
          value="underline"
        >
          <SettingsIcon />
          Settings
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex bg-[#f4f4f5]">
      <Sidebar />
      {children}
    </div>
  );
}
