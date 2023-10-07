import { token } from "./token";

export async function getSearchFilms(query: string) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&language=ru-RU`;
  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (err) {
    console.error(err);
  }
}
