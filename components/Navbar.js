"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./theme-btn";
import LoadingBar from "react-top-loading-bar";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [progress, setprogress] = useState(0);
  const pathname = usePathname();
  useEffect(() => {
    setTimeout(() => {
    setprogress(20);
    }, 100);
    setTimeout(() => {
      setprogress(40);
    }, 300);
    setTimeout(() => {
      setprogress(100);
    }, 500);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => {
      setprogress(0);
    }, 700);
  }, );

  return (
    <nav className="p-4 bg-background/70 sticky top-0 backdrop-blur border-b border-border z-50 transition-colors">
      <LoadingBar
        color="#6a00ff"
        progress={progress}
        onLoaderFinished={() => setprogress(0)}
      />
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="inline-block text-xl font-bold text-foreground transition-transform hover:text-primary hover:scale-105 duration-200"
        >
          Shubham blog
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center text-foreground">
          {["Home", "About", "Contact", "Blog"].map((item) => (
            <li key={item}>
              <Link
                href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                className="inline-block hover:font-semibold transition-colors hover:text-primary hover:scale-105 duration-200"
              >
                {item}
              </Link>
            </li>
          ))}
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              className="transition-all duration-200 
             hover:bg-primary hover:text-primary-foreground hover:shadow-md 
             dark:hover:bg-primary dark:hover:text-primary-foreground"
            >
              Login
            </Button>
            <Button
              variant="outline"
              className="transition-all duration-200 
             hover:bg-primary hover:text-primary-foreground hover:shadow-md 
             dark:hover:bg-primary dark:hover:text-primary-foreground"
            >
              Signup
            </Button>
            <ModeToggle />
          </div>
        </ul>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center space-x-2">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <button className="focus:outline-none cursor-pointer text-foreground">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </SheetTrigger>

            <SheetContent>
              <SheetHeader>
                <SheetTitle className="font-bold text-center text-foreground my-4">
                  Shubham blog
                </SheetTitle>
              </SheetHeader>
              <ul className="flex flex-col gap-6 items-center text-foreground">
                {["Home", "About", "Contact", "Blog"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                      className="inline-block hover:font-semibold transition-colors hover:text-primary hover:scale-105 duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    className="transition-all duration-200 
             hover:bg-primary hover:text-primary-foreground hover:shadow-md 
             dark:hover:bg-primary dark:hover:text-primary-foreground"
                  >
                    Login
                  </Button>
                  <Button
                    variant="outline"
                    className="transition-all duration-200 
             hover:bg-primary hover:text-primary-foreground hover:shadow-md 
             dark:hover:bg-primary dark:hover:text-primary-foreground"
                  >
                    Signup
                  </Button>
                </div>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
