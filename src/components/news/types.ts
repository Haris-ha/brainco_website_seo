export type NewsItem = {
  id: number;
  documentId?: string;
  title: string;
  time: string;
  img: string;
  url: string;
  externalUrl?: string;
  hot: boolean;
  sortIndex: number;
};

// 旧版API响应（保留用于回退）
export type NewsApiResponse = {
  code: number;
  message: string;
  data: {
    list: Array<{
      title: string;
      newsDate: string;
      icon: string;
      url: string;
      hot: boolean;
      sortIndex: number;
    }>;
    total: number;
    pageNo: number;
    pageSize: number;
  };
};

// Strapi CMS API响应（Strapi v5 扁平化结构）
export type StrapiNewsItem = {
  id: number;
  documentId: string;
  title: string;
  newsDate: string;
  coverImage: string;
  externalUrl: string;
  isHot: boolean;
  sortIndex: number;
  sourceId: number;
  locale: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  content?: string;
};

export type StrapiNewsResponse = {
  data: StrapiNewsItem[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};
