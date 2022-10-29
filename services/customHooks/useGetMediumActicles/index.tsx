import { useCallback, useEffect, useState } from "react";

export interface MediumArticleProps {
  author: string;
  categories: string[];
  content: string;
  description: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  title: string;
}

export interface MediumProfileProps {
  url: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface MediumResponseProps {
  feed: MediumProfileProps;
  items: Array<MediumArticleProps>;
}

const useGetMediumArticles = (
  userName: string
): [articles: MediumResponseProps, fetchArticles: () => Promise<void>] => {
  const [articles, setArticles] = useState<MediumResponseProps>({
    feed: {
      url: "",
      title: "",
      description: "",
      image: "",
      link: "",
    },
    items: [],
  });

  const fetchArticles = useCallback(async () => {
    const response = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${userName}`
    );

    const data = await response.json();

    setArticles(data);
  }, [userName]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  return [articles, fetchArticles];
};

export default useGetMediumArticles;
