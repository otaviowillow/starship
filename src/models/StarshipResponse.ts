import { Starship } from './Starship';

export interface StarshipResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Starship[];
}
