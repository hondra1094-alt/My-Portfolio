import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Menu } from "@/types/menu";

const DropDown = ({ menuItem }: { menuItem: Menu }) => {
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const pathUrl = usePathname();

  const triggerClassName = `focus-ring hover:nav-gradient relative flex w-full items-center justify-between gap-3 border border-transparent px-4 py-3 text-base font-medium tracking-wide transition-colors duration-300 ease-portfolio hover:text-white lg:w-auto lg:py-2 lg:text-sm ${
    pathUrl === menuItem.path ? "nav-gradient text-white" : "text-white/75"
  }`;

  return (
    <>
      {menuItem.title !== "Pages" ? (
        <Link
          onClick={() => setDropdownToggler((open) => !open)}
          className={triggerClassName}
          href={`${menuItem.path ? menuItem.path : ""}`}
          aria-expanded={dropdownToggler}
        >
          {menuItem.title}
          <ChevronDown
            className={`size-3.5 shrink-0 transition-transform duration-300 ease-portfolio ${
              dropdownToggler ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </Link>
      ) : (
        <button
          type="button"
          onClick={() => setDropdownToggler((open) => !open)}
          className={triggerClassName}
          aria-expanded={dropdownToggler}
        >
          {menuItem.title}
          <ChevronDown
            className={`size-3.5 shrink-0 transition-transform duration-300 ease-portfolio ${
              dropdownToggler ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </button>
      )}

      <ul
        className={`dropdown border border-white/10 backdrop-blur-xl ${
          dropdownToggler ? "flex" : ""
        }`}
      >
        {menuItem?.submenu &&
          menuItem?.submenu.map((item, key) => (
            <li key={key}>
              <Link
                href={item.path || "#"}
                className="focus-ring flex rounded-lg px-4 py-2 text-sm text-white/70 transition-colors duration-200 ease-portfolio hover:bg-white/5 hover:text-white"
              >
                {item.title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default DropDown;
