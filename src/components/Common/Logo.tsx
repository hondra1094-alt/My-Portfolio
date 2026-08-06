import Image from "next/image";

const Logo = ({
  stacked = false,
  imageClassName = "h-9 w-9 sm:h-11 sm:w-11",
  textClassName = "text-xl sm:text-2xl",
}: {
  stacked?: boolean;
  imageClassName?: string;
  textClassName?: string;
}) => (
  <span
    className={`inline-flex items-center ${stacked ? "flex-col gap-3" : "gap-3"}`}
  >
    <Image
      src={encodeURI("/Website logo.svg")}
      alt=""
      width={80}
      height={80}
      className={imageClassName}
    />
    <span className={`font-extrabold tracking-tight text-white ${textClassName}`}>
      Hondra&apos;s <span className="text-blue-400">Portfolio</span>
    </span>
  </span>
);

export default Logo;
