import axios from "axios";
import { ITestimonial } from "@/interface/testimonial.interface";

export async function fetchTestimonialService(): Promise<ITestimonial[]> {
  try {
    const url = `${process.env.NEXT_PUBLIC_CONTENTFUL_URL}/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/${process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT}/entries`;

    const { data } = await axios.get(url, {
      params: {
        access_token: process.env.NEXT_PUBLIC_CONTENTFUL_API_KEY,
        content_type: "personalWebsiteTestimonials",
        include: 1,
      },
    });

    const assetsMap: Record<string, any> = {};
    data.includes?.Asset?.forEach((asset: any) => {
      assetsMap[asset.sys.id] = asset;
    });

    const testimonials = data.items.map((item: any) => {
      const imageRef = item.fields.clientImage;
      if (imageRef?.sys?.id && assetsMap[imageRef.sys.id]) {
        item.fields.clientImage = assetsMap[imageRef.sys.id];
      }
      return item;
    });

    return testimonials;
  } catch (error) {
    console.error("Failed to fetch testimonial:", error);
    return [];
  }
}
