"use client";

import Link from "next/link";
import Image from "next/image";
import { BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="font-figtree border-b border-gray-700 bg-gradient-to-b from-[#2a2a2a] to-[#1f1f1f] px-6 pt-[120px] pb-24 text-white"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-center text-center">
        <Image
          src="/hero/profile-pic.png"
          width={160}
          height={160}
          alt="Profile Picture"
          className="mb-4"
        />
        <p className="text-sm text-gray-400">Hello, I'm</p>
        <h1 className="mt-2 mb-4 text-4xl font-bold md:text-5xl">Gregorius Geraldin</h1>
        <p className="mb-6 text-lg text-gray-300">Full-Stack Web Developer</p>
        <p className="mb-8 text-gray-400">
          Building scalable and high-performance web solutions using React,
          Next.js, and PostgreSQL.
        </p>

        {/* Buttons disni */}
        <div className="mb-6 flex flex-col justify-center gap-4 sm:flex-row">
          <Button asChild variant="secondary">
            <Link href="#portfolio">View Portfolio</Link>
          </Button>

          <Button asChild variant="secondary">
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>

        {/* linkedin dan gitub */}
        <div className="flex justify-center gap-4">
          <Link href="https://linkedin.com" target="_blank">
            <BiLogoLinkedin className="h-6 w-6 text-gray-400 transition hover:text-white" />
          </Link>
          <Link href="https://github.com" target="_blank">
            <BiLogoGithub className="h-6 w-6 text-gray-400 transition hover:text-white" />
          </Link>
        </div>
      </div>
    </section>
  );
}
