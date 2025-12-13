"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { languages } from "@/types/languages";

export function LanguageDropdown() {
  const router = useRouter();
  const pathname = usePathname();

  

  // Determine current locale from the path
  const currentLocale = pathname.split("/")[1];
  const currentLang = languages.find((l) => l.code === currentLocale) || languages[0];

  const changeLanguage = (l: { code: string; display: string; flag: string }) => {
    const segments = pathname.split("/");
    segments[1] = l.code; // replace locale
    router.push(segments.join("/")); // full redirect
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          {currentLang.display}
          <span className="text-xl">{currentLang.flag}</span>
          <ChevronDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" className="min-w-[8rem]">
        {languages
          .filter((l) => l.code !== currentLocale)
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
