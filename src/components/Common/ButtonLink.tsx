import Link from "next/link";
import { buttonClasses } from "@/libs/buttonClasses";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
  fullWidthOnMobile?: boolean;
  className?: string;
};

const ButtonLink = ({
  href,
  children,
  variant,
  size,
  fullWidthOnMobile,
  className,
}: ButtonLinkProps) => {
  const classes = buttonClasses({ variant, size, fullWidthOnMobile, className });

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const isMailto = href.startsWith("mailto:");

  return (
    <a
      href={href}
      {...(!isMailto && { target: "_blank", rel: "noopener noreferrer" })}
      className={classes}
    >
      {children}
    </a>
  );
};

export default ButtonLink;
