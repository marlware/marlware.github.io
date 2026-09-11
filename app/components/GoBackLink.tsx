import Link from "next/link";
import type { ReactNode } from "react";

type GoBackLinkProps = {
  href: string;
  children: ReactNode;
};

export default function GoBackLink({ href, children }: GoBackLinkProps) {
  return (
    <Link href={href} className="text-gray-400 hover:text-gray-300 mb-6 inline-block">
      ← {children}
    </Link>
  );
}
