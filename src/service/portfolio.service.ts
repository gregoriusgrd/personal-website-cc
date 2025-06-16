import axios from "axios";
import { IPortfolio } from "@/interface/portfolio.interface";

export async function fetchPortfolioService(): Promise<IPortfolio[]> {
  try {
    const url = `${process.env.NEXT_PUBLIC_CONTENTFUL_URL}/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/${process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT}/entries`;

    const { data } = await axios.get(url, {
      params: {
        access_token: process.env.NEXT_PUBLIC_CONTENTFUL_API_KEY,
        content_type: "personalWebsitePortfolio",
        include: 1,
      },
    });

    const assetsMap: Record<string, any> = {};
    data.includes?.Asset?.forEach((asset: any) => {
      assetsMap[asset.sys.id] = asset;
    });

    const portfolios = data.items.map((item: any) => {
      const imageRef = item.fields.portfolioImage;
      if (imageRef?.sys?.id && assetsMap[imageRef.sys.id]) {
        item.fields.portfolioImage = assetsMap[imageRef.sys.id];
      }
      return item;
    });

    return portfolios;
  } catch (error) {
    console.error("Failed to fetch portfolio:", error);
    return [];
  }
}
