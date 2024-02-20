import { Link } from "react-router-dom";

function NewsItem({ news }) {
  const title = news.company ? `${news.title} at ${news.company.name}` : news.title;
  return (
    <li className="media">
      <div className="media-content">
        <Link to={`/jobs/${news.id}`}>{title}</Link>
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
