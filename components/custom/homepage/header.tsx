"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { LanguageDropdown } from "./languageDropdown";
import { Search } from "./search";
import { HeaderProps } from "@/types/homepage";

export function Header({ navItems, searchPlaceholderValue }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-3">

        {/* LEFT — Logo + Brand + Nav */}
        <div className="flex items-center gap-8">

          {/* Logo + Brand */}
          <div className="flex items-center gap-2">
            <Image
              src="/achhecodelogo.jpg"
              height={40}
              width={40}
              alt="Achhe Code Logo"
            />
            <span className="text-xl font-semibold text-gray-900">
              Achhe Code
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-4">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="secondary"
                className="btn-transparent"
              >
                {item.label}
              </Button>
            ))}
          </nav>
        </div>

        {/* RIGHT — Language + Search */}
        <div className="flex items-center gap-4">
          <LanguageDropdown />
          <Search placeholderValue={searchPlaceholderValue} />
        </div>

      </div>
    </header>
  );
}
