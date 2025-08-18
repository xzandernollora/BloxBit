const BASE_URL = "https://api.coingecko.com/api/v3";

export async function fetchCoins(page: number = 1) {
  // add page param with default 1
  try {
    const res = await fetch(
      `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch coins");
    }
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}
