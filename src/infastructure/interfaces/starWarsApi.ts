/* eslint-disable @typescript-eslint/no-explicit-any */
export interface StarWarsDEVAPIResponse {
  count: number;
  next: string;
  previous: null;
  results: Result[];
}

//name, homeworld name, and species name.

export interface Result {
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

export enum Gender {
  Female = "female",
  Male = "male",
  NA = "n/a",
}

export interface SearchPeopleAPIResponse {
  count: number;
  next: null;
  previous: null;
  results: PeopleResultSearch[];
}

export interface PeopleResultSearch {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: any[];
  vehicles: string[];
  starships: any[];
  created: Date;
  edited: Date;
  url: string;
}
export interface PlanetsSearchAPIResponse {
  count: number;
  next: null;
  previous: null;
  results: ResultPlanets[];
}

export interface ResultPlanets {
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

export interface SpeciesAPIResponse {
  count: number;
  next: string;
  previous: null;
  results: SpeciesResponse[];
}

export interface SpeciesResponse {
  name: string;
  classification: string;
  designation: Designation;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: null | string;
  language: string;
  people: string[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
}

export enum Designation {
  Reptilian = "reptilian",
  Sentient = "sentient",
}

export interface PlanetsAPIResponses {
  count: number;
  next: string;
  previous: null;
  results: PlanetResponse[];
}

export interface PlanetResponse {
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

export interface HomewordAPIResponses {
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
