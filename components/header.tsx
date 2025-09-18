"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Star } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/90 border-b border-primary-foreground/20 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center shadow-md">
                <Star className="w-5 h-5 text-secondary-foreground fill-current" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary-foreground rounded-full border-2 border-primary"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary-foreground">Quá độ lên CNXH tại</h1>
              <p className="text-xs text-primary-foreground/80">Việt Nam</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("timeline")}
              className="text-primary-foreground/90 hover:text-primary-foreground transition-all duration-200 font-medium hover:scale-105"
            >
              Quá độ lên XHCN
            </button>
            <button
              onClick={() => scrollToSection("theory")}
              className="text-primary-foreground/90 hover:text-primary-foreground transition-all duration-200 font-medium hover:scale-105"
            >
              Đặc trưng & phương pháp
            </button>
            <button
              onClick={() => scrollToSection("academic-integrity")}
              className="text-primary-foreground/90 hover:text-primary-foreground transition-all duration-200 font-medium hover:scale-105"
            >
              Liêm chính học thuật
            </button>
          </nav>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-primary-foreground hover:bg-primary-foreground/20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-primary-foreground/20 pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("timeline")}
                className="text-left text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium py-2"
              >
                Quá độ lên XHCN
              </button>
              <button
                onClick={() => scrollToSection("theory")}
                className="text-left text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium py-2"
              >
               Đặc trưng & phương pháp
              </button>
              <button
                onClick={() => scrollToSection("academic-integrity")}
                className="text-left text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium py-2"
              >
                Liêm chính học thuật
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
