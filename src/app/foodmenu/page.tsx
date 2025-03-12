"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Divide } from "lucide-react";
import { Category } from "@/types";

const formSchema = z.object({
  categoryName: z.string().min(2, {
    message: "categoryName must be at least 2 characters.",
  }),
});

export default function ProfileForm() {
  const [categories, setCategories] = useState([]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      categoryName: "",
    },
  });

  const getNewCategory = async () => {
    const categoryData = await fetch("http://localhost:4000/food-category");
    const jsonCategoryData = await categoryData.json();
    console.log(jsonCategoryData);

    setCategories(jsonCategoryData.data);
  };
  useEffect(() => {
    getNewCategory();
  }, []);
  const createCategory = async (cate: string) => {
    const data = await fetch("http://localhost:4000/food-category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ categoryName: cate }),
    });

    getNewCategory();
  };
  const editCategory = async (cate: string) => {
    const data = await fetch("http://localhost:4000/food-category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ categoryName: cate }),
    });

    getNewCategory();
  };
  const deleteCategory = async (id: string) => {
    const data = await fetch(`http://localhost:4000/food-category/${id}`, {
      method: "DELETE",
    });

    getNewCategory();
  };
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    createCategory(values.categoryName);
  }

  return (
    <div>
      <div>
        <div></div>
        <div>
          {categories?.map((category: Category, index: number) => {
            return (
              <ContextMenu>
                <ContextMenuTrigger>
                  <div key={index}>{category.categoryName}</div>
                </ContextMenuTrigger>
                <ContextMenuContent>
                  <ContextMenuItem>Edit</ContextMenuItem>
                  <ContextMenuItem
                    onClick={() => {
                      deleteCategory(category._id);
                    }}
                  >
                    Delete
                  </ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
            );
          })}
          <div className="bg-red-700">
            <button>+</button>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="categoryName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
