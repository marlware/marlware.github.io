import Link from "next/link";

const links = [
  { label: "blog", href: "/blog"},
  { label: "projects", href: "/projects"},
  { label: "linkedin", href: "https://linkedin.com/in/marl-jonson/"},
  { label: "github", href: "https://github.com/marlware"}
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
        <h1 className={`text-3xl`}>marl jonson</h1>

        <p className="mt-2 text-base text-gray-400">
          <Link
            href="https://catalog.sjsu.edu/preview_program.php?catoid=15&poid=9497"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 underline-offset-2 hover:underline"
          >
            computer science, b.s.
          </Link>
          &nbsp;♠&nbsp;
          <Link
            href="https://www.sjsu.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 underline-offset-2 hover:underline"
          >
            san jose state university
          </Link>
        </p>

        <nav className="mt-8 flex flex-col gap-3">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="
                group relative py-2
                text-white hover:text-gray-300
                transition-colors
              "
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
            >
              {link.label}

              {/* hover line */}
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