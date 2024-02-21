import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useNews } from "../graphql/hooks";

function NewsDetail() {
  const { newsId } = useParams();
  const { news, loading } = useNews(newsId);

  console.log("[NewsDetail] news:", news);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1 className="title">{news.title}</h1>
      <h2 className="subtitle">
        <Link to={`/newsMedia/${news.newsMedia.id}`}>{news.newsMedia.name}</Link>
      </h2>
      <div className="box">{news.description}</div>
    </div>
  );
}

export default NewsDetail;
