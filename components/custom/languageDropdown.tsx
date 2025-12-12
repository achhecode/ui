"use client";

import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function LanguageDropdown() {
  const [lang, setLang] = useState({
    code: "EN",
    flag: "🇺🇸",
  });

  const languages = [
    { code: "EN", flag: "🇺🇸" },
    { code: "AR", flag: "🇸🇦" },
    { code: "HI", flag: "🇮🇳" },
  ];

  const changeLanguage = (l: { code: string; flag: string }) => {
    setLang(l);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          {lang.code}
          <span className="text-xl">{lang.flag}</span>
          <ChevronDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" className="min-w-[8rem]">

        {languages
          .filter((l) => l.code !== lang.code) // ❗ hides selected language
          .map((l) => (
            <DropdownMenuItem
              key={l.code}
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => changeLanguage(l)}
            >
              <span className="text-xl">{l.flag}</span>
              {l.code}
            </DropdownMenuItem>
          ))}

      </DropdownMenuContent>
    </DropdownMenu>
  );
}
