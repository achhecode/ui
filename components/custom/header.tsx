"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { LanguageDropdown } from "./languageDropdown";
import { Search } from "./search";

type HeaderProps = {
  navItems: string[],
  searchPlaceholderValue: string
};

export function Header({ navItems, searchPlaceholderValue }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full flex items-center justify-between px-6 py-3 bg-white shadow-sm">

      {/* LEFT — Logo + Nav */}
      <div className="flex items-center gap-6">
        <Image
          src="/achhecodelogo.jpg"
          height={50}
          width={50}
          alt="Company Logo"
        />
        {/* Navbar */}
        <nav className="flex items-center gap-4">
          {navItems.map((item) => (
            <Button variant="secondary" className="btn-transparent">{item}</Button>
          ))}
        </nav>
      </div>

      {/* RIGHT — Language + Search */}
      <div className="flex items-center gap-4">
        <LanguageDropdown />
        <Search placeholderValue={searchPlaceholderValue} />
      </div>
    </header>
  );
}
