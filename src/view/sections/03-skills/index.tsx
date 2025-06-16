"use client";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiPostgresql,
  SiSupabase,
  SiVercel,
} from "react-icons/si";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="font-figtree border-b border-gray-700 bg-gradient-to-b from-[#2a2a2a] to-[#1f1f1f] px-6 py-20 text-center text-white"
    >
      <h2 className="mb-10 text-3xl font-bold md:text-4xl">My Skills</h2>

      <div className="grid grid-cols-2 place-items-center gap-6 md:grid-cols-4">
        <div className="flex h-40 w-40 cursor-pointer flex-col items-center justify-center rounded-xl bg-[#2a2a2a] transition hover:scale-105 hover:bg-orange-200 hover:text-black">
          <FaHtml5 size={40} className="mb-4 text-blue-500" />
          <p className="text-sm font-semibold">HTML</p>
        </div>

        <div className="flex h-40 w-40 cursor-pointer flex-col items-center justify-center rounded-xl bg-[#2a2a2a] transition hover:scale-105 hover:bg-orange-200 hover:text-black">
          <FaCss3Alt size={40} className="mb-4 text-sky-500" />
          <p className="text-sm font-semibold">CSS</p>
        </div>

        <div className="flex h-40 w-40 cursor-pointer flex-col items-center justify-center rounded-xl bg-[#2a2a2a] transition hover:scale-105 hover:bg-orange-200 hover:text-black">
          <FaJs size={40} className="mb-4" />
          <p className="text-sm font-semibold">JavaScript</p>
        </div>

        <div className="flex h-40 w-40 cursor-pointer flex-col items-center justify-center rounded-xl bg-[#2a2a2a] transition hover:scale-105 hover:bg-orange-200 hover:text-black">
          <FaReact size={40} className="mb-4 text-red-600" />
          <p className="text-sm font-semibold">React</p>
        </div>

        <div className="flex h-40 w-40 cursor-pointer flex-col items-center justify-center rounded-xl bg-[#2a2a2a] transition hover:scale-105 hover:bg-orange-200 hover:text-black">
          <SiNextdotjs size={40} className="mb-4 text-purple-600" />
          <p className="text-sm font-semibold">Next.js</p>
        </div>

        <div className="flex h-40 w-40 cursor-pointer flex-col items-center justify-center rounded-xl bg-[#2a2a2a] transition hover:scale-105 hover:bg-orange-200 hover:text-black">
          <SiTailwindcss size={40} className="mb-4 text-green-600" />
          <p className="text-sm font-semibold">Tailwind CSS</p>
        </div>

        <div className="flex h-40 w-40 cursor-pointer flex-col items-center justify-center rounded-xl bg-[#2a2a2a] transition hover:scale-105 hover:bg-orange-200 hover:text-black">
          <SiTypescript size={40} className="mb-4 text-green-600" />
          <p className="text-sm font-semibold">TypeScript</p>
        </div>

        <div className="flex h-40 w-40 cursor-pointer flex-col items-center justify-center rounded-xl bg-[#2a2a2a] transition hover:scale-105 hover:bg-orange-200 hover:text-black">
          <SiPostgresql size={40} className="mb-4 text-yellow-400" />
          <p className="text-sm font-semibold">PostgreSQL</p>
        </div>

        <div className="flex h-40 w-40 cursor-pointer flex-col items-center justify-center rounded-xl bg-[#2a2a2a] transition hover:scale-105 hover:bg-orange-200 hover:text-black">
          <SiSupabase size={40} className="mb-4 text-yellow-400" />
          <p className="text-sm font-semibold">Supabase</p>
        </div>

        <div className="flex h-40 w-40 cursor-pointer flex-col items-center justify-center rounded-xl bg-[#2a2a2a] transition hover:scale-105 hover:bg-orange-200 hover:text-black">
          <FaGitAlt size={40} className="mb-4 text-yellow-400" />
          <p className="text-sm font-semibold">Git</p>
        </div>

        <div className="flex h-40 w-40 cursor-pointer flex-col items-center justify-center rounded-xl bg-[#2a2a2a] transition hover:scale-105 hover:bg-orange-200 hover:text-black">
          <SiVercel size={40} className="mb-4 text-yellow-400" />
          <p className="text-sm font-semibold">Vercel</p>
        </div>
      </div>
    </section>
  );
}
