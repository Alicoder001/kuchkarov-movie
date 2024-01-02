import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";

const Auth = () => {
  const [auth, setAuth] = useState<"signin" | "signup">("signin");
  const toggleAuth = (state: "signin" | "signup") => {
    setAuth(state);
  };
  return (
    <div className="relative  flex flex-col h-screen w-screen md:items-center md:justify-center bg-black md:bg-transparent">
      <Head>
        <title>Auth</title>
        <meta
          name="description"
          content="For watching movies you should sign to app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Image
        src={"https://rb.gy/p2hphi"}
        alt="bg"
        fill
        className="object-cover -z-10 !hidden sm:!inline opacity-60"
      />
      <Image
        src="/logo.svg"
        alt="logo"
        width={70}
        height={70}
        className="absolute left-4 cursor-pointer object-contain block top-4"
      />
      <form className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14 ">
        <h1 className="text-4xl font-semibold">
          {auth === "signin" ? "Sign In" : "Sign Up"}
        </h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input type="text" placeholder="Email" className="input" />
          </label>
          <label className="inline-block w-full">
            <input type="password" placeholder="Password" className="input" />
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-[#e10856] py-3 font-semibold rounded"
        >
          {auth === "signin" ? "Sign In" : "Sign Up"}
        </button>
        {auth === "signin" ? (
          <div className="text-[gray]">
            Not yet account?{" "}
            <button
              onClick={() => {
                toggleAuth("signup");
              }}
              type="button"
              className="hover:underline text-white"
            >
              {" "}
              Sign Up Now
            </button>
          </div>
        ) : (
          <div className="text-[gray]">
            Already have account?{" "}
            <button
              onClick={() => {
                toggleAuth("signin");
              }}
              type="button"
              className="hover:underline text-white"
            >
              {" "}
              Sign In
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Auth;
