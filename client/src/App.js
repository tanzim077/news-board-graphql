import { ApolloProvider } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Route, Routes } from "react-router-dom";
import { isLoggedIn } from "./auth";
import CompanyDetail from "./components/CompanyDetail";
import NewsDetail from "./components/JobDetail";
import JobForm from "./components/JobForm";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/NavBar";
import NewsBoard from "./components/NewsBoard";
import { client } from "./graphql/queries";

function App() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(isLoggedIn);

  const handleLogin = () => {
    setLoggedIn(true);
    navigate("/");
  };

  const handleLogout = () => {
    setLoggedIn(false);
    navigate("/");
  };

  return (
    <ApolloProvider client={client}>
      <NavBar loggedIn={loggedIn} onLogout={handleLogout} />
      <main className="section">
        <Routes>
          <Route path="/" element={<NewsBoard />} />
          <Route path="/newsMedia/:newsMediaId" element={<CompanyDetail />} />
          <Route path="/jobs/new" element={<JobForm />} />
          <Route path="/newses/:newsId" element={<NewsDetail />} />
          <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
        </Routes>
      </main>
    </ApolloProvider>
  );
}

export default App;
