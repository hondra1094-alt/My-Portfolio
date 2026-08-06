const SceneHeading = ({
  eyebrow,
  children,
}: {
  eyebrow: string;
  children: React.ReactNode;
}) => (
  <>
    <p className="hero-subtitle-text text-xl font-medium sm:text-2xl lg:text-3xl">
      {eyebrow}
    </p>
    <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-4xl lg:mt-4 lg:text-5xl xl:text-heading-2">
      {children}
    </h2>
  </>
);

export default SceneHeading;
