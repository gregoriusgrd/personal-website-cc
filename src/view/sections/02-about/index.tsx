"use client";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="font-figtree border-b border-gray-700 scroll-mt-20 bg-gradient-to-b from-[#1f1f1f] to-[#2a2a2a] px-6 py-20 text-center text-white md:px-20"
    >
      <h2 className="mt-2 mb-10 text-3xl font-bold text-white md:text-4xl">
        About me
      </h2>

      <div className="mx-auto max-w-3xl text-left text-sm leading-relaxed text-gray-300 md:text-base">
        <p>
          I’m a Full-Stack Web Developer who enjoys turning ideas into real, working
          websites. I’ve recently worked with tools like JavaScript, React, Next.js, and
          TypeScript, and I try to write clean, understandable code. I care
          about doing things properly, meeting deadlines, and keeping
          communication clear and simple.
        </p>
      </div>
    </section>
  );
}
