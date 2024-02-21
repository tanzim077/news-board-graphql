import { useParams } from "react-router";
import { useNewsMedia } from "../graphql/hooks";
import NewsList from "./NewsList";

function CompanyDetail() {
  const { newsMediaId } = useParams();
  const { newsMedia, loading } = useNewsMedia(newsMediaId);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h1 className="title">{newsMedia.name}</h1>
      <div className="box">{newsMedia.description}</div>
      <h5 className="title is-5">News at {newsMedia.name}</h5>
      <NewsList newses={newsMedia.news} />
    </div>
  );
}

export default CompanyDetail;
