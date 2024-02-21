import { Link } from "react-router-dom";

function NewsItem({ news }) {
  const title = news.newsMedia ? `${news.title} at ${news.newsMedia.name}` : news.title;
  return (
    <li className="media">
      <div className="media-content">
        <Link to={`/newses/${news.id}`}>{title}</Link>
      </div>
    </li>
  );
}

function NewsList({ newses }) {
  return (
    <ul className="box">
      {newses.map((news) => (
        <NewsItem key={news.id} news={news} />
      ))}
    </ul>
  );
}

export default NewsList;
