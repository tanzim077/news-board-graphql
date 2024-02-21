import { useNewses } from "../graphql/hooks";
import NewsList from "./NewsList";

function NewsBoard() {
  const { newses, loading, error } = useNewses();
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Sorry, something went wrong.</p>;
  }
  return (
    <div>
      <h1 className="title">News Board</h1>
      <NewsList newses={newses} />
    </div>
  );
}

export default NewsBoard;
