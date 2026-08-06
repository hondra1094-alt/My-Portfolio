import Link from "next/link";
import Logo from "@/components/Common/Logo";
import { profile } from "@/data/profile";
import FooterLinkList from "./FooterLinkList";
import { navigateLinks } from "./linksData";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="relative z-10 pb-17.5 lg:pb-22.5 xl:pb-27.5">
        {/* <!-- bg shapes --> */}
        <div className="absolute bottom-0 left-0 -z-1 flex w-full flex-col gap-3 opacity-50">
          <div className="footer-bg-gradient h-[1.24px] w-full"></div>
          <div className="footer-bg-gradient h-[2.47px] w-full"></div>
          <div className="footer-bg-gradient h-[3.71px] w-full"></div>
          <div className="footer-bg-gradient h-[4.99px] w-full"></div>
          <div className="footer-bg-gradient h-[6.19px] w-full"></div>
          <div className="footer-bg-gradient h-[7.42px] w-full"></div>
          <div className="footer-bg-gradient h-[8.66px] w-full"></div>
          <div className="footer-bg-gradient h-[9.90px] w-full"></div>
          <div className="footer-bg-gradient h-[13px] w-full"></div>
        </div>

        <div className="relative mx-auto max-w-3xl px-5 pt-17.5 text-center sm:px-8 xl:px-0">
          <div className="footer-divider-gradient absolute left-0 top-0 h-[1px] w-full"></div>

          <Link
            href="/"
            className="focus-ring mb-8.5 inline-flex justify-center rounded-md"
          >
            <Logo
              stacked
              imageClassName="h-16 w-16 sm:h-20 sm:w-20"
              textClassName="text-xl sm:text-2xl"
            />
          </Link>

          <p className="mx-auto mb-10 max-w-lg">{profile.introduction}</p>

          <div className="mb-12 flex items-center justify-center gap-5">
            {profile.socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="focus-ring rounded-md duration-300 ease-in hover:text-white"
              >
                <Icon className="h-6 w-6 fill-current" />
              </a>
            ))}
          </div>

          <div className="flex flex-col items-center">
            <FooterLinkList title="Navigate" links={navigateLinks} />
          </div>

          <p className="mt-12 font-medium">
            © {year} {profile.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
