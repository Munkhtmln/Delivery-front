"use client";

import { useState } from "react";
import FirstPage from "./firstpage";
import SecondPage from "./secondpage";

export default function Signup() {
  const [ChangePage, setChangePage] = useState<number>(0);
  const FormStep = [FirstPage, SecondPage][ChangePage];
  const [mail, setMail] = useState("");

  const next = () => {
    setChangePage(ChangePage + 1);
  };

  return (
    <div>
      {/* <FormStep next={next} /> */}
      <FormStep next={next} mail={mail} setMail={setMail} />
    </div>
  );
}
