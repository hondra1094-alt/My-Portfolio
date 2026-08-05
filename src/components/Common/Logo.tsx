const Logo = () => (
  <span className="inline-flex items-center gap-2">
    <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path
        d="M2 17c1.5 1.2 3 1.2 4.5 0s3-1.2 4.5 0 3 1.2 4.5 0 3-1.2 4.5 0"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        className="text-blue-400"
      />
      <path
        d="M2 12c1.5 1.2 3 1.2 4.5 0s3-1.2 4.5 0 3 1.2 4.5 0 3-1.2 4.5 0"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        className="text-blue-400/50"
      />
    </svg>
    <span className="text-lg font-extrabold tracking-tight text-white sm:text-xl">
      Hondra&apos;s <span className="text-blue-400">Portfolio</span>
    </span>
  </span>
);

export default Logo;
