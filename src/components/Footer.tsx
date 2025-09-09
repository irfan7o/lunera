'use client'

import { FacebookLogo, InstagramLogo, TwitterLogo, YoutubeLogo, Envelope, Phone, MapPin } from 'phosphor-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-red-500 mb-4">
              mazuta
            </div>
            <p className="text-gray-300 mb-4">
              Indonesia's leading electronics retailer, providing premium vacuum cleaners and home appliances.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FacebookLogo size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <InstagramLogo size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <TwitterLogo size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <YoutubeLogo size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">News</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Investor Relations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Product Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Warranty</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin size={20} className="text-gray-400 mr-3" />
                <span className="text-gray-300">Jakarta, Indonesia</span>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="text-gray-400 mr-3" />
                <span className="text-gray-300">+62 21 1234 5678</span>
              </div>
              <div className="flex items-center">
                <Envelope size={20} className="text-gray-400 mr-3" />
                <span className="text-gray-300">info@mazita.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-sm font-semibold mb-2">Payment Methods</h4>
              <div className="flex space-x-2">
                {['Visa', 'Mastercard', 'PayPal', 'GoPay', 'OVO', 'DANA'].map((method) => (
                  <div key={method} className="bg-white rounded px-2 py-1">
                    <span className="text-xs text-gray-800 font-medium">{method}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-4 md:mb-0">
              <h4 className="text-sm font-semibold mb-2">Delivery Services</h4>
              <div className="flex space-x-2">
                {['JNE', 'TIKI', 'POS', 'J&T', 'SiCepat', 'Grab'].map((service) => (
                  <div key={service} className="bg-white rounded px-2 py-1">
                    <span className="text-xs text-gray-800 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Mazita Electronics. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  )
}
