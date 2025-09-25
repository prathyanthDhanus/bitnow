import { Link } from "react-router-dom";
import Typography from "../typography/Typography";
import logo from "@/assets/bitcoin-coin-logo.png";
import {
  Facebook,
  Instagram,
  Twitter,
  ChevronRight,
  Globe,
  ChevronDown,
} from "lucide-react";
import InputField from "../input/InputField";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#091c23] text-white">
        <div className=" py-12 px-4 sm:px-8 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Logo & Social */}
            <div className="flex flex-col gap-6 items-start">
              <Link to="/">
                <div className="flex items-center gap-3">
                  <img src={logo} alt="bitnow logo" className="h-9 w-auto" />
                  <Typography.H2 className="!text-2xl sm:!text-3xl">
                    Bitnow
                  </Typography.H2>
                </div>
              </Link>
              <Typography.B3R className="max-w-xs">
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography.B3R>
              <div className="flex gap-4">
                {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                  <div
                    key={idx}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#5F82FF] hover:bg-[#3e5ecb] transition-colors cursor-pointer"
                  >
                    <Icon className="text-white w-5 h-5" />
                  </div>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <Typography.B1B className="mb-4">Other Pages</Typography.B1B>
                {["Home", "About", "Services", "Token Sale", "Contact"].map(
                  (link) => (
                    <div
                      key={link}
                      className="flex items-center gap-2 hover:text-[#D7F5FF] transition-colors"
                    >
                      <ChevronRight className="h-4 w-4 text-[#5F82FF]" />
                      <Typography.B3R className="text-md sm:text-[1rem]">
                        {link}
                      </Typography.B3R>
                    </div>
                  )
                )}
              </div>

              <div className="space-y-6">
                <Typography.B1B className="mb-4">Quick Links</Typography.B1B>
                {[
                  "Privacy Policy",
                  "Terms of service",
                  "Disclaimer",
                  "Credits",
                  "FAQ",
                ].map((link) => (
                  <div
                    key={link}
                    className="flex items-center gap-2 hover:text-[#D7F5FF] transition-colors"
                  >
                    <ChevronRight className="h-4 w-4 text-[#5F82FF]" />
                    <Typography.B3R className="text-md sm:text-[1rem]">
                      {link}
                    </Typography.B3R>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col gap-4">
              <Typography.B1B className="mb-2">Newsletter</Typography.B1B>
              <Typography.B2R className="text-sm sm:text-base md:text-sm lg:text-base">
                Subscribe to our newsletter to get the latest updates.
              </Typography.B2R>
              <div className=" flex-row gap-3 mt-2 space-y-3">
                <InputField
                  label=""
                  type="email"
                  placeholder="your email address"
                  className="flex-1"
                />
                <Button className="w-full">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative py-5">
          {/* HR line with blur */}
          <hr className="border-1 border-white/30 backdrop-blur-sm my-5" />

          {/* Glow background */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,70,84,1)_0%,rgba(102,102,117,1)_35%,rgba(60,93,105,1)_100%)] opacity-40 blur-3xl animate-pulse rounded-lg z-0"></div>

          {/* Content */}
          <div className="relative z-10 container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 items-center text-white">
            {/* Left */}
            <div className="flex gap-5 items-center">
              <Globe />
              <Typography.B2R>Cestina</Typography.B2R>
              <ChevronDown />
            </div>

            {/* Right */}
            <div className="flex flex-wrap gap-5 items-center justify-start sm:justify-end">
              <Typography.B2R>Privacy Policy</Typography.B2R>
              <Typography.B2R>Notice at Collection</Typography.B2R>
              <Typography.B2R>Terms</Typography.B2R>
              <Typography.B2R>Copyright © 2023 Atlassian</Typography.B2R>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
