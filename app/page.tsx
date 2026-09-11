import Link from "next/link";

const mainLinks = [
  { label: "blog", href: "/blog"},
  { label: "projects", href: "/projects"},
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

        <nav className="mt-8 flex flex-col gap-2">
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
      </div>
    </main>
  );
}