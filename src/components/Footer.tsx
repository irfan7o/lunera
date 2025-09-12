"use client";

import {
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
  TwitterLogo,
  Phone,
  MapPin,
  EnvelopeSimple,
} from "phosphor-react";
import { useState } from "react";

const YEAR = new Date().getFullYear();
const GROUPS: { title: string; links: string[] }[] = [
  {
    title: "Shop",
    links: ["Products", "New Arrivals", "Best Sellers", "Deals", "Accessories"],
  },
  {
    title: "Support",
    links: ["Help Center", "Track Order", "Returns", "Warranty", "Contact"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Press", "Blog", "Flagship Store"],
  },
  { title: "Brands", links: ["Tineco", "Ecovacs", "Laifen", "Yoniev", "Kans"] },
];
const PAY_METHODS = [
  "BCA",
  "BSI",
  "BRI",
  "Mandiri",
  "BNI",
  "CIMB",
  "Permata",
  "Danamon",
  "Gopay",
  "OVO",
  "DANA",
  "ShopeePay",
  "LinkAja",
  "AstraPay",
  "Kredivo",
  "Akulaku",
];
const SHIP_SERVICES = [
  "JNE",
  "J&T",
  "AnterAja",
  "SiCepat",
  "Ninja",
  "SAP",
  "ID Express",
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };
  return (
    <footer
      className="bg-white border-t border-gray-200"
      style={{ color: "#6D7583" }}
    >
      <div className="container mx-auto px-4 py-14">
        <div className="flex flex-col lg:flex-row gap-10 pb-12 border-b border-gray-200">
          <div className="flex-1 space-y-5 min-w-[260px]">
            <div className="flex items-center">
              <img src="/assets/logo.svg" alt="Lunera" className="h-8 w-auto" />
            </div>
            <p
              className="text-sm leading-relaxed max-w-sm"
              style={{ color: "#6D7583" }}
            >
              We breathe technology and craft delightful commerce experiences.
              Discover premium home & lifestyle products with trusted service.
            </p>
            <div className="flex items-center gap-4 text-gray-400">
              {[FacebookLogo, InstagramLogo, TwitterLogo, YoutubeLogo].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="hover:text-gray-700 transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                )
              )}
            </div>
            <div className="text-xs text-gray-400 flex items-center gap-2">
              <MapPin size={14} /> <span>Surabaya • Indonesia</span>
            </div>
          </div>
          <div className="w-full max-w-md">
            <h4
              className="text-sm font-semibold mb-3"
              style={{ color: "#111" }}
            >
              Stay in the loop
            </h4>
            <p className="text-sm mb-4" style={{ color: "#6D7583" }}>
              Get updates on fresh drops, special deals & curated picks.
            </p>
            <form onSubmit={submit} className="flex items-stretch gap-2">
              <div className="relative flex-1">
                <EnvelopeSimple
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                  placeholder="Email address"
                  className="w-full h-11 pl-9 pr-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/40 text-sm placeholder:text-gray-400"
                  style={{ backgroundColor: "#F3F3F6", border: "none" }}
                />
              </div>
              <button
                type="submit"
                className="h-11 px-5 rounded-lg bg-red-500 hover:bg-red-600 text-white text-sm font-medium shadow-sm transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-2 text-[11px] text-gray-400">
              By subscribing you agree to our Terms & Privacy Policy.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 py-12 border-b border-gray-200">
          {GROUPS.map((g) => (
            <div key={g.title} className="space-y-4">
              <h5
                className="text-sm font-semibold tracking-wide"
                style={{ color: "#111" }}
              >
                {g.title}
              </h5>
              <ul className="space-y-2">
                {g.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm transition-colors"
                      style={{ color: "#6D7583" }}
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="space-y-4 col-span-2 sm:col-span-1">
            <h5
              className="text-sm font-semibold tracking-wide"
              style={{ color: "#111" }}
            >
              Contact
            </h5>
            <div className="space-y-3 text-sm text-gray-500">
              <p className="leading-relaxed">
                Jl. Pattimura Plaza Segi8 no A836, Sonokwijenan, Sukomanunggal,
                Surabaya
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} className="text-gray-400" /> 0811-3225-6666
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} className="text-gray-400" /> 1500699
              </p>
              <p className="text-xs text-gray-400">
                08.00 – 24.00 WIB • 7 Days
              </p>
            </div>
          </div>
        </div>
        <div className="py-10 border-b border-gray-200 grid gap-10 md:grid-cols-2">
          <div>
            <h6
              className="text-sm font-semibold mb-4"
              style={{ color: "#111" }}
            >
              Payment Methods
            </h6>
            <div className="flex flex-wrap gap-2">
              {PAY_METHODS.map((pm) => (
                <span
                  key={pm}
                  className="px-3 py-1.5 rounded-md border border-gray-200 bg-gray-50 text-[11px] font-medium text-gray-600"
                >
                  {pm}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h6
              className="text-sm font-semibold mb-4"
              style={{ color: "#111" }}
            >
              Delivery Services
            </h6>
            <div className="flex flex-wrap gap-2">
              {SHIP_SERVICES.map((ds) => (
                <span
                  key={ds}
                  className="px-3 py-1.5 rounded-md border border-gray-200 bg-gray-50 text-[11px] font-medium text-gray-600"
                >
                  {ds}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-2 flex-wrap">
            <span>© {YEAR} PT Lunera Bima Tek</span>
            <span className="hidden md:inline">•</span>
            <a href="#" className="hover:text-gray-600">
              Privacy Policy
            </a>
            <span className="hidden md:inline">•</span>
            <a href="#" className="hover:text-gray-600">
              Terms
            </a>
            <span className="hidden md:inline">•</span>
            <a href="#" className="hover:text-gray-600">
              Cookies
            </a>
          </div>
          <div className="text-gray-500">
            Built with passion for better commerce.
          </div>
        </div>
      </div>
    </footer>
  );
}
