import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

export function Footer() {
  const t = useTranslations("HomePage.Footer");
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">{t('company_title')}</h3>
            <p className="text-sm text-gray-400">
              {t('company_description')}
            </p>
          </div>

          {/* Who we are */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('1.title')}</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="hover:text-white">
                  {t('1.1')}
                </Link>
              </li>
              <li>
                <Link href="/leadership" className="hover:text-white">
                  {t('1.2')}
                </Link>
              </li>
              <li>
                <Link href="/values" className="hover:text-white">
                  {t('1.3')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('2.title')}</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services/automation" className="hover:text-white">
                  {t('2.1')}
                </Link>
              </li>
              <li>
                <Link href="/services/ai" className="hover:text-white">
                  {t('2.2')}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/data-engineering"
                  className="hover:text-white"
                >
                  {t('2.3')}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cybersecurity"
                  className="hover:text-white"
                >
                  {t('2.4')}
                </Link>
              </li>
              <li>
                <Link href="/services/consulting" className="hover:text-white">
                  {t('2.5')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('3.title')}</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/news" className="hover:text-white">
                  {t('3.1')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('4.title')}</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/contact" className="hover:text-white">
                  {t('4.1')}
                </Link>
              </li>
              <li>
                <a
                  href="mailto:contact@achhecode.com"
                  className="hover:text-white"
                >
                  {t('4.2')}
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-white">
                  {t('4.3')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} {t('copyright_description')}
            <span className="mx-2">|</span>
            <Link href="/privacy-policy" className="hover:text-white">
              {t('privacy_policy_heading')}
            </Link>
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-5 text-lg">
            <a
              href="https://www.linkedin.com/in/achhe-code-74a211359/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://x.com/achhecode"
              aria-label="Twitter"
              className="hover:text-white transition"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-white transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.youtube.com/@achhecode"
              aria-label="YouTube"
              className="hover:text-white transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
