const Sidebar = () => {
  return (
    <div className="w-[205px] h-[100vh] bg-white">
      <img src="./Logo=Horizon.svg" alt="" />
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
