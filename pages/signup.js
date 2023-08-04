import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import FormThemeToggler from "@/components/UI/Buttons/FormThemeToggler";
import { auth, db } from "@/firebase/client.config";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

import SignupImg from "../public/Auth/signup.webp";
import { Icons } from "@/components/UI/Icons";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const router = useRouter();
  const { previous } = router.query;

  const handleSignUp = async (event) => {
    event.preventDefault();
    setError(false);
    setIsLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: firstName + " " + lastName,
      });

      await sendEmailVerification(user);

      if (router.asPath === "/profile") {
        router.reload();
      } else {
        router.push(previous);
      }
    } catch (error) {
      setIsLoading(false);
      setError(true);
      switch (error.message) {
        case "Firebase: Error (auth/email-already-in-use).":
          setErrorMessage("An account already exists with this email address");
          break;
        case "Firebase: Error (auth/invalid-email).":
          setErrorMessage("Invalid email address provided");
          break;
        case "Firebase: Error (auth/invalid-password	).":
          setErrorMessage("Invalid password provided");
          break;
        case "Firebase: Error (auth/network-request-failed).":
          setErrorMessage(
            "Network Disconnected, please check your internet connection",
          );
          break;

        default:
          setErrorMessage("Sign up error occurred, please retry");
          break;
      }
    }
  };

  return (
    <>
      <Head>
        <title>Sign up - The Watchers.</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen min-h-[100dvh] max-w-[1920px] mx-auto flex relative">
        <form
          className="absolute top-0 z-10 w-full h-full overflow-scroll xl:basis-1/2 backdrop-blur-xl xl:static"
          onSubmit={handleSignUp}
        >
          <div className="flex items-center justify-center w-full min-h-[100dvh]">
            <section className="border border-black bg-white w-[90%] max-w-[450px] flex flex-col gap-5 p-5 pb-6 rounded-xl text-black my-10">
              <div className="flex justify-between">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    router.back();
                  }}
                  className="flex items-center text-lg gap-2"
                >
                  <FaArrowLeft /> back
                </button>

                <FormThemeToggler />

                <Link
                  href={"/"}
                  className="px-8 py-3 text-white bg-black border border-black rounded-full duration-500 hover:bg-transparent hover:text-black"
                >
                  Home
                </Link>
              </div>

              <h2 className="text-4xl text-center xs:text-2xl">
                Join the Rocket!
              </h2>

              <div className="flex gap-5">
                <label htmlFor="fname">
                  First name
                  <input
                    id="fname"
                    placeholder="John"
                    type="text"
                    autoCapitalize="none"
                    autoComplete="given-name"
                    autoCorrect="off"
                    disabled={isLoading}
                    required
                    minLength={3}
                    className="w-full h-12 pl-3 mt-2 text-black bg-transparent border border-black rounded"
                    onChange={(event) => setFirstName(event.target.value)}
                  />
                </label>

                <label htmlFor="lname">
                  Last name
                  <input
                    id="lname"
                    placeholder="Doe"
                    type="text"
                    autoCapitalize="none"
                    autoComplete="family-name"
                    autoCorrect="off"
                    disabled={isLoading}
                    required
                    minLength={3}
                    className="w-full h-12 pl-3 mt-2 text-black bg-transparent border border-black rounded"
                    onChange={(event) => setLastName(event.target.value)}
                  />
                </label>
              </div>

              <label htmlFor="email">
                Email
                <input
                  id="email"
                  placeholder="john.doe@example.com"
                  type="email"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                  disabled={isLoading}
                  required
                  className="w-full h-12 pl-3 mt-2 text-black bg-transparent border border-black rounded"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </label>

              <label htmlFor="password">
                Password
                <input
                  id="password"
                  placeholder="Your password"
                  type="password"
                  autoCapitalize="none"
                  autoComplete="new-password"
                  autoCorrect="off"
                  disabled={isLoading}
                  required
                  minLength={8}
                  className="w-full h-12 pl-3 mt-2 text-black bg-transparent border border-black rounded"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </label>

              {error && (
                <div className="text-center text-red-500">{errorMessage}</div>
              )}

              <p className="text-center xs:text-xs">
                Already have an account?&nbsp;
                <Link
                  className="font-bold"
                  href={`/login?previous=${previous}`}
                >
                  Login
                </Link>
              </p>

              <button
                disabled={isLoading}
                className="flex items-center justify-center py-3 text-lg text-white bg-black border rounded-full duration-300 hover:bg-transparent hover:text-black hover:border-black"
                type="submit"
              >
                {isLoading && (
                  <Icons.spinner className="w-6 h-6 mr-2 animate-spin" />
                )}

                {error ? "Retry" : "Sign up"}
              </button>
            </section>
          </div>
        </form>

        <section className="relative xl:basis-1/2 basis-full">
          <Image
            src={SignupImg}
            fill
            sizes="(max-width: 767px) 100vw, (min-width: 768px) 50vw"
            priority
            placeholder="blur"
            alt="Sign-up img"
          />
        </section>
      </main>
    </>
  );
};

export default SignUp;