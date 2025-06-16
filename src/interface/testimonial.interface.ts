export interface ITestimonial {
  sys: {
    id: string;
  };
  fields: {
    clientName: string;
    clientJob: string;
    clientTestimonial: string;
    clientImage?: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}
