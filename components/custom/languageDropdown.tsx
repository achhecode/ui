"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function LanguageDropdown() {
  const router = useRouter();
  const pathname = usePathname();

  const languages = [
    { code: "en", display: "EN", flag: "🇺🇸" },
    { code: "ar", display: "AR", flag: "🇸🇦" },
    { code: "hi", display: "HI", flag: "🇮🇳" },
  ];

  // Initialize with the current locale from the path
  const currentLocale = pathname.split("/")[1];
  const [lang, setLang] = useState(
    languages.find((l) => l.code === currentLocale) || languages[0]
  );

  const changeLanguage = (l: { code: string; display: string; flag: string }) => {
    setLang(l);

    // Replace locale in the path
    const segments = pathname.split("/");
    segments[1] = l.code;
    const newPath = segments.join("/");

    router.push(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          {lang.display}
          <span className="text-xl">{lang.flag}</span>
          <ChevronDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" className="min-w-[8rem]">
        {languages
          .filter((l) => l.code !== lang.code)
          .map((l) => (
            <DropdownMenuItem
              key={l.code}
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => changeLanguage(l)}
            >
              <span className="text-xl">{l.flag}</span>
              {l.display}
            </DropdownMenuItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
