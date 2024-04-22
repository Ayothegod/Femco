import { navLinks } from "~/lib/database";
import { Button } from "./ui/button";
import IsAuthPage from "./utils/IsAuthPage";
import { IsUserLink } from "./utils/IsLoggedIn";

export default function Header() {
  return (
    <header className="pageStyle flex items-center justify-between py-6">
      <IsUserLink>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-wide">
          FASCO
        </h1>
      </IsUserLink>

      <IsAuthPage>
        <nav className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <li key={idx} className="text-sm md:text-base">
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>

          <Button>Sign up</Button>
        </nav>
      </IsAuthPage>
    </header>
  );
}
