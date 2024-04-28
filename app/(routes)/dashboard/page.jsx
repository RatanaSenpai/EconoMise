"use client";
import React from "react";
import { UserButton, useUser } from "@clerk/nextjs";

function Dashboard() {
  const { user } = useUser();
  return (
    <div className="p-5">
      <h2 className="font-bold text-3xl">Hi, {user?.fullName} ✌🏻</h2>
      <p className="text-gray-500">
        Here's what happening with your money, Let's manage your expenses
      </p>
    </div>
  );
}

export default Dashboard;
