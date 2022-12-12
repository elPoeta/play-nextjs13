import { type } from "os";
import { APIResponse } from "../types/apiType";
import { Character } from "../types/character";
import { Episode } from "../types/episode";
import { Location } from "../types/location";
import { BASE_API_URL } from "../utils/constants";

type DataByPageParams = {
  page: string;
  path: string;
};

type DataParams = {
  id: string;
  path: string;
};
export const getDataByPage = async ({ page, path }: DataByPageParams) => {
  const response = await fetch(`${BASE_API_URL}/${path}/?page=${page}`);
  const json: APIResponse = await response.json();
  return json;
};

export const getData = async ({ id, path }: DataParams) => {
  const response = await fetch(`${BASE_API_URL}/${path}/${id}`);
  const json: Character | Episode | Location = await response.json();
  return json;
};
