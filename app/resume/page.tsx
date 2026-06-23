import GoBackLink from "../components/GoBackLink";
import fs from "fs";
import path from "path";

export const metadata = {
  title: "Marl Jonson",
};

export default function ResumePage() {
  const resumePath = path.join(process.cwd(), "public", "Marl-Jonson-Resume.pdf");
  const stats = fs.statSync(resumePath);
  const lastUpdated = stats.mtime.toLocaleDateString();

  return (
    <main className="flex min-h-screen items-center justify-center px-6 bg-black">
      <div className="w-full max-w-2xl text-left mx-auto">
        <GoBackLink href="/">Back to Home</GoBackLink>

        <h1 className="text-3xl text-white">Resume</h1>
        <p className="mt-2 text-zinc-400">
          Last updated: {lastUpdated}
        </p>

        <div className="mt-6 rounded-lg border border-zinc-800 bg-zinc-950/70 p-4">
          <a
            href="/Marl-Jonson-Resume.pdf"
            download
            className="text-blue-400 hover:text-white"
          >
            Download
          </a>
        </div>
      </div>
    </main>
  );
}

