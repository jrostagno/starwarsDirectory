/* eslint-disable @typescript-eslint/no-explicit-any */
export interface StarWarsResponse {
  config: any;
  headers: any;
  data: StarWarsInfoAPIResponses[];
  request: any;
}

export interface StarWarsInfoAPIResponses {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: Gender;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: Date;
  edited: Date;
  url: string;
}

export interface StarWarsInfoApiFullResponses extends StarWarsInfoAPIResponses {
  homewordName: string;
  speciesName: string;
}

export enum Gender {
  Female = "female",
  Hermaphrodite = "hermaphrodite",
  Male = "male",
  NA = "n/a",
  None = "none",
}
export interface StarWarsPLanetAPIResponse {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
}
export interface StarWarsSpeciesAPIResponse {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: null;
  language: string;
  people: string[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
}
