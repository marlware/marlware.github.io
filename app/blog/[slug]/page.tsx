import GoBackLink from "../../components/GoBackLink";
import { notFound } from "next/navigation";
import { posts } from "../posts";

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) return notFound();

  return (
    <main className="min-h-screen px-6">
      <div className="w-full max-w-2xl text-left mx-auto pt-16 pb-16">
        <GoBackLink href="/blog">Back to Blog</GoBackLink>

        <h1 className="text-3xl text-white">{post.title}</h1>
        <p className="mt-1 text-zinc-500">{post.date}</p>
        <p className="mt-2 text-zinc-400">{post.summary}</p>

        <div className="mt-6 text-zinc-300 whitespace-pre-line">
          {post.content}
        </div>
      </div>
    </main>
  );
}