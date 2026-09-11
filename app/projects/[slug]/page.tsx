import GoBackLink from "../../components/GoBackLink";
import { notFound } from "next/navigation";
import { projects } from "../data";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);

  if (!project) return notFound();

  return (
    <main className="min-h-screen px-6">
      <div className="w-full max-w-2xl text-left mx-auto pt-16 pb-16">
        <GoBackLink href="/projects">Back to Projects</GoBackLink>

        <h1 className="text-3xl">{project.title}</h1>
        <p className="mt-1 text-gray-400">{project.date}</p>
        <p className="mt-2 text-gray-400">{project.summary}</p>

        <div className="mt-6 whitespace-pre-line">
          {project.content}
        </div>
      </div>
    </main>
  );
}
