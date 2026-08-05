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

        <div className="relative mx-auto max-w-[1170px] px-4 pt-17.5 sm:px-8 xl:px-0">
          <div className="footer-divider-gradient absolute left-0 top-0 h-[1px] w-full"></div>

          <div className="flex flex-wrap justify-between">
            <div className="mb-10 w-full max-w-[520px]">
              <Link
                href="/"
                className="focus-ring mb-8.5 inline-block rounded-md"
              >
                <Logo />
              </Link>

              <p className="mb-12 xl:w-4/5">{profile.introduction}</p>

              <div className="flex items-center gap-5">
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

              <p className="mt-5.5 font-medium">
                © {year} {profile.name}. All rights reserved.
              </p>
            </div>

            <div className="w-full max-w-[571px]">
              <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
                <FooterLinkList title="Navigate" links={navigateLinks} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
