"use client";

import { Heart, LogOut, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import NavBar from "./navbar";
import NavbarMobile from "./navbar-mobile";
import SearchInput from "./search-input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Header = () => {
  const router = useRouter();
  const headerRef = useRef<HTMLElement>(null);
  const [isLogin, setIsLogin] = useState(false);

  const redirectToLoginPage = () => {
    router.push("/login");
  };

  useEffect(() => {
    const shrinkHeader = () => {
      if (headerRef.current) {
        if (
          document.body.scrollTop > 60 ||
          document.documentElement.scrollTop > 60
        ) {
          headerRef.current.classList.add("md:py-3");
          headerRef.current.classList.add("bg-white/80");
        } else {
          headerRef.current.classList.remove("md:py-3");
          headerRef.current.classList.remove("bg-white/80");
        }
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed left-0 right-0 top-0 z-40 py-3 duration-300 md:py-7"
    >
      <div className="center container flex items-center justify-between gap-4">
        <NavbarMobile />
        <div className="flex items-center justify-center gap-12">
          <Link href="/" className="flex-1">
            <Image src="/logo.svg" alt="Logo" width={115} height={40} className="min-w-[92px]" />
          </Link>
          <NavBar />
        </div>
        <div className="flex items-center justify-center gap-12">
          <SearchInput />
          {isLogin ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage />
                  <AvatarFallback className="font-semibold">TN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="bottom"
                align="end"
                className="min-w-40"
              >
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link href="/profile">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link href="/profile">
                    <Heart className="mr-2 h-4 w-4" />
                    <span>My Favorites</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <LogOut color="#ff564f" className="mr-2 h-4 w-4" />
                  <span className="text-state-pink-red">Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button variant="rounded" onClick={redirectToLoginPage}>
              Login
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
