export interface NewsItem {
  title: string;
  time: string;
  img: string;
  url: string;
  hot: boolean;
  sortIndex: number;
}

export interface NewsApiResponse {
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
}

