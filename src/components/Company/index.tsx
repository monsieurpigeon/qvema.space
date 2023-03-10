import { iCompany } from "../../types";
import { currencyFormatter } from "../../utils/formatter";
import "./style.css";

interface CompanyProps {
  company: iCompany;
}

export function Company({ company }: CompanyProps) {
  return (
    <div className="card company">
      <div className="chip">
        S0{company.season}
        {company.episode ? `E0${company.episode}` : ""}
      </div>
      <div className="title">
        {company.title}{" "}
        {company.invested == null ? "" : company.invested ? "💰" : "🕊️"}
      </div>
      <div className="description">{company.description}</div>
      {company.offers ? (
        <div>
          Offre initiale: {currencyFormatter.format(company.offers?.value)} pour{" "}
          {company.offers?.interest}%
        </div>
      ) : null}
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
