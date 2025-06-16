"use client";

import Image from "next/image";
import { IPortfolio } from "@/interface/portfolio.interface";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CarouselPortfolioProps {
  portfolios: IPortfolio[];
}

export default function CarouselPortfolio({ portfolios }: CarouselPortfolioProps) {
  return (
    <Carousel className="w-full max-w-5xl mx-auto">
      <CarouselContent className="-ml-2">
        {portfolios.map((item) => (
          <CarouselItem
            key={item.sys.id}
            className="pl-4 md:basis-1/2 lg:basis-1/3"
          >
            <Card className="bg-[#2a2a2a] text-white">
              <CardContent className="p-4 space-y-2">
                {item.fields.portfolioImage?.fields.file.url && (
                  <Image
                    src={`https:${item.fields.portfolioImage.fields.file.url}`}
                    alt={item.fields.portfolioTitle}
                    width={400}
                    height={250}
                    className="w-full h-40 object-cover rounded-md"
                  />
                )}

                <h3 className="text-lg font-bold">
                  {item.fields.portfolioTitle}
                </h3>
                <p className="text-sm text-gray-300">
                  <strong>Tech:</strong> {item.fields.portfolioTech}
                </p>
                <p className="text-xs text-gray-400">
                  <strong>Situation:</strong> {item.fields.portfolioSituation}
                </p>
                <p className="text-xs text-gray-400">
                  <strong>Task:</strong> {item.fields.portfolioTask}
                </p>
                <p className="text-xs text-gray-400">
                  <strong>Action:</strong> {item.fields.portfolioAction}
                </p>
                <p className="text-xs text-gray-400">
                  <strong>Result:</strong> {item.fields.portfolioResult}
                </p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious/>
      <CarouselNext />
    </Carousel>
  );
}
