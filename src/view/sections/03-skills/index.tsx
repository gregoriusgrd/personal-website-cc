"use client";

import {
  FaPython,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaUbuntu,
} from "react-icons/fa";
import { SiFlutter, SiMongodb, SiErpnext } from "react-icons/si";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="font-figtree bg-gradient-to-b from-[#2a2a2a] to-[#1f1f1f] px-6 py-20 text-center text-white border-b border-gray-700"
    >
      <h2 className="mb-10 text-3xl font-bold md:text-4xl">My Skills</h2>

      <div className="grid grid-cols-2 place-items-center gap-6 md:grid-cols-4">
        <div className="flex h-40 w-40 flex-col items-center justify-center rounded-xl bg-[#2a2a2a] transition hover:scale-105">
          <FaPython size={40} className="mb-4 text-blue-500" />
          <p className="text-sm font-semibold">Python</p>
        </div>

        <div className="flex h-40 w-40 flex-col items-center justify-center rounded-xl bg-[#2a2a2a] transition hover:scale-105">
          <SiFlutter size={40} className="mb-4 text-sky-500" />
          <p className="text-sm font-semibold">Flutter</p>
        </div>

        <div className="flex h-40 w-40 flex-col items-center justify-center rounded-xl bg-orange-200 text-black transition hover:scale-105">
          <FaUbuntu size={40} className="mb-4" />
          <p className="text-sm font-semibold">Ubuntu</p>
        </div>

        <div className="flex h-40 w-40 flex-col items-center justify-center rounded-xl bg-[#2a2a2a] transition hover:scale-105">
          <FaGitAlt size={40} className="mb-4 text-red-600" />
          <p className="text-sm font-semibold">Git Source Control</p>
        </div>

        <div className="flex h-40 w-40 flex-col items-center justify-center rounded-xl bg-[#2a2a2a] transition hover:scale-105">
          <SiErpnext size={40} className="mb-4 text-purple-600" />
          <p className="text-sm font-semibold">ERPNext</p>
        </div>

        <div className="flex h-40 w-40 flex-col items-center justify-center rounded-xl bg-[#2a2a2a] transition hover:scale-105">
          <SiMongodb size={40} className="mb-4 text-green-600" />
          <p className="text-sm font-semibold">Mongodb</p>
        </div>

        <div className="flex h-40 w-40 flex-col items-center justify-center rounded-xl bg-[#2a2a2a] transition hover:scale-105">
          <div className="mb-4 flex gap-1">
            <FaHtml5 size={30} className="text-orange-600" />
            <FaCss3Alt size={30} className="text-blue-600" />
          </div>
          <p className="text-sm font-semibold">Html & CSS</p>
        </div>

        <div className="flex h-40 w-40 flex-col items-center justify-center rounded-xl bg-[#2a2a2a] transition hover:scale-105">
          <FaJs size={40} className="mb-4 text-yellow-400" />
          <p className="text-sm font-semibold">JavaScript</p>
        </div>
      </div>
    </section>
  );
}
