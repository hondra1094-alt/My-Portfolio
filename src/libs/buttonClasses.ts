type ButtonVariant = "primary" | "secondary";
type ButtonSize = "md" | "lg";

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: "hero-button-gradient hover:opacity-80",
  secondary:
    "border border-white/10 bg-white/5 hover:border-blue-400/40 hover:text-blue-300",
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  md: "px-5 py-3 text-sm sm:py-2.5",
  lg: "px-7 py-4 sm:py-3 lg:px-8 lg:py-4 lg:text-lg",
};

export const buttonClasses = ({
  variant = "primary",
  size = "lg",
  fullWidthOnMobile = false,
  className = "",
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidthOnMobile?: boolean;
  className?: string;
} = {}) =>
  `wave-button focus-ring inline-flex items-center justify-center gap-2 rounded-lg font-medium text-white ${SIZE_CLASSES[size]} ${VARIANT_CLASSES[variant]} ${fullWidthOnMobile ? "w-full sm:w-auto" : ""} ${className}`;
