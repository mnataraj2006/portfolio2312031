import { Link } from "react-scroll";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../data/profile";

const quickLinks = [
  ["Home", "hero"],
  ["About", "about"],
  ["Stack", "skills"],
  ["Work", "projects"],
  ["Practice", "experience"],
  ["Contact", "contact"],
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--line-soft)] bg-[#080808] py-10">
      <div className="section-inner">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_auto_auto] md:items-start">
          <div>
            <p className="text-2xl font-bold tracking-[-0.04em] text-[var(--ink)]">{profile.name}</p>
            <p className="mt-3 max-w-[360px] text-sm leading-6 text-[var(--ink-muted)]">
              Full stack developer building thoughtful interfaces, APIs, and product systems.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 md:max-w-[360px]">
            {quickLinks.map(([label, target]) => (
              <Link key={target} to={target} smooth duration={650} offset={-72} className="cursor-pointer text-sm font-semibold text-[var(--ink-muted)] transition-colors hover:text-[var(--ink)]">
                {label}
              </Link>
            ))}
          </div>

          <div className="flex gap-3 md:justify-end">
            {[
              { label: "GitHub", href: profile.github, icon: FiGithub },
              { label: "LinkedIn", href: profile.linkedin, icon: FiLinkedin },
              { label: "Email", href: `mailto:${profile.email}`, icon: FiMail },
            ].map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] text-[var(--ink-muted)] transition-colors hover:border-[var(--line-strong)] hover:text-[var(--ink)]">
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-[var(--line-soft)] pt-6 text-xs text-[var(--ink-faint)] sm:flex-row sm:items-center sm:justify-between">
          <span>Copyright {year} M. Nataraj.</span>
          <span>Designed and built with React.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

