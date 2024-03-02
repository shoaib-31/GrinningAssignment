import React from "react";
type CardProp = {
  cardType: string;
  heading: string;
  subHeading: string;
  children: any;
};

const Card = ({ cardType, heading, subHeading, children }: CardProp) => {
  return (
    <div
      className={
        "bg-white rounded-md flex flex-col justify-center items-center px-6 py-8 w-[80%] md:w-[60%] my-8 shadow-xl md:ml-8 transform translate-y-0 opacity-100 transition-transform duration-500 ease-in-out hover:translate-y-[-10px] hover:opacity-90 cursor-pointer " +
        (cardType === "SUPPORT" ? "support-card" : "memberships-card")
      }
    >
      <p className="font-semibold text-gray-700 text-md md:text-xl tracking-wider">
        {cardType}
      </p>
      <h2 className="text-center text-[#222222] text-wrap text-2xl md:text-5xl  font-semibold mt-6 md:leading-[3.5rem]">
        {heading}
      </h2>
      <p className="text-center text-gray-800 text-md md:text-xl mt-5 w-[90%]">
        {subHeading}
      </p>
      {children}
    </div>
  );
};
export default Card;
