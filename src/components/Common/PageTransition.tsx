"use client";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div key={pathname} className="animate-fade-up motion-reduce:animate-none">
      {children}
    </div>
  );
};

export default PageTransition;
