import { MonitorSmartphone, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="fixed flex items-center shadow-xl bg-white w-full h-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <MonitorSmartphone />
          <Link href="/" className="font-bold text-2xl">
            Digital shop
          </Link>
        </div>
        <div>
          <ShoppingCart />
        </div>
      </div>
    </header>
  );
}

export default Header;
