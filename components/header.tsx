"use client";

import { Heart, LogOut, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
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
  const [isLogin, setIsLogin] = useState(false);

  const redirectToLoginPage = () => {
    router.push("/login");
  };

  return (
    <header className="container sticky py-3 md:py-7">
      <div className="center flex items-center justify-between gap-4">
        <NavbarMobile />
        <div className="flex items-center justify-center gap-12">
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={115} height={40} />
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
