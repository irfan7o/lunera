"use client";

import {
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
  MapPin,
  Phone,
} from "phosphor-react";

const paymentMethods = [
  "BCA",
  "BSI",
  "BRI",
  "mandiri",
  "BNI",
  "CIMB",
  "Permata",
  "Danamon",
  "bank bjb",
  "Panin",
  "Hana Bank",
  "gopay",
  "OVO",
  "DANA",
  "ShopeePay",
  "LinkAja",
  "AstraPay",
  "kredivo",
  "akulaku",
  "alfamart",
];

const deliveryServices = [
  "JNE",
  "J&T",
  "AnterAja",
  "SiCepat",
  "Ninja",
  "SAP",
  "ID Express",
];

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200 text-sm">
      <div className="container mx-auto px-4 pt-10 pb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-red-500">mazuta</span>
            <p className="text-gray-500 max-w-md">
              We breath technology. Live in simplicity.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 py-8">
          <div className="space-y-3 col-span-2 sm:col-span-1">
            <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
            <p className="text-gray-600 leading-relaxed">
              Jl. Pattimura Plaza Segi8 no A836, Sonokwijenan,
              <br /> Sukomanunggal, Surabaya
              <br />
              <br />
              Monday - Sunday
              <br />
              08.00 – 24.00 WIB
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-600">
                <Phone size={16} className="text-gray-400" />
                <span>0811-3225-6666</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone size={16} className="text-gray-400" />
                <span>1500699</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Company</h4>
            <ul className="space-y-2 text-gray-600">
              {[
                "Products",
                "Accessories",
                "About Us",
                "Contact Us",
                "Flagship Store",
                "Careers",
              ].map((i) => (
                <li key={i}>
                  <a href="#" className="hover:text-gray-900">
                    {i}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Support</h4>
            <ul className="space-y-2 text-gray-600">
              {[
                "Newsroom",
                "Help Center",
                "Service Center",
                "Warranty Check",
                "Privacy Policy",
              ].map((i) => (
                <li key={i}>
                  <a href="#" className="hover:text-gray-900">
                    {i}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Brands</h4>
            <ul className="space-y-2 text-gray-600">
              {["Tineco", "Ecovacs", "Laifen", "Yoniev", "Kans"].map((i) => (
                <li key={i}>
                  <a href="#" className="hover:text-gray-900">
                    {i}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Follow Us</h4>
            <div className="flex items-center gap-4 text-gray-500">
              <a href="#" className="hover:text-gray-900">
                <FacebookLogo size={20} />
              </a>
              <a href="#" className="hover:text-gray-900">
                <InstagramLogo size={20} />
              </a>
              <a href="#" className="hover:text-gray-900">
                <YoutubeLogo size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 grid md:grid-cols-2 gap-10">
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Payment Method</h4>
            <div className="flex flex-wrap gap-3">
              {paymentMethods.map((pm) => (
                <div
                  key={pm}
                  className="px-3 py-1.5 rounded-md border border-gray-200 bg-white text-[11px] font-medium text-gray-600"
                >
                  {pm}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              Delivery Services
            </h4>
            <div className="flex flex-wrap gap-3">
              {deliveryServices.map((ds) => (
                <div
                  key={ds}
                  className="px-3 py-1.5 rounded-md border border-gray-200 bg-white text-[11px] font-medium text-gray-600"
                >
                  {ds}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-gray-500 text-xs">
          © 2025 PT Mazuta Bima Tek. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
