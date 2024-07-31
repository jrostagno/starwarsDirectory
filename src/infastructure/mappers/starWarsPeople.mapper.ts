import {
  StarWarPeople,
  StarWarPlanets,
  StarWarSpecies,
} from "../../domain/entities/startWards";
import { PlanetResponse, SpeciesResponse } from "../interfaces/starWarsApi";

import { StarWarsInfoApiFullResponses } from "../interfaces/starWarsInfoApi";

export class StarWarMapper {
  static fromStarWarAPItoStarWarPeopleEntity(
    data: StarWarsInfoApiFullResponses
  ): StarWarPeople {
    return {
      id: Number(data.url[data.url.length - 1]),
      name: data.name,
      species: data.species,
      mass: data.mass,
      hair_color: data.hair_color,
      skin_color: data.skin_color,
      eye_color: data.eye_color,
      homeworld: data.homeworld,
      homeword_name: data.homewordName,
      spcies_name: data.speciesName,
      height: data.height,
      url: data.url,
    };
  }

  static fromStarWarAPItoStarWarPlanetEntity(
    data: PlanetResponse
  ): StarWarPlanets {
    return {
      name: data.name,
      climate: data.climate,
      diameter: data.diameter,
      population: data.population,
      terrain: data.terrain,
      gravity: data.gravity,
    };
  }

  static fromStarWarAPItoStarWarSpeciesEntity(
    data: SpeciesResponse
  ): StarWarSpecies {
    return {
      average_height: data.average_height,
      lifespan: data.average_lifespan,
      name: data.name,
      designation: data.designation,
      language: data.language,
    };
  }
}
