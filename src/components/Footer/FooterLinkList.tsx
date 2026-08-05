import Link from "next/link";
import { FooterLink } from "@/types/footerLink";

const FooterLinkList = ({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) => {
  return (
    <div>
      <h3 className="mb-5 font-semibold text-white">{title}</h3>

      <ul className="flex flex-col gap-3.5">
        {links.map((link) => (
          <li key={link.id}>
            {link.newTab ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring font-medium duration-300 ease-in hover:text-white"
              >
                {link.title}
              </a>
            ) : (
              <Link
                href={link.href}
                className="focus-ring font-medium duration-300 ease-in hover:text-white"
              >
                {link.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinkList;
