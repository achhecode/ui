import Link from "next/link";
import {
  LinkedinIcon,
  TwitterIcon,
  FacebookIcon,
  YoutubeIcon,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              Achhe Code
            </h3>
            <p className="text-sm text-gray-400">
              Turning great ideas into good code. We build reliable, scalable,
              and intelligent digital solutions.
            </p>
          </div>

          {/* Who we are */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Who we are
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Achhe Code
                </Link>
              </li>
              <li>
                <Link href="/leadership" className="hover:text-white transition">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="/values" className="hover:text-white transition">
                  Our Values
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services/automation" className="hover:text-white transition">
                  Automation
                </Link>
              </li>
              <li>
                <Link href="/services/ai" className="hover:text-white transition">
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link href="/services/data-engineering" className="hover:text-white transition">
                  Data Engineering
                </Link>
              </li>
              <li>
                <Link href="/services/cybersecurity" className="hover:text-white transition">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/services/consulting" className="hover:text-white transition">
                  IT Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Quick links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/news" className="hover:text-white transition">
                  News & PR
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Get in Touch
                </Link>
              </li>
              <li>
                <a
                  href="mailto:contact@achhecode.com"
                  className="hover:text-white transition"
                >
                  Email Us
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="hover:text-white transition"
                >
                  Call Us
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-10" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Copyright */}
          <p className="text-sm text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Achhe Code. All rights reserved.
            <span className="mx-2">|</span>
            <Link href="/privacy-policy" className="hover:text-white transition">
              Privacy Policy
            </Link>
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/company/achhe-code"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>

            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-white transition"
            >
              <TwitterIcon className="w-5 h-5" />
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-white transition"
            >
              <FacebookIcon className="w-5 h-5" />
            </a>

            <a
              href="#"
              aria-label="YouTube"
              className="hover:text-white transition"
            >
              <YoutubeIcon className="w-5 h-5" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
