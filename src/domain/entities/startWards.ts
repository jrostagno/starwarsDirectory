export interface StarWarPeople {
  id: number;
  name: string;
  species: string[];
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  homeworld: string;
  homeword_name: string;
  spcies_name: string;
  height: string;
  url: string;
}

export interface StarWarPlanets {
  name: string;
  climate: string;
  diameter: string;
  population: string;
  terrain: string;
  gravity: string;
}

export interface StarWarSpecies {
  average_height: string;
  lifespan: string;
  name: string;
  designation: string;
  language: string;
}
