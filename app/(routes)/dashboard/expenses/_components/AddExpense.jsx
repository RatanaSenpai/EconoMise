import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { db } from "@/utils/dbConfig";
import { Budgets, Expenses } from "@/utils/schema";
import moment from "moment";
import React, { useState } from "react";
import { toast } from "sonner";

function AddExpense({ budgetId, user, refreshData }) {
  const [name, setName] = useState();
  const [amount, setAmount] = useState();

  const addNewExpense = async () => {
    const result = await db
      .insert(Expenses)
      .values({
        name: name,
        amount: amount,
        budgetId: budgetId,
        createdAt: moment().format("DD/MM/YYYY"),
      })
      .returning({ insertedId: Budgets.id });

    setAmount("");
    setName("");

    if (result) {
      refreshData();
      toast("New Expense Added!");
    }
  };
  return (
    <div className="border p-5 rounded-lg">
      <h2 className="font-bold text-lg">Add Expenses</h2>
      <div>
        <h2 className="mt-5 mb-2 text-black font-medium my-1">Expense Name</h2>
        <Input
          value={name}
          placeholder="Home Decor for example"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <h2 className="mt-5 mb-2 text-black font-medium my-1">
          Expense Amount
        </h2>
        <Input
          value={amount}
          placeholder="100€ for example"
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <Button
        disabled={!(name && amount)}
        onClick={() => addNewExpense()}
        className="mt-4 w-full"
      >
        New Expenses
      </Button>
    </div>
  );
}

export default AddExpense;
