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
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

const formSchema = z.object({
  categoryName: z.string().min(2, {
    message: "categoryName must be at least 2 characters.",
  }),
});

export default function ProfileForm() {
  const [categories, setCategories] = useState([]);
  const [editCategoryValue, setEditCategoryValue] = useState("");
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
  const editCategory = async (id: string) => {
    console.log(editCategoryValue);
    const data = await fetch(`http://localhost:4000/food-category/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ categoryName: editCategoryValue }),
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

  const handleChange = (e: any) => {
    const { value } = e.target;
    setEditCategoryValue(value);
  };

  return (
    <div className="w-[80%] m-auto mt-10 ">
      <div className="">
        <div></div>
        <div className="flex gap-4 m-auto bg-white w-[100%] items-center justify-center h-[170px] ">
          {categories?.map((category: Category, index: number) => {
            return (
              <div key={index} className="">
                <Dialog>
                  <ContextMenu>
                    <ContextMenuTrigger>
                      <div className="border-[1px] rounded-full ">
                        {category.categoryName}
                      </div>
                    </ContextMenuTrigger>
                    <ContextMenuContent>
                      <DialogTrigger asChild>
                        <ContextMenuItem>Edit</ContextMenuItem>
                      </DialogTrigger>

                      <ContextMenuItem
                        onClick={() => {
                          deleteCategory(category._id);
                        }}
                      >
                        Delete
                      </ContextMenuItem>
                    </ContextMenuContent>
                  </ContextMenu>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Edit Category Name</DialogTitle>
                      <DialogDescription>
                        Make changes to your category name here. Click save when
                        you're done.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Name
                        </Label>
                        <Input
                          placeholder={editCategoryValue}
                          onChange={handleChange}
                          id="name"
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4"></div>
                    </div>
                    <DialogFooter>
                      <Button
                        onClick={() => {
                          editCategory(category._id);
                        }}
                        type="submit"
                      >
                        Save changes
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            );
          })}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-red-600">+</Button>
            </DialogTrigger>
            <DialogContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
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
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
