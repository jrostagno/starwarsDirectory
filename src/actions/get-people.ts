/* eslint-disable @typescript-eslint/no-explicit-any */
import { starWarApi } from "../config/api/starWarsAPI";
import { StarWarPeople } from "../domain/entities/startWards";
import { StarWarsDEVAPIResponse } from "../infastructure/interfaces/starWarsApi";
import {
  StarWarsInfoApiFullResponses,
  StarWarsInfoAPIResponses,
  StarWarsPLanetAPIResponse,
  StarWarsSpeciesAPIResponse,
} from "../infastructure/interfaces/starWarsInfoApi";
import { StarWarMapper } from "../infastructure/mappers/starWarsPeople.mapper";

export const getAllStarWarPeople = async (
  page: number,
  searchValue?: string
): Promise<StarWarPeople[]> => {
  try {
    const { data } = await starWarApi.get<StarWarsDEVAPIResponse>(
      searchValue ? `people?search=${searchValue}` : `people?page=${page}`
    );

    const caracters = data.results;
    const homewordPromises = data.results.map(
      (info: StarWarsInfoAPIResponses) => {
        if (info.homeworld) {
          return starWarApi.get<StarWarsPLanetAPIResponse>(info.homeworld);
        } else {
          return [];
        }
      }
    );

    const speciesPromises = data.results.map(
      (info: StarWarsInfoAPIResponses) => {
        if (info.species) {
          return starWarApi.get<StarWarsSpeciesAPIResponse>(info.species[0]);
        } else {
          return [];
        }
      }
    );

    const homeWordAPIResponses = await Promise.all(homewordPromises);
    const homeWordAPIResponsesDATA = homeWordAPIResponses.map(
      (home: any) => home.data.name
    );

    const speciesAPIResponses = await Promise.all(speciesPromises);
    const speciesAPIResponsesDATA = speciesAPIResponses.map(
      (home: any) => home.data.name
    );

    const unifiedAPIResponses = (
      characterArray: any,
      homewordArray: any,
      speciesArray: any
    ) => {
      const unifiedAPI: StarWarsInfoApiFullResponses[] = [];

      characterArray.forEach((element: any) => {
        unifiedAPI.push(element);
      });

      homewordArray.forEach((homeword: string, index: number) => {
        unifiedAPI[index] = { ...unifiedAPI[index], homewordName: homeword };
      });

      speciesArray.forEach((specie: string, index: number) => {
        unifiedAPI[index] = { ...unifiedAPI[index], speciesName: specie };
      });

      return unifiedAPI;
    };

    return unifiedAPIResponses(
      caracters,
      homeWordAPIResponsesDATA,
      speciesAPIResponsesDATA
    ).map((people) =>
      StarWarMapper.fromStarWarAPItoStarWarPeopleEntity(people)
    );
  } catch (error) {
    throw new Error("Error while getting people");
  }
};
