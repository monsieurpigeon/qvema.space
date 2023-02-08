import "./App.css";

interface Company {
  title: string;
  description: string;
  url: string;
}

const companies: Company[] = [
  {
    title: "Heliowater",
    description: "L'eau potable autonome grâce au soleil",
    url: "heliowater.fr",
  },
];

function App() {
  return (
    <div className="App">
      <h1>QVEMA Space</h1>
      <div className="content">
        {companies.map((company: Company) => {
          return (
            <div>
              <div>{company.title}</div>
              <div>{company.description}</div>
              <div>{company.url}</div>
            </div>
          );
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
