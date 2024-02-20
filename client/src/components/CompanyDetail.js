import { useParams } from "react-router";
import { useCompany } from "../graphql/hooks";
import NewsList from "./NewsList";

function CompanyDetail() {
  const { companyId } = useParams();
  const { company, loading } = useCompany(companyId);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h1 className="title">{company.name}</h1>
      <div className="box">{company.description}</div>
      <h5 className="title is-5">Jobs at {company.name}</h5>
      <NewsList jobs={company.jobs} />
    </div>
  );
}

export default CompanyDetail;
