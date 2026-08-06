import Link from "next/link";
import Logo from "@/components/Common/Logo";
import { Separator } from "@/components/ui/separator";
import { profile } from "@/data/profile";
import FooterLinkList from "./FooterLinkList";
import { navigateLinks } from "./linksData";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
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

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-5 pt-17.5 text-center sm:px-8 xl:px-0">
        <div className="footer-divider-gradient absolute left-0 top-0 h-[1px] w-full"></div>

        <Link
          href="/"
          className="focus-ring mb-10 inline-flex justify-center rounded-md"
        >
          <Logo showText={false} imageClassName="h-64 w-64 sm:h-80 sm:w-80" />
        </Link>

        <div className="mb-12 flex items-center justify-center gap-4">
          {profile.socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 backdrop-blur-xl transition-all duration-300 ease-portfolio hover:border-blue-400/40 hover:bg-white/[0.08] hover:text-blue-300 hover:shadow-glow-blue"
            >
              <Icon className="h-5 w-5 fill-current" />
            </a>
          ))}
        </div>

        <Separator className="mb-12 max-w-xs bg-white/10" />

        <FooterLinkList title="Navigate" links={navigateLinks} />

        <p className="mt-12 text-sm font-medium text-white/60">
          © {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
