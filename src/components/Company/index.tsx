import { iCompany } from "../../types";
import "./style.css";

interface CompanyProps {
  company: iCompany;
}

export function Company({ company }: CompanyProps) {
  return (
    <div className="card company">
      <div className="title">{company.title}</div>
      <div className="description">{company.description}</div>
      <div className="links">
        <a href={company.url} target="_blank" rel="noreferrer">
          En savoir plus
        </a>
        {company.instagram && (
          <a
            className="instagram"
            target="_blank"
            rel="noreferrer"
            href={company.instagram}
          >
            Instagram
          </a>
        )}
      </div>
    </div>
  );
}
