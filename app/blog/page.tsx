import GoBackLink from "../components/GoBackLink";
import Link from "next/link";
import { posts } from "./posts";

export default function BlogPage() {
  return (
    <main className="min-h-screen px-6">
      <div className="w-full max-w-2xl text-left mx-auto pt-16">
        <GoBackLink href="/">Back to Home</GoBackLink>
        <h1 className="text-3xl">Blog</h1>
        <p className="mt-2 text-zinc-600">
          Click a post to read.
        </p>

        <div className="mt-6 flex flex-col gap-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group relative py-2 text-zinc-600 hover:text-black"
            >
              <div className="flex justify-between">
                <span className="font-medium">{post.title}</span>
                <span className="text-zinc-600">{post.date}</span>
              </div>

              <span
                className="absolute left-0 bottom-0 h-[1px] w-0 bg-[#222222] transition-all duration-300 group-hover:w-full"
              />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
