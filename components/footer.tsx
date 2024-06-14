import {
  headerNavigation,
  socialMediaNavigation,
} from "@/constants/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-[#FCEED5] pt-20">
      <div className="container">
        <div className="flex flex-col">
          <div className="rounded-2xl bg-primary p-8">
            <form>
              <div className="flex flex-col items-center gap-5 md:flex-row">
                <label className="basis-1/3 text-wrap text-2xl font-bold text-neutral-00">
                  Register now so you don&apos;t miss our programs
                </label>
                <div className="flex flex-1 w-full md:basis-2/3 flex-col items-center gap-3 rounded-xl bg-background p-3 md:flex-row">
                  <input
                    type="text"
                    placeholder="Enter your Email"
                    className="h-12 w-full flex-1 rounded-md border border-neutral-40 px-8 py-2.5"
                  />
                  <Button type="submit" size="lg" className="w-full md:w-fit">
                    Subscribe Now
                  </Button>
                </div>
              </div>
            </form>
          </div>
          <div className="border-b border-neutral-20">
            <div className="my-10 flex flex-col flex-wrap justify-between gap-4 md:flex-row">
              <ul className="flex items-center justify-center gap-[60px]">
                {headerNavigation.map((navigation) => (
                  <Link href={navigation.path} key={navigation.id}>
                    <li className="font-semibold">{navigation.title}</li>
                  </Link>
                ))}
              </ul>
              <ul className="flex items-center justify-center gap-[60px]">
                {socialMediaNavigation.map((navigation) => (
                  <Link href={navigation.path} key={navigation.id}>
                    <li className="font-semibold">
                      <Image
                        src={navigation.icon}
                        alt={navigation.title}
                        height={24}
                        width={24}
                      />
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          <div className="my-10 flex flex-col justify-center gap-2 md:flex-row md:justify-between">
            <p className="order-last flex justify-center text-neutral-60 md:order-none">
              &#169; 2022 Monito. All rights reserved.
            </p>
            <Link
              href="/"
              className="order-1 mb-4 flex justify-center md:order-none md:mb-0"
            >
              <Image
                src="/logo.svg"
                alt="Logo"
                width={115}
                height={40}
                className="text-center"
              />
            </Link>
            <div className="order-2 flex items-center justify-center gap-7 md:order-none">
              <Link href="/" className="text-neutral-60">
                Terms of Service
              </Link>
              <Link href="/" className="text-neutral-60">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
