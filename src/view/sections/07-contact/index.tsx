"use client";

import Link from "next/link";
import { BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="font-figtree scroll-mt-20 bg-[#1f1f1f] px-6 py-20 md:px-20 text-center text-white"
    >
      <p className="text-gray-400 font-semibold">Get in Touch</p>
      <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-10">Contact Me</h2>

      <form
        className="max-w-xl mx-auto space-y-6 text-left"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Message sent (this is just a placeholder).");
        }}
      >
        <div>
          <label htmlFor="name" className="block font-medium text-gray-300">
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full rounded border border-gray-600 bg-[#2a2a2a] text-white px-4 py-2 mt-1 focus:outline-none focus:ring focus:ring-gray-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full rounded border border-gray-600 bg-[#2a2a2a] text-white px-4 py-2 mt-1 focus:outline-none focus:ring focus:ring-gray-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-medium text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            required
            className="w-full rounded border border-gray-600 bg-[#2a2a2a] text-white px-4 py-2 mt-1 focus:outline-none focus:ring focus:ring-gray-500"
          />
        </div>

        <button
          type="submit"
          className="rounded-full bg-white text-black px-6 py-2 hover:bg-gray-200 transition"
        >
          Send Message
        </button>
      </form>

      <div className="mt-12 flex justify-center gap-6">
        <Link href="https://linkedin.com" target="_blank">
          <BiLogoLinkedin className="h-8 w-8 text-gray-400 hover:text-white transition" />
        </Link>
        <Link href="https://github.com" target="_blank">
          <BiLogoGithub className="h-8 w-8 text-gray-400 hover:text-white transition" />
        </Link>
      </div>
    </section>
  );
}
