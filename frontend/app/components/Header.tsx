import React from "react";

const navLinks = [
  { name: "Home", href: "#/" },
  { name: "Deals", href: "#deals" },
  { name: "New Arrivals", href: "#new-arrivals" },
  { name: "Packages", href: "#packages" },
  { name: "Sign in" },
];

export default function Header() {
  return (
    <header className="pageStyle flex items-center justify-between py-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-wide">
        FASCO
      </h1>

      <nav className="flex items-center gap-8">
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <li key={idx} className="text-sm md:text-base">
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        <button className="bg-black py-2 px-4 rounded-md text-white text-sms font-medium">
          Sign up
        </button>
      </nav>
    </header>
  );
}
