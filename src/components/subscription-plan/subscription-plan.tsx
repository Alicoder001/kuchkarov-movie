import Image from "next/image";
import { useAuth } from "src/hooks/useAuth";
import { AiOutlineHourglass, AiOutlineVideoCameraAdd } from "react-icons/ai";
import { RiVipCrown2Line } from "react-icons/ri";
const SubscriptionPlan = () => {
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
          <div className="max-w-sm cursor-pointer bg-white/20 px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <h3 className="mb-3 text-xl font-bold text-[#e10856]">Starter</h3>
            <div className="relative">
              <img
                className="w-full rounded-xl"
                alt="Colors"
                src="https://picsum.photos/300/200?grayscale"
              />
              <p className="absolute top-0 bg-black/90 text-white font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                10$
              </p>
              <div className="absolute rounded-xl top-0 left-0 bg-black/10 w-full h-full"></div>
            </div>
            <div className="border-[1px] border-white/20 mt-4" />
            <button className="mt-4 w-full bg-[#e10856] py-4 rounded hover:opacity-80 font-semibold">
              BUY PLAN
            </button>
            <div className="my-4 flex flex-col space-y-2">
              <div className="flex space-x-2 items-center">
                <RiVipCrown2Line className="w-5 h-5" />
                <p>VIP plan.</p>
              </div>
              <div className="flex space-x-2 items-center">
                <AiOutlineHourglass className="w-5 h-5" />
                <p>100 hours video.</p>
              </div>
              <div className="flex space-x-2 items-center">
                <AiOutlineVideoCameraAdd className="w-5 h-5" />
                <p>HD format.</p>
              </div>
            </div>
          </div>
          <div className="max-w-sm cursor-pointer bg-white/20 px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <h3 className="mb-3 text-xl font-bold text-[#e10856]">Starter</h3>
            <div className="relative">
              <img
                className="w-full rounded-xl"
                alt="Colors"
                src="https://picsum.photos/300/200?grayscale"
              />
              <p className="absolute top-0 bg-black/90 text-white font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                10$
              </p>
              <div className="absolute rounded-xl top-0 left-0 bg-black/10 w-full h-full"></div>
            </div>
            <div className="border-[1px] border-white/20 mt-4" />
            <button className="mt-4 w-full bg-[#e10856] py-4 rounded hover:opacity-80 font-semibold">
              BUY PLAN
            </button>
            <div className="my-4 flex flex-col space-y-2">
              <div className="flex space-x-2 items-center">
                <RiVipCrown2Line className="w-5 h-5" />
                <p>VIP plan.</p>
              </div>
              <div className="flex space-x-2 items-center">
                <AiOutlineHourglass className="w-5 h-5" />
                <p>100 hours video.</p>
              </div>
              <div className="flex space-x-2 items-center">
                <AiOutlineVideoCameraAdd className="w-5 h-5" />
                <p>HD format.</p>
              </div>
            </div>
          </div>
          <div className="max-w-sm cursor-pointer bg-white/20 px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <h3 className="mb-3 text-xl font-bold text-[#e10856]">Starter</h3>
            <div className="relative">
              <img
                className="w-full rounded-xl"
                alt="Colors"
                src="https://picsum.photos/300/200?grayscale"
              />
              <p className="absolute top-0 bg-black/90 text-white font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                10$
              </p>
              <div className="absolute rounded-xl top-0 left-0 bg-black/10 w-full h-full"></div>
            </div>
            <div className="border-[1px] border-white/20 mt-4" />
            <button className="mt-4 w-full bg-[#e10856] py-4 rounded hover:opacity-80 font-semibold">
              BUY PLAN
            </button>
            <div className="my-4 flex flex-col space-y-2">
              <div className="flex space-x-2 items-center">
                <RiVipCrown2Line className="w-5 h-5" />
                <p>VIP plan.</p>
              </div>
              <div className="flex space-x-2 items-center">
                <AiOutlineHourglass className="w-5 h-5" />
                <p>100 hours video.</p>
              </div>
              <div className="flex space-x-2 items-center">
                <AiOutlineVideoCameraAdd className="w-5 h-5" />
                <p>HD format.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="border-[1px] border-white/20" /> */}
    </div>
  );
};

export default SubscriptionPlan;
