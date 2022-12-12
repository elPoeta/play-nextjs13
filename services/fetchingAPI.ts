import { APIResponse } from "../types/apiType";
import { Character } from "../types/character";
import { Episode } from "../types/episode";
import { Location } from "../types/location";
import { BASE_API_URL } from "../utils/constants";

export const getCharacters = async ({ page }: { page: string }) => {
  const response = await fetch(`${BASE_API_URL}/character/?page=${page}`);
  const json: APIResponse = await response.json();
  return json;
};

export const getCharacter = async ({ id }: { id: string }) => {
  const response = await fetch(`${BASE_API_URL}/character/${id}`);
  const json: Character = await response.json();
  return json;
};

export const getEpisode = async ({ id }: { id: string }) => {
  const response = await fetch(`${BASE_API_URL}/episode/${id}`);
  const json: Episode = await response.json();
  return json;
};

export const getLocation = async ({ id }: { id: string }) => {
  const response = await fetch(`${BASE_API_URL}/location/${id}`);
  const json: Location = await response.json();
  return json;
};
