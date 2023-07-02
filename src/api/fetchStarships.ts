import { StarshipResponse } from '../models/StarshipResponse';

export async function fetchStarships({ page }: { page: number }): Promise<StarshipResponse> {
  return (await fetch(`https://swapi.dev/api/starships?page=${page}`)).json();
}
