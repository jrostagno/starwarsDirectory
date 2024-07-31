/* eslint-disable @typescript-eslint/no-explicit-any */
import { starWarApi } from "../config/api/starWarsAPI";
import { StarWarSpecies } from "../domain/entities/startWards";
import { SpeciesAPIResponse } from "../infastructure/interfaces/starWarsApi";
import {} from "../infastructure/interfaces/starWarsInfoApi";
import { StarWarMapper } from "../infastructure/mappers/starWarsPeople.mapper";

export const getAllStarWarSpecies = async (
  page: number,
  searchValue?: string
): Promise<StarWarSpecies[]> => {
  try {
    const { data } = await starWarApi.get<SpeciesAPIResponse>(
      searchValue ? `species?search=${searchValue}` : `species?page=${page}`
    );

    return data.results.map((planet) =>
      StarWarMapper.fromStarWarAPItoStarWarSpeciesEntity(planet)
    );
  } catch (error) {
    throw new Error("Error while getting planets");
  }
};
