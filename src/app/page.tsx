import Image from "next/image";
import Header1 from "./components/Header1";
import Footer from "./components/Footer";
import Cover from "./components/Cover";
import Body from "./components/Body";

export default function Home() {
  return (
    <div>
      <Header1 />
      <Cover />
      <Body />
      <Footer />
    </div>
  );
}
