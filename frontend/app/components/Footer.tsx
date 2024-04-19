import { Copyright } from "lucide-react";
import { navLinks } from "~/lib/database";

export default function Footer() {
  // console.log(new Date().getFullYear());
  const year = new Date().getFullYear();
  return (
    <footer className="pageStyle pb-6">
      <div className=" flex flex-col md:flex-row  justify-between ">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-wide">
          FASCO
        </h1>
        <ul className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mt-4 md:mt-0">
          {navLinks.map((link, idx) => (
            <li
              key={idx}
              className="text-sm md:text-base font-medium text-neutral-600"
            >
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-center text-sm text-neutral-600 mt-6">
        Copyright <Copyright className="h-4 w-4" /> {year}. All Rights Reserved.
      </div>
    </footer>
  );
}