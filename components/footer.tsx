import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Heart, ChevronDown, Instagram, Facebook, Twitter } from "lucide-react";
const Footer = () => {
  return (
    <div className="bg-[#faf8f0] w-[80%] md:w-[60%] md:ml-8 flex flex-col lg:flex-row flex-nowrap justify-between my-6">
      <div>
        <p>© Meal Prep</p>
      </div>
      <div className="flex flex-wrap items-center gap-2 md:gap-10 min-w-[305px]">
        <p className="text-gray-700 text-base font-semibold cursor-pointer">
          Services
        </p>
        <div className=" flex justify-center items-center gap-2 cursor-pointer">
          <span className="text-gray-700 text-base font-semibold">Policy </span>
        </div>
        <div className=" flex justify-center items-center gap-2 cursor-pointer">
          <span className="text-gray-700 text-base font-semibold">Refund </span>
        </div>
        <div className=" flex justify-center items-center gap-2 cursor-pointer">
          <span className="text-gray-700 text-base font-semibold">Prices </span>
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className=" flex justify-center items-center gap-2 cursor-pointer">
                <span className="text-gray-700 text-base font-semibold">
                  Help Center{" "}
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
      <div className="flex flex-nowrap gap-4 mt-1 logos">
        <Instagram className="text-gray-600" />
        <Facebook className="text-gray-600" />
        <Twitter className="text-gray-600" />
      </div>
    </div>
  );
};
export default Footer;
