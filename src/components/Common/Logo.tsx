import Image from "next/image";

const Logo = ({
  stacked = false,
  showText = true,
  imageClassName = "h-9 w-9 sm:h-11 sm:w-11",
  textClassName = "text-xl sm:text-2xl",
}: {
  stacked?: boolean;
  showText?: boolean;
  imageClassName?: string;
  textClassName?: string;
}) => (
  <span
    className={`inline-flex items-center ${stacked ? "flex-col gap-3" : "gap-3"}`}
  >
    <Image
      src="/LogoWebsite-transparent.svg"
      alt=""
      width={80}
      height={80}
      className={`transition-transform duration-300 ease-portfolio group-hover:scale-105 ${imageClassName}`}
    />
    {showText && (
      <span
        className={`font-extrabold tracking-tight text-white ${textClassName}`}
      >
        Hondra&apos;s <span className="text-blue-400">Portfolio</span>
      </span>
    )}
  </span>
);

export default Logo;
