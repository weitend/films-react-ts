import { token } from "./token";

export async function getAccount(id: number) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const url = `https://api.themoviedb.org/3/account/${id}`;
  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (err) {
    console.error(err);
  }
}

export async function getFavourites(id: string) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const url = `https://api.themoviedb.org/3/account/${id}/favorite/movies?language=ru-RU`;
  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (err) {
    console.error(err);
  }
}

interface FavouriteBody {
  favorite: boolean;
  media_id: number;
  media_type: string;
}

export async function changeFavourite(id: string, body: FavouriteBody) {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  };

  const url = `https://api.themoviedb.org/3/account/${id}/favorite`;
  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (err) {
    console.error(err);
  }
}
