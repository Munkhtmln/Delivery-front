"use client";
import { Category } from "@/types";
import { useEffect, useState } from "react";

export default function Body() {
  const [categories, setCategories] = useState([]);
  const getNewCategory = async () => {
    const categoryData = await fetch("http://localhost:4000/food-category");
    const jsonCategoryData = await categoryData.json();
    console.log(jsonCategoryData);

    setCategories(jsonCategoryData.data);
  };
  useEffect(() => {
    getNewCategory();
  }, []);
  return (
    <div className=" ">
      <div id="Cat">
        {categories?.map((name: Category, index: number) => {
          return (
            <div key={index} className="flex border-2 rounded-3xl ">
              {name?.categoryName}
            </div>
          );
        })}
      </div>
      <div id="Menu"></div>
    </div>
  );
}
