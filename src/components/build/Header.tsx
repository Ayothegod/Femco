import { Suspense } from "react";
import {
  Await
} from "react-router-dom";
import {
  isLoggedInNavLink,
  isNotLoggedInNavLink,
  loggedInIcons,
} from "../../lib/database";
import PageLoader from "../ui/PageLoader";
import { Button } from "../ui/button";
import IsAuthPage from "../utils/IsAuthPage";
import { IsLoggedIn } from "../utils/IsLoggedIn";

export default function Header({ user }: any) {
  // user.then((res: any) => console.log(res));


  return (
    <>
      <header className="pageStyle flex items-center justify-between py-6">
        <IsLoggedIn>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-wide">
            FASCO
          </h1>
        </IsLoggedIn>

        <IsAuthPage>
          <Suspense fallback={<PageLoader />}>
            <Await resolve={user}>

              {(resolvedUser) => (
                <>
                  {
                    resolvedUser &&
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
                  }


                  {!resolvedUser && <nav className="flex items-center gap-8">
                    <ul className="hidden md:flex items-center gap-8">
                      {isNotLoggedInNavLink.map((link, idx) => (
                        <li key={idx} className="text-sm md:text-base">
                          <a href={link.href}>{link.name}</a>
                        </li>
                      ))}
                    </ul>
                    <Button>Sign up</Button>
                  </nav>}
                </>
              )}
            </Await>
          </Suspense>
        </IsAuthPage>
      </header>
    </>
  );
}

// heyayomideadebisi