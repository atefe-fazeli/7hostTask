export const VERSION = `api/v3/`;

export const GetCurrencyListURL = (pageNumber) =>
  VERSION +
  `coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${pageNumber}&sparkline=false`;
