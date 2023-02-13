export interface iOffer {
  from: string;
  value: number;
  interest: number;
  note?: string;
}

export interface iCompany {
  title: string;
  description: string;
  url: string;
  instagram?: string;
  season: number;
  episode?: number;
  invested?: boolean;
  offers?: iOffer;
}
