export const enum Status {
  ALIVE = "Alive",
  DEAD = "Dead",
  UNKNOWN = "unknown",
}

export const enum Gender {
  MALE = "Male",
  FEMALE = "Female",
}

export const enum Species {
  HUMAN = "Human",
  ALIEN = "Alien",
  HUMANOID = "Humanoid",
  ROBOT = "Robot",
  POOPYBUTTHOLE = "Poopybutthole",
  MYTHOLOGICAL_CREATURE = "Mythological Creature",
  ANIMAL = "Animal",
  CRONENBERG = "Cronenberg",
  DISEASE = "Disease",
}
export type OriginLocation = {
  name: string;
  url: string;
};
export type Character = {
  id: number;
  name: string;
  status: Status;
  species: Species;
  type: string;
  gender: Gender;
  origin: OriginLocation;
  location: OriginLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
};
