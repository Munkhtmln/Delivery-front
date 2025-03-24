import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function AddDish() {
  const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    // defaultValues: {
    //   name: "",
    //   price: "",
    //   ingredients: "",
    //   image: "",
    // },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("NEMDEG AJILJ EHELLEE");
    // const imageUrl = await uploadImage(foodImageFile);
    // if (!imageUrl) return;
    // const response = await fetch("http://localhost:4000/food", {
    //   method: "",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     categoryName: values.categoryName,
    //     price: values.price,
    //     image: imageUrl,
    //     ingredients: values.ingredients,
    //     category: "",
    // //   }),
    // });
  };

  return (
    <div className="bg-white w-[100%] mt-10 ">
      <Dialog>
        <DialogTrigger asChild>
          <div className="w-[270px] h-[241px] flex flex-col border-red-500 border-[1px] border-dashed items-center justify-center">
            <Button
              variant="outline"
              className="rounded-full bg-red-500 h-[30px] w-[30px] text-white"
            >
              +
            </Button>

            <Label>Add a new dish to .....</Label>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogTitle></DialogTitle>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex gap-4">
                      <div className="w-[50%]">
                        <FormLabel>Food name</FormLabel>
                        <FormControl>
                          <Input placeholder="name" {...field} />
                        </FormControl>
                      </div>
                      <div className="w-[50%]">
                        <FormLabel>Food price</FormLabel>
                        <FormControl>
                          <Input placeholder="price" {...field} />
                        </FormControl>
                      </div>
                    </div>
                    <FormLabel>Ingredients</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="ingredients"
                        className="col-span-3 pb-10 pt-4"
                        {...field}
                      />
                    </FormControl>
                    <FormLabel></FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        placeholder="ingredients"
                        className="h-[100px] flex items-center align-middle justify-center"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />{" "}
            </form>
          </Form>
          <Button type="submit">Add dish</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
{
  /* <DialogHeader>
            <DialogTitle>Add new dish to...........</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4 ">
            <div className=" items-center gap-4 flex-col">
              <div className="flex">
                <div>
                  <Label htmlFor="type food name" className="text-right">
                    Food name
                  </Label>
                  <Input
                    id="name"
                    placeholder="type food name"
                    className="col-span-3 w-[80%]"
                  />
                </div>
                <div>
                  <Label htmlFor="enter price" className="text-right ">
                    Food frice
                  </Label>
                  <Input
                    id="name"
                    placeholder="enter a price"
                    className="col-span-3 w-[80%]"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="List ingredients" className="text-right">
                  Ingredients
                </Label>
                <Input
                  id="name"
                  placeholder="List ingredients"
                  className="col-span-3 pb-10 pt-4"
                />
              </div>
            </div>
            <div className="items-center gap-4  ">
              <Label htmlFor="List ingredients" className="text-right">
                Food image
              </Label>
              <Input type="file" className="h-[60px]" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter> */
}
