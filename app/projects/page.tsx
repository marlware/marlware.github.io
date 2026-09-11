import GoBackLink from "../components/GoBackLink";
import Link from "next/link";
import { projects } from "./data";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6">
      <div className="w-full max-w-md text-left mx-auto pt-64 pb-16">
        <GoBackLink href="/">return</GoBackLink>
        <h1 className="text-base">Projects</h1>

        <div className="mt-6 flex flex-col gap-4">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group relative py-2 text-gray-400 hover:text-gray-300"
            >
              <div>
                <span>{project.title}</span>
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
