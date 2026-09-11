import GoBackLink from "../components/GoBackLink";
import Link from "next/link";
import { posts } from "./posts";

export default function BlogPage() {
  return (
    <main className="min-h-screen px-6">
      <div className="w-full max-w-md text-left mx-auto pt-64 pb-16">
        <GoBackLink href="/">return</GoBackLink>
        <h1 className="text-base">Blog</h1>

        <div className="mt-6 flex flex-col gap-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group relative py-2 text-white hover:text-gray-300"
            >
              <div className="flex justify-between">
                <span>{post.title}</span>
                <span className="text-gray-400">{post.date}</span>
              </div>

              <span
                className="absolute left-0 bottom-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"
              />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
