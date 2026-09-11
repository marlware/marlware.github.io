import Link from "next/link";

const mainLinks = [
  { label: "blog", href: "/blog"},
  { label: "projects", href: "/projects"},
];

const socialLinks = [
  { label: "github", href: "https://github.com/marlware"},
  { label: "linkedin", href: "https://linkedin.com/in/marl-jonson/"},
];

export const metadata = {
  title: "Marl Jonson",
  icons: {
    icon: "/favicon.ico"
  }
}

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-md text-left">
        <h1 className={`text-base`}>marl jonson</h1>

        <p className="mt-2 text-base text-gray-400">
          san francisco bay area
        </p>

        <nav className="mt-8 flex flex-col gap-3">
          {mainLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="
                group relative py-2
                text-gray-400 hover:text-gray-300
                transition-colors
              "
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {link.label}

              <span
                className="
                  absolute left-0 bottom-0 h-px w-0
                  bg-white
                  transition-all duration-300
                  group-hover:w-full
                "
              />
            </Link>
          ))}
        </nav>

        <div className="mt-12 pt-6 border-t border-gray-800">
          <div className="flex flex-wrap gap-2">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white hover:text-gray-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}