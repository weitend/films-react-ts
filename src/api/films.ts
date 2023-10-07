import { token } from "./token";

export async function getFilmDescription(id?: string) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const fetchUrl = `https://api.themoviedb.org/3/movie/${id}?language=ru-RU`;
  try {
    const response = await fetch(fetchUrl, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getFilmCredentionals(id?: string) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const fetchUrl = `https://api.themoviedb.org/3/movie/${id}/credits?language=ru-RU`;
  try {
    const response = await fetch(fetchUrl, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
