import {
  isLoggedInNavLink,
  isNotLoggedInNavLink,
  loggedInIcons,
} from "~/lib/database";
import { Button } from "./ui/button";
import IsAuthPage from "./utils/IsAuthPage";
import { IsUserLink } from "./utils/IsLoggedIn";

export default function Header() {
  const user = true;

  return (
    <header className="pageStyle flex items-center justify-between py-6">
      <IsUserLink>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-wide">
          FASCO
        </h1>
      </IsUserLink>

      <IsAuthPage>
        {user 
        
        ? (
          <nav className=" contents">
            <ul className="hidden md:flex items-center gap-8">
              {isLoggedInNavLink.map((link, idx) => (
                <li key={idx} className="text-sm md:text-base">
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>

            <div className="flex gap-4 md:gap-8">
              {loggedInIcons.map((icon, id) => (
                <div key={id}>
                  <icon.icon />
                </div>
              ))}
            </div>
          </nav>
        ) 
        
        : (
          <nav className="flex items-center gap-8">
            <ul className="hidden md:flex items-center gap-8">
              {isNotLoggedInNavLink.map((link, idx) => (
                <li key={idx} className="text-sm md:text-base">
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
            <Button>Sign up</Button>
          </nav>
        )}
      </IsAuthPage>
    </header>
  );
}
