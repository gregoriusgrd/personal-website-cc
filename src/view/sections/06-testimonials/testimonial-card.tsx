"use client";

import Image from "next/image";
import { ITestimonial } from "@/interface/testimonial.interface";

interface TestimonialCardProps {
  testimonials: ITestimonial[];
}

export default function TestimonialCard({ testimonials }: TestimonialCardProps) {
  return (
    <>
      {testimonials.map((testimonial) => {
        const {
          clientName,
          clientJob,
          clientTestimonial,
          clientImage,
        } = testimonial.fields;

        return (
          <div
            key={testimonial.sys.id}
            className="rounded-xl border border-gray-600 bg-[#2a2a2a] p-6 shadow hover:shadow-lg transition text-left"
          >
            <div className="flex items-center gap-4 mb-4">
              {clientImage?.fields.file.url && (
                <Image
                  src={`https:${clientImage.fields.file.url}`}
                  alt={clientName}
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
              )}
              <div>
                <h4 className="font-semibold text-white">{clientName}</h4>
                <p className="text-sm text-gray-400">{clientJob}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">"{clientTestimonial}"</p>
          </div>
        );
      })}
    </>
  );
}
