import Image from "next/image";
import { useAuth } from "src/hooks/useAuth";
import { SubscriptionProps } from "./subscription.props";
import PlanCard from "../plan-card/plan-card";
const SubscriptionPlan = ({ products }: SubscriptionProps) => {
  const { logOut } = useAuth();
  return (
    <div className="min-h-screen">
      <div className="border-b-2 border-gray-300/20 h-[10vh] flex items-center justify-between px-4 md:px-10">
        <Image
          src={"./logo.svg"}
          alt="logo"
          width={56}
          height={56}
          className="cursor-pointer object-contain"
        />
        <div className="cursor-pointer hover:underline" onClick={logOut}>
          Log Out
        </div>
      </div>
      <div className="flex flex-col space-y-4 text-center">
        <h1 className="text-2xl md:text-5xl text-shadow-sm">
          Flexible pricing for teams of any size.
        </h1>
        <p className="text-xl text-shadow">
          Relaxing with watching your favourite movies and tv
        </p>
      </div>
      <div className="flex pt-10 justify-center items-center py-2">
        <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
          {products
            .map((item) => {
              return <PlanCard key={item.id} product={item} />;
            })
            .reverse()}
        </div>
      </div>
      {/* <div className="border-[1px] border-white/20" /> */}
    </div>
  );
};

export default SubscriptionPlan;
