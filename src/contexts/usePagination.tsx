import { StoreApi, create } from 'zustand';

interface PaginationStore {
  currentPage: number;
  actions: {
    setPreviousPage: () => void;
    setNextPage: () => void;
  };
}

const usePaginationStore = create<PaginationStore>(
  (set: StoreApi<PaginationStore>['setState']): PaginationStore => ({
    currentPage: 1,
    actions: {
      setPreviousPage: () =>
        set((state) => ({
          currentPage: Math.max(1, state.currentPage - 1),
        })),
      setNextPage: () =>
        set((state) => ({
          currentPage: state.currentPage + 1,
        })),
    },
  }),
);

export const useCurrentPage = () => usePaginationStore((state) => state.currentPage);

export const usePaginationActions = () => usePaginationStore((state) => state.actions);
