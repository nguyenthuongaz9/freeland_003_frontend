import { create } from 'zustand';

interface FilterState {
    brandId: string | null;
    categoryId: string | null;
    selectedSort: string;
    page: number;
    setFilters: (filters: Partial<FilterState>) => void;
    setPage: (page: number | ((prev: number) => number)) => void;
    setSelectedSort: (sort: string) => void;
}

export const useProductFilterStore = create<FilterState>((set) => ({
    brandId: null,
    categoryId: null,
    selectedSort: 'id,desc',
    page: 1,
    setFilters: (filters) => set((state) => ({ ...state, ...filters })),
    setPage: (page) => set((state) => ({ page: typeof page === 'function' ? page(state.page) : page })),
    setSelectedSort: (selectedSort) => set({ selectedSort }),
}));
