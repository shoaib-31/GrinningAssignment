"use client";
import React from "react";
import { Button } from "./ui/button";
import { Heart, ChevronDown, Search, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "../assets/logo.png";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const isPhone = useMediaQuery({
    query: "(max-width: 640px)",
  });
  if (isPhone) {
    return (
      <div className="bg-[#faf8f0] py-3 px-4 box-border">
        <Menu className="p-1 border-2 border-gray-200 rounded-md h-8 w-8" />
      </div>
    );
  }
  return (
    <nav className="flex justify-between flex-row items-center w-screen px-8 py-3 bg-[#faf8f0]">
      <div className="flex flex-nowrap items-center gap-10 min-w-[305px]">
        <p className="text-gray-700 text-base font-semibold cursor-pointer">
          FAQ
        </p>
        <div className=" flex justify-center items-center gap-2 cursor-pointer">
          <span className="text-gray-700 text-base font-semibold">
            Reviews{" "}
          </span>
          <Heart size={15} />
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className=" flex justify-center items-center gap-2 cursor-pointer">
                <span className="text-gray-700 text-base font-semibold">
                  Resources{" "}
                </span>
                <ChevronDown size={15} />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="flex flex-row flex-nowrap gap-10 justify-center items-center">
        <Image src={logo} height={80} width={80} alt="logo" />
      </div>
      <div className="flex flex-nowrap gap-1 items-center max-w-[305px]">
        <div className="flex flex-row flex-nowrap justify-center items-center gap-2 ">
          <Search className="text-gray-400" />
          <Input
            placeholder="Search meals"
            className="bg-gray-200 rounded-xl"
          />
        </div>

        <button className="bg-none text-nowrap text-lg font-semibold text-gray-900 hover:bg-[#ffdd00] transition-all px-3 py-2 rounded-full">
          Log in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
