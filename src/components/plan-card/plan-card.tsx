import React from "react";
import { PlanCardProps } from "./plan-card.props";
import { RiVipCrown2Line } from "react-icons/ri";
import { AiOutlineHourglass, AiOutlineVideoCameraAdd } from "react-icons/ai";

const PlanCard = ({ product }: PlanCardProps) => {
  return (
    <div
      key={product.id}
      className="max-w-sm cursor-pointer bg-white/20 px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500"
    >
      <h3 className="mb-3 text-xl font-bold text-[#e10856]">{product.name}</h3>
      <div className="relative">
        <img
          className="w-full h-[200px] rounded-xl object-cover object-center"
          alt="Colors"
          src={product.images[0]}
        />
        <p className="absolute top-0 bg-black/90 text-white font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
          {(product.default_price.unit_amount / 100).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
        <div className="absolute rounded-xl top-0 left-0 bg-black/10 w-full h-full"></div>
      </div>
      <div className="border-[1px] border-white/20 mt-4" />
      <button className="mt-4 w-full bg-[#e10856] py-4 rounded hover:opacity-80 font-semibold">
        BUY PLAN
      </button>
      <div className="my-4 flex flex-col space-y-2">
        {product.metadata.adv.split(", ").map((c, id) => {
          return (
            <div key={id} className="flex space-x-2 items-center">
              {id == 0 && <RiVipCrown2Line className="w-5 h-5" />}
              {id == 1 && <AiOutlineHourglass className="w-5 h-5" />}
              {id == 2 && <AiOutlineVideoCameraAdd className="w-5 h-5" />}
              <p>{c}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlanCard;
