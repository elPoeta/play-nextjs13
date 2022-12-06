import { Character } from "./character";
import { Episode } from "./episode";
import { Location } from "./location";

export type Info = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

export type APIResponse = {
  info: Info;
  results: Character[] | Episode[] | Location[];
};
