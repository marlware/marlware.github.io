import GoBackLink from "../components/GoBackLink";
import Image from "next/image";

export const metadata = {
  title: "Marl Jonson",
};

const diagrams = [
  {
    label: "2026 Internship Search",
    src: "/sankey-2026-intern.png",
    width: 1200,
    height: 998,
  },
  {
    label: "2025 Internship Search",
    src: "/sankey-2025-intern.png",
    width: 1200,
    height: 1200,
  },
];

export default function WorkPage() {
  return (
    <main className="min-h-screen px-6">
      <div className="w-full max-w-2xl text-left mx-auto pt-16 pb-16">
        <GoBackLink href="/">Back to Home</GoBackLink>
        <h1 className="text-3xl">Work</h1>
        <p className="mt-2 text-zinc-600">
          Sankey diagrams tracking my internship application funnels.
        </p>

        <div className="mt-6 flex flex-col gap-10">
          {diagrams.map((diagram) => (
            <div key={diagram.src}>
              <h2 className="mb-2 font-medium text-zinc-600">{diagram.label}</h2>
              <Image
                src={diagram.src}
                alt={`${diagram.label} Sankey diagram`}
                width={diagram.width}
                height={diagram.height}
                className="w-full h-auto rounded-lg border border-zinc-400"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
