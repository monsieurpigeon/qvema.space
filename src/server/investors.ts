export const InvestorID = {
  SIMON: "SIMON",
  ANDRE: "ANDRE",
  LARCH: "LARCH",
  NADIR: "NADIR",
  BOURB: "BOURB",
  CHEVA: "CHEVA",
} as const;

export const INVESTORS = [
  {
    id: InvestorID.SIMON,
    name: "Marc Simoncini",
    wiki: "https://fr.wikipedia.org/wiki/Marc_Simoncini",
  },
  {
    id: InvestorID.ANDRE,
    name: "Delphine André",
    wiki: "https://fr.wikipedia.org/wiki/Delphine_Andr%C3%A9",
  },
  {
    id: InvestorID.LARCH,
    name: "Éric Larchevêque",
    age: 47,
    profession: "Ingénieur",
    companies: ["Ledger"],
    wiki: "https://fr.wikipedia.org/wiki/%C3%89ric_Larchev%C3%AAque",
    intro:
      "Quand on est entrepreneur, finalement il n'y a pas de chiffre, il n'y a pas d'objectif, c'est juste vivre cette aventure extraordinaire, c'est ça qui contribue à être heureux et à passer des moments magnifiques.",
  },
  {
    id: InvestorID.NADIR,
    name: "Jean-Pierre Nadir",
    wiki: "https://fr.wikipedia.org/wiki/Jean-Pierre_Nadir",
  },
  {
    id: InvestorID.BOURB,
    name: "Anthony Bourbon",
    wiki: "https://fr.wikipedia.org/wiki/Anthony_Bourbon",
  },
  {
    id: InvestorID.CHEVA,
    name: "Isabèle Chevalier",
  },
];
