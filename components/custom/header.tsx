"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { LanguageDropdown } from "./languageDropdown";
import { Search } from "./search";
import { useTranslations } from "next-intl";

export function Header() {
  const t = useTranslations('HomePage');
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

        <nav className="flex items-center gap-4">
          <Button variant="secondary" className="btn-transparent">{t('home')}</Button>
          <Button variant="secondary" className="btn-transparent">{t('services')}</Button>
          <Button variant="secondary" className="btn-transparent">{t('insights')}</Button>
          <Button variant="secondary" className="btn-transparent">{t('community')}</Button>
          <Button variant="secondary" className="btn-transparent">{t('about')}</Button>
          <Button variant="secondary" className="btn-transparent">{t('contact')}</Button>
        </nav>
      </div>

      {/* RIGHT — Language + Search */}
      <div className="flex items-center gap-4">
        <LanguageDropdown />
        <Search />
      </div>
    </header>
  );
}
