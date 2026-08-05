type BentoCardProps = {
  children: React.ReactNode;
  className?: string;
  padded?: boolean;
  as?: "div" | "article";
};

const BentoCard = ({
  children,
  className = "",
  padded = true,
  as: Tag = "div",
}: BentoCardProps) => {
  return (
    <Tag className={`glass-card ${padded ? "p-6 sm:p-7" : ""} ${className}`}>
      {children}
    </Tag>
  );
};

export default BentoCard;
