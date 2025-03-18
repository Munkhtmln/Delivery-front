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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AddDish() {
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
          <DialogHeader>
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
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
