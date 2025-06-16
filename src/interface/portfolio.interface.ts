export interface IPortfolio {
  sys: {
    id: string;
  };
  fields: {
    portfolioTitle: string;
    portfolioTech: string;
    portfolioSituation: string;
    portfolioTask: string;
    portfolioAction: string;
    portfolioResult: string;
    portfolioImage?: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}
