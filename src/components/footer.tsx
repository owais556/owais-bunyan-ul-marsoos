import { SOCIAL_LINKS } from "@/constants";

export const Footer = () => {
  return (
    <footer className="w-screen bg-gradient-to-r from-green-800 to-green-900 py-4 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-8 md:flex-row">
        <p className="text-center text-sm md:text-left font-medium">
          &copy; <strong className="font-bold text-green-200">Pakistan Armed Forces</strong>{" "}
          {new Date().getFullYear()}. All rights reserved.
        </p>

        <div className="flex justify-center gap-4 md:justify-start">
          {SOCIAL_LINKS.map(({ href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              className="text-green-200 transition-colors duration-500 ease-in-out hover:text-white hover:scale-110"
            >
              <Icon />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <a
            href="#"
            className="text-center text-sm transition hover:underline hover:text-green-200 md:text-right font-medium"
          >
            Privacy Policy
          </a>

          <b>|</b>

          <a
            href="#"
            className="text-center text-sm transition hover:underline hover:text-green-200 md:text-right font-medium"
          >
            Terms &amp; Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};
