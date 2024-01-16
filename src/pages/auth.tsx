import Head from "next/head";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { TextFild } from "src/components";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { AuthContext, AuthContextState } from "src/context/auth.context";
import { useRouter } from "next/router";
import { useAuth } from "src/hooks/useAuth";
const Auth = () => {
  const router = useRouter();
  const [auth, setAuth] = useState<"signin" | "signup">("signin");
  const { setIsLoading } = useAuth();
  const { user, error, isLoading, logOut, signIn, signUp } =
    useContext(AuthContext);
  const toggleAuth = (state: "signin" | "signup") => {
    setAuth(state);
  };

  if (user) {
    router.push("/");
  }

  const onSubmit = async (formData: { email: string; password: string }) => {
    if (auth === "signin") {
      await signIn(formData.email, formData.password);
    } else {
      setIsLoading(true);
      await signUp(formData.email, formData.password);
    }
  };
  const validation = Yup.object({
    email: Yup.string()
      .email("Enter valid email!")
      .required("Email is required!"),
    password: Yup.string()
      .min(4, "4 minimum character!")
      .required("Password is required!"),
  });
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

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={onSubmit}
        validationSchema={validation}
      >
        <Form
          placeholder={"form"}
          className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14 "
        >
          <h1 className="text-4xl font-semibold">
            {auth === "signin" ? "Sign In" : "Sign Up"}
          </h1>
          {error && (
            <p className="text-red-500 font-semibold text-center">{error}</p>
          )}
          <div className="space-y-4">
            <TextFild name="email" type="email" placeholder="Email" />
            <TextFild name="password" type="password" placeholder="Password" />
          </div>
          <button
            disabled={isLoading}
            type="submit"
            className="w-full bg-[#e10856] py-3 font-semibold rounded"
          >
            {isLoading
              ? "Loading..."
              : auth === "signin"
              ? "Sign In"
              : "Sign Up"}
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
        </Form>
      </Formik>
    </div>
  );
};

export default Auth;
