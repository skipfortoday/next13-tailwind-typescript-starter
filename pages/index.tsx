import useGetMediumArticles from "services/customHooks/useGetMediumActicles";

const _styleBadges = ["badge-primary", "badge-secondary", "badge-accent"];

export default function Home() {
  const [articles, setArticles] = useGetMediumArticles("@RizqiPratamaR");
  console.log(articles);
  return (
    <>
      <div className="hero py-20 bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">{articles.feed.title}</h1>
            <a
              className="stats shadow mt-6 transition duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-lg select-none cursor-pointer"
              href={articles.feed.link}
            >
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <div className="avatar online">
                    <div className="w-16 rounded-full">
                      <img src={articles.feed.image} />
                    </div>
                  </div>
                </div>
                <div className="stat-value">Go To Medium</div>
                <div className="stat-desc text-secondary">
                  {articles.feed.url}
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-base-200 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {articles?.items?.map((article, index) => (
            <a
              className="card bg-base-100 shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-lg select-none cursor-pointer"
              key={index}
              href={article.link}
            >
              <figure className="h-80">
                <img src={article.thumbnail} alt="Shoes" />
              </figure>
              <div className="p-5">
                <h2 className="card-title text-lg">{article.title}</h2>
                <div className="card-actions mt-9">
                  {article.categories?.map((category, index) => (
                    <div
                      className={`badge ${
                        _styleBadges[
                          Math.floor(Math.random() * _styleBadges.length)
                        ]
                      } text-xs`}
                      key={index}
                    >
                      {category}
                    </div>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
