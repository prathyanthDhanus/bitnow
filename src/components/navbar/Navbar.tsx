import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

import { navbarStructure } from "./structure";

import logo from "@/assets/bitcoin-coin-logo.png";

interface NavbarProps {
  logo: React.ReactNode;
  navbarStructure: Array<[]>;
  className?: string;
  cta?: React.ReactElement<{ className?: string; onClick?: () => void }>;
}

export function Navbar({ className, cta }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full",
        className
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="bitnow logo" className="h-8 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navbarStructure.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.title}
            </Link>
          ))}
          <Button>Get Started</Button>
        </nav>

        {/* CTA Button (desktop) */}
        {cta && <div className="hidden md:block">{cta}</div>}

        {/* Mobile menu button */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-8">
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                  {logo}
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex flex-col space-y-2 flex-1">
                {navbarStructure.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "py-2 px-4 rounded-lg text-sm font-medium transition-colors",
                      location.pathname === item.href
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
                <Button>Get Started</Button>
              </nav>

              {/* CTA Button (mobile) */}
              {cta && (
                <div className="pt-4 border-t mt-auto">
                  {React.cloneElement(cta, {
                    className: cta.props.className
                      ? cta.props.className
                      : "w-full",
                    onClick: () => {
                      setMobileMenuOpen(false);
                      cta.props.onClick?.();
                    },
                  })}
                </div>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
