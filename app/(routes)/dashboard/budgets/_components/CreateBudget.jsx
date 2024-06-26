"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import EmojiPicker from "emoji-picker-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Budgets } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { toast } from "sonner";
import { db } from "@/utils/dbConfig";

function CreateBudget({ refreshData }) {
  const [emojiIcon, setEmojiIcon] = useState("😉");
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);

  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  const { user } = useUser();
  const onCreateBudget = async () => {
    const result = await db
      .insert(Budgets)
      .values({
        name: name,
        amount: amount,
        createdBy: user?.primaryEmailAddress?.emailAddress,
        icon: emojiIcon,
      })
      .returning({ insertedId: Budgets.id });

    if (result) {
      refreshData();
      toast("New Budget Created!");
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div
            className="bg-slate-100 p-12 rounded-md items-center flex flex-col border-2 
      border-dashed cursor-pointer hover:shadow-md"
          >
            <h2 className="text-3xl">+</h2>
            <h2>Create New Budget</h2>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Budget</DialogTitle>
            <DialogDescription>
              <div>
                <div className="mt-5">
                  <Button
                    variant="outline"
                    className="text-lg"
                    onClick={() => setOpenEmojiPicker(!openEmojiPicker)}
                  >
                    {" "}
                    {emojiIcon}{" "}
                  </Button>
                  <div>
                    <EmojiPicker
                      open={openEmojiPicker}
                      onEmojiClick={(e) => {
                        setEmojiIcon(e.emoji);
                        setOpenEmojiPicker(false);
                      }}
                    />
                  </div>
                  <div>
                    <h2 className="mt-5 mb-2 text-black font-medium my-1">
                      Budget Name
                    </h2>
                    <Input
                      placeholder="e.g. Vacation, Groceries, Sports..."
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <h2 className="mt-5 mb-2 text-black font-medium my-1">
                      Budget Amount
                    </h2>
                    <Input
                      type="number"
                      placeholder="e.g. 500€"
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button
                disabled={!name || amount <= 0}
                onClick={() => onCreateBudget()}
                className="mt-5 w-full"
              >
                Create Budget
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateBudget;
