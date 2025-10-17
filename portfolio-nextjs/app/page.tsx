import Image from "next/image";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <header className="text-center my-16">
        <Image
          src="/images/profile.jpg"
          alt="Profile Picture"
          width={180}
          height={180}
          className="rounded-full mx-auto mb-6 shadow-lg border-4 border-primary"
          priority
        />
        <h1 className="text-5xl font-extrabold text-gray-900 mb-2 leading-tight">
          Rupesh Purum
        </h1>
        <h2 className="text-2xl font-semibold text-primary mb-4 tracking-wide">
          Data & AI Engineer
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-4">
          Building scalable data pipelines and AI-powered systems for media
          automation, telecom, and audio processing. Passionate about turning
          data into actionable insights and robust products.
        </p>
        <div className="flex justify-center items-center gap-2 my-4">
          <span className="w-8 h-1 bg-primary rounded-full"></span>
          <span className="text-gray-400 text-sm">Tampa, FL</span>
          <span className="w-8 h-1 bg-primary rounded-full"></span>
        </div>
      </header>

      <hr className="my-12 border-gray-300" />

      <section id="links" className="text-center my-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Connect With Me
        </h2>
        <ul className="flex justify-center space-x-8 text-2xl">
          <li>
            <a
              href="https://www.linkedin.com/in/rupeshpurum"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-500 transition-colors duration-200 flex items-center gap-2"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-3xl" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/rupeshpurum"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-600 transition-colors duration-200 flex items-center gap-2"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-3xl" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </li>
          <li>
            <a
              href="mailto:rupeshpurum@gmail.com"
              className="text-red-600 hover:text-red-400 transition-colors duration-200 flex items-center gap-2"
              aria-label="Email Me"
            >
              <MdEmail className="text-3xl" />
              <span className="hidden sm:inline">Email</span>
            </a>
          </li>
        </ul>
      </section>

      <hr className="my-12 border-gray-300" />

      <Skills />

      <hr className="my-12 border-gray-300" />

      <Projects />
    </div>
  );
}
