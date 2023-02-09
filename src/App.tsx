import "./App.css";
import { Company } from "./components/Company";
import { COMPANIES } from "./server/companies";
import { iCompany } from "./types";

const companies: iCompany[] = COMPANIES;

function App() {
  return (
    <div className="App">
      <h1>QVEMA Space</h1>
      <h3>Les Pitchs</h3>
      <div className="card-list">
        {companies.map((company: iCompany) => {
          return <Company key={company.url} company={company} />;
        })}
      </div>
      <p className="read-the-docs">
        Retrouver le code de la page sur{" "}
        <a
          href="https://github.com/monsieurpigeon/qvema.space"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </p>
    </div>
  );
}

export default App;
