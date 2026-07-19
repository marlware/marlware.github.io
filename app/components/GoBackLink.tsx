import Link from "next/link";
import type { ReactNode } from "react";

type GoBackLinkProps = {
  href: string;
  children: ReactNode;
};

export default function GoBackLink({ href, children }: GoBackLinkProps) {
  return (
    <Link href={href} className="text-zinc-600 hover:text-black mb-6 inline-block">
      ← {children}
    </Link>
  );
}
