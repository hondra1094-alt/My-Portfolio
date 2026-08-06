"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  useEffect(() => {
    const handleStickyMenu = () => {
      setStickyMenu(window.scrollY >= 80);
    };

    window.addEventListener("scroll", handleStickyMenu);
    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, []);

  // Close the mobile menu automatically whenever the route changes
  useEffect(() => {
    setNavigationOpen(false);
  }, [pathUrl]);

  return (
    <header
      className={`before:features-row-border fixed left-0 top-0 z-1000 w-full border-b border-white/[0.06] bg-navy-950/85 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-[padding] duration-300 ease-portfolio before:absolute before:bottom-0 before:left-0 before:h-px before:w-full ${
        stickyMenu ? "py-3! lg:py-2.5!" : "py-4.5 lg:py-4"
      }`}
    >
      <div className="relative mx-auto max-w-[1170px] items-center px-4 sm:px-8 lg:flex lg:justify-center lg:gap-14 xl:px-0">
        <div className="flex w-full items-center justify-between lg:w-auto">
          <Link href="/" className="focus-ring group rounded-md">
            <Logo />
          </Link>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => setNavigationOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={navigationOpen}
            aria-controls="primary-navigation"
            className="text-white/80 hover:bg-white/10 hover:text-white lg:hidden"
          >
            {navigationOpen ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <MenuIcon className="size-5" aria-hidden="true" />
            )}
          </Button>
        </div>

        <div
          id="primary-navigation"
          className={`invisible h-0 w-full items-center opacity-0 transition-opacity duration-300 ease-portfolio motion-reduce:transition-none lg:visible lg:flex lg:h-auto lg:w-auto lg:opacity-100 ${
            navigationOpen
              ? "visible! relative mt-4 h-auto! max-h-[400px] overflow-y-scroll rounded-2xl border border-white/10 bg-navy-950/95 p-6 opacity-100! shadow-xl backdrop-blur-xl"
              : ""
          }`}
        >
          <nav aria-label="Primary">
            <ul className="flex flex-col gap-1.5 lg:flex-row lg:items-center lg:gap-1">
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
                        className="focus-ring hover:nav-gradient relative block border border-transparent px-4 py-3 text-base font-medium tracking-wide text-white/75 transition-colors duration-300 ease-portfolio hover:text-white lg:py-2 lg:text-sm"
                      >
                        {menuItem.title}
                      </a>
                    ) : (
                      <Link
                        href={`${menuItem.path}`}
                        aria-current={active ? "page" : undefined}
                        className={`focus-ring hover:nav-gradient relative block border border-transparent px-4 py-3 text-base font-medium tracking-wide transition-colors duration-300 ease-portfolio hover:text-white lg:py-2 lg:text-sm ${
                          active ? "nav-gradient text-white" : "text-white/75"
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
  );
};

export default Header;
