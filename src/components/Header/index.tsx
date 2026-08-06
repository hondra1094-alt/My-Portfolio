"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "@/components/Common/Logo";
import DropDown from "./DropDown";
import menuData from "./menuData";

const isActivePath = (pathUrl: string, itemPath?: string) => {
  if (!itemPath) return false;
  if (itemPath === "/") return pathUrl === "/";
  return pathUrl === itemPath || pathUrl.startsWith(`${itemPath}/`);
};

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  const pathUrl = usePathname();

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, []);

  // Close the mobile menu automatically whenever the route changes
  useEffect(() => {
    setNavigationOpen(false);
  }, [pathUrl]);

  return (
    <>
      <header
        className={`before:features-row-border fixed left-0 top-0 z-1000 w-full bg-navy-950/80 shadow-sm backdrop-blur-lg transition-[padding] duration-300 before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full ${
          stickyMenu ? "py-4! lg:py-3!" : "py-5 lg:py-4"
        }`}
      >
        <div className="relative mx-auto max-w-[1170px] items-center px-4 sm:px-8 lg:flex lg:justify-center lg:gap-16 xl:px-0">
          <div className="flex w-full items-center justify-between lg:w-auto">
            <Link href="/" className="focus-ring rounded-md">
              <Logo />
            </Link>

            <button
              onClick={() => setNavigationOpen(!navigationOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={navigationOpen}
              aria-controls="primary-navigation"
              className="focus-ring block rounded-md p-2.5 lg:hidden"
            >
              <span className="relative block h-5.5 w-5.5 cursor-pointer">
                <span className="du-block absolute right-0 h-full w-full">
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-white delay-0 duration-200 ease-in-out ${
                      !navigationOpen ? "w-full! delay-300" : "w-0"
                    }`}
                  ></span>
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-white delay-150 duration-200 ease-in-out ${
                      !navigationOpen ? "delay-400 w-full!" : "w-0"
                    }`}
                  ></span>
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-white delay-200 duration-200 ease-in-out ${
                      !navigationOpen ? "w-full! delay-500" : "w-0"
                    }`}
                  ></span>
                </span>
                <span className="du-block absolute right-0 h-full w-full rotate-45">
                  <span
                    className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-white delay-300 duration-200 ease-in-out ${
                      !navigationOpen ? "h-0! delay-0" : "h-full"
                    }`}
                  ></span>
                  <span
                    className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-white duration-200 ease-in-out ${
                      !navigationOpen ? "h-0! delay-200" : "h-0.5"
                    }`}
                  ></span>
                </span>
              </span>
            </button>
          </div>

          <div
            id="primary-navigation"
            className={`invisible h-0 w-full items-center opacity-0 transition-opacity duration-300 ease-portfolio motion-reduce:transition-none lg:visible lg:flex lg:h-auto lg:w-auto lg:opacity-100 ${
              navigationOpen
                ? "visible! relative mt-4 h-auto! max-h-[400px] overflow-y-scroll rounded-md bg-navy-950 p-7.5 opacity-100! shadow-lg"
                : ""
            }`}
          >
            <nav aria-label="Primary">
              <ul className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-2">
                {menuData.map((menuItem, key) => {
                  const active = isActivePath(pathUrl, menuItem.path);

                  return (
                    <li key={key} className="nav__menu group relative lg:py-2">
                      {menuItem.submenu ? (
                        <DropDown menuItem={menuItem} />
                      ) : menuItem.newTab ? (
                        <a
                          href={menuItem.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setNavigationOpen(false)}
                          className="focus-ring hover:nav-gradient relative block border border-transparent px-4 py-3 text-base text-white/80 transition-colors duration-300 ease-portfolio hover:text-white lg:py-1.5 lg:text-sm"
                        >
                          {menuItem.title}
                        </a>
                      ) : (
                        <Link
                          href={`${menuItem.path}`}
                          aria-current={active ? "page" : undefined}
                          className={`focus-ring hover:nav-gradient relative block border border-transparent px-4 py-3 text-base transition-colors duration-300 ease-portfolio hover:text-white lg:py-1.5 lg:text-sm ${
                            active ? "nav-gradient text-white" : "text-white/80"
                          }`}
                        >
                          {menuItem.title}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
