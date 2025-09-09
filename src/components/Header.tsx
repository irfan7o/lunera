'use client'

import { useState } from 'react'
import { MagnifyingGlass, ShoppingCart, User, Heart, At, WhatsappLogo, Question, SquaresFour, X } from 'phosphor-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLanguageSidebarOpen, setIsLanguageSidebarOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState({ code: 'EN', flag: 'https://flagcdn.com/w20/us.png', name: 'English' })

  const languages = [
    { code: 'EN', flag: 'https://flagcdn.com/w20/us.png', name: 'English' },
    { code: 'ID', flag: 'https://flagcdn.com/w20/id.png', name: 'Indonesia' },
    { code: 'ZH', flag: 'https://flagcdn.com/w20/cn.png', name: '中文' }
  ]

  const selectLanguage = (language: typeof languages[0]) => {
    setSelectedLanguage(language)
    setIsLanguageSidebarOpen(false)
  }

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        {/* Top bar */}
        <div className="bg-gray-100 text-sm py-4">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <div className="flex items-center space-x-6" style={{ color: '#6D7583' }}>
              <span className="hover:text-red-500 cursor-pointer transition-colors">Voucher Promo</span>
              <span className="hover:text-red-500 cursor-pointer transition-colors">Membership</span>
            </div>
            <div className="flex items-center space-x-6 text-sm" style={{ color: '#333841' }}>
              <div className="flex items-center space-x-2">
                <At size={16} className="text-gray-500" weight="fill" />
                <span>hello@mazuta.id</span>
              </div>
              <div className="flex items-center space-x-2">
                <WhatsappLogo size={16} className="text-gray-500" weight="fill" />
                <span>081372256666</span>
              </div>
              <div className="flex items-center space-x-2">
                <Question size={16} className="text-gray-500" weight="fill" />
                <span className="hover:text-red-500 cursor-pointer transition-colors">Help Center</span>
              </div>
              <button 
                onClick={() => setIsLanguageSidebarOpen(true)}
                className="flex items-center space-x-2 hover:text-red-500 cursor-pointer transition-colors bg-white px-4 py-1.5 rounded-full border border-gray-200"
              >
                <img src={selectedLanguage.flag} alt={selectedLanguage.code} className="w-4 h-3" />
                <span>{selectedLanguage.code}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/assets/logo.svg" 
                alt="Mazuta"
                className="h-8 w-auto"
              />
            </div>

            {/* Search bar */}
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products, brands..."
                  className="w-full pl-10 pr-4 rounded-lg focus:outline-none focus:ring-0 text-sm"
                  style={{ backgroundColor: '#F3F3F6', height: '50px' }}
                  onFocus={(e) => e.target.placeholder = ''}
                  onBlur={(e) => e.target.placeholder = 'Search products, brands...'}
                />
                <MagnifyingGlass size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              <button className="p-3 hover:bg-gray-100 rounded-full transition-colors">
                <Heart size={26} className="text-gray-600" />
              </button>
              
              <button className="p-3 hover:bg-gray-100 rounded-full transition-colors relative">
                <ShoppingCart size={26} className="text-gray-600" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </button>
              
              <button className="p-3 hover:bg-gray-100 rounded-full transition-colors">
                <User size={26} className="text-gray-600" />
              </button>
            </div>
          </div>

          {/* Categories section below logo */}
          <div className="mt-6">
            <button className="flex items-center space-x-2 text-gray-700 hover:text-red-500 transition-colors">
              <SquaresFour size={20} />
              <span className="text-sm font-medium">Categories</span>
            </button>
          </div>
        </div>
      </header>      {/* Language Sidebar */}
      {isLanguageSidebarOpen && (
        <div className="fixed inset-0 z-50">
          {/* Blur background */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={() => setIsLanguageSidebarOpen(false)}
          ></div>
          
          {/* Sidebar */}
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-800">Select Language</h3>
                <button 
                  onClick={() => setIsLanguageSidebarOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={20} className="text-gray-600" />
                </button>
              </div>
              
              <div className="space-y-3">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => selectLanguage(language)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                      selectedLanguage.code === language.code 
                        ? 'bg-red-50 border border-red-200 text-red-600' 
                        : 'hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    <img src={language.flag} alt={language.code} className="w-6 h-4" />
                    <span className="font-medium">{language.name}</span>
                    <span className="text-sm text-gray-500">({language.code})</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
