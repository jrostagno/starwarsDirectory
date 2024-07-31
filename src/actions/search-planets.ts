/* eslint-disable @typescript-eslint/no-explicit-any */
import { starWarApi } from "../config/api/starWarsAPI";
import { StarWarPlanets } from "../domain/entities/startWards";
import { PlanetsAPIResponses } from "../infastructure/interfaces/starWarsApi";
import {} from "../infastructure/interfaces/starWarsInfoApi";
import { StarWarMapper } from "../infastructure/mappers/starWarsPeople.mapper";

export const getAllStarWarPlanets = async (
  page: number,
  searchValue?: string
): Promise<StarWarPlanets[]> => {
  try {
    const { data } = await starWarApi.get<PlanetsAPIResponses>(
      searchValue ? `planets?search=${searchValue}` : `planets?page=${page}`
    );

    return data.results.map((planet) =>
      StarWarMapper.fromStarWarAPItoStarWarPlanetEntity(planet)
    );
  } catch (error) {
    throw new Error("Error while getting planets");
  }
};
