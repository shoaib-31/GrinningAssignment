import { Star } from "lucide-react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import backImge from "../assets/food.png";
import Image from "next/image";
import { useState } from "react";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import FormComponent from "./modal-content";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

const First = () => {
  const [open, setOpen] = useState(false);
  const onCloseModal = () => setOpen(false);

  return (
    <div className="flex flex-col relative justify-center items-center w-screen h-[70%] px-2 box-border md:px-8 md:pt-32 pb-12 overflow-hidden">
      <Image
        src={backImge}
        alt="backImage"
        height={1200}
        width={800}
        className="absolute top-0  z-0 h-full w-full object-cover overflow-hidden"
      />
      <div className="flex flex-col flex-nowrap gap-6 justify-center items-center">
        <div className="flex flex-nowrap">
          {" "}
          <AnimatedTooltip items={people} />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-2 flex-nowrap">
          <div className="flex flex-nowrap">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <div key={index}>
                  <Star
                    size={28}
                    strokeWidth={3}
                    className="text-[#ffdd00] w-4 h-4 md:w-10 md:h-10 mr-2"
                  />
                </div>
              ))}
          </div>

          <p className="text-xl text-gray-600">Loved By 1,000,000+ Peoples</p>
        </div>
      </div>
      <div className="flex justify-center mt-10 flex-col items-center gap-6">
        <h1 className="text-[#222222] text-6xl md:text-8xl max-w-[60%] text-center font-semibold">
          Get Your Best Meals
        </h1>
        <h4 className="max-w-[60%] text-center text-lg md:text-xl text-gray-800 ">
          We prepare your meals like no one else could , we take care of your
          body better than you
        </h4>
        <div className="flex items-center  flex-col">
          <button
            onClick={() => {
              (
                document.querySelector(
                  ".introjs-skipbutton"
                ) as HTMLButtonElement
              )?.click();
              setOpen(true);
            }}
            className="md:text-xl text-lg z-10 font-semibold text-black px-24 cursor-pointer py-4 md:py-6 getting-started rounded-full bg-[#ffdd00] mt-8"
          >
            Get Started
          </button>
          <Modal open={open} onClose={onCloseModal} center>
            <FormComponent setOpen={setOpen} />
          </Modal>
          <p className=" text-normal text-center text-black mt-4">
            Its Free and takes less than a minute
          </p>
        </div>
      </div>
    </div>
  );
};
export default First;
