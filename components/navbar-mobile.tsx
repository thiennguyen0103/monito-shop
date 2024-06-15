"use client";

import { headerNavigation } from "@/constants/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const NavbarMobile = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <div className="md:hidden">
      <Menu onClick={toggleMenu} className="cursor-pointer" />
      <div
        className={cn(
          "fixed -left-[110%] top-0 z-10 h-screen w-screen bg-background duration-300",
          toggle && "left-0",
        )}
      >
        <div className="container relative flex h-full items-center justify-center">
          <X
            onClick={toggleMenu}
            className="absolute right-4 top-4 cursor-pointer"
          />
          <ul className="flex flex-col space-y-4">
            {headerNavigation.map((navigation) => (
              <Link key={navigation.id} href={navigation.path}>
                <li className="text-center text-lg font-semibold text-primary">
                  {navigation.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;
