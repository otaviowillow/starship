import { StoreApi, create } from 'zustand';
import { Starship } from '../models/Starship';

interface Comment {
  name: string;
  comment: string;
}

interface FavoritesStore {
  favorites: Starship[];
  comments: Comment[];
  actions: {
    toggleFavorite: (ship: Starship) => void;
    setComment: (comment: Comment) => void;
  };
}

const useFavoritesStore = create<FavoritesStore>((set: StoreApi<FavoritesStore>['setState']) => ({
  favorites: [],
  comments: [],
  actions: {
    toggleFavorite: (currentStarship) =>
      set((state) => ({
        favorites: state.favorites.some((starship) => starship.name === currentStarship.name) ? state.favorites.filter((starship) => starship.name !== currentStarship.name) : [...state.favorites, currentStarship],
        comments: state.comments.filter((comment) => comment.name !== currentStarship.name),
      })),
    setComment: (comment) =>
      set((state) => ({
        comments: state.comments.some((c) => c.name === comment.name) ? state.comments.map((c) => (c.name === comment.name ? comment : c)) : [...state.comments, comment],
      })),
  },
}));

export const useComments = () => useFavoritesStore((state) => state.comments);

export const useFavoriteStarships = () => useFavoritesStore((state) => state.favorites);

export const useFavoriteActions = () => useFavoritesStore((state) => state.actions);
