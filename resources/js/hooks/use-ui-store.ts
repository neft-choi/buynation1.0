import { ReactNode } from 'react';
import { create } from 'zustand';

interface UiState {
  search:string;
  categoryDrawerOpen: boolean;
  clickSearchBar: boolean;
  topButtonVisible: boolean;
  shortSearch:boolean;
  bottomNavHeight: number;
  container:HTMLBodyElement;
  updateBottomNavHeight: () => void;
  setShortSearch:(v:boolean)=>void;
  setSearch:(v:string)=>void;
  setCategoryDrawerOpen: (v: boolean | ((prev: boolean) => boolean)) => void;
  setClickSearchBar: (v: boolean | ((prev: boolean) => boolean)) => void;
  setTopButtonVisible: (v: boolean) => void;
  lockMainScroll: () => void;
  unlockMainScroll: () => void;
}

export const useUiStore = create<UiState>((set,get) => ({
  categoryDrawerOpen: false,
  clickSearchBar: false,
  topButtonVisible: false,
  search:'',
  shortSearch:false,
  bottomNavHeight: 0,
  container: document.querySelector('body') as HTMLBodyElement,
  updateBottomNavHeight: () => {
    const nav = document.querySelector('#bottomNavigation') as HTMLElement | null;
    if (nav instanceof HTMLElement) {
      set({ bottomNavHeight: nav.offsetHeight });
    } else {
      set({ bottomNavHeight: 0 });
    }
  },
  setShortSearch:(v:boolean)=>set({shortSearch:v}),
  setSearch: (v: string) => set({ search: v }),
   setCategoryDrawerOpen: (v) =>
    set((state) => {
      const next = typeof v === "function" ? v(state.categoryDrawerOpen) : v;

      // ★ 스크롤 제어
      if (next) {
        get().lockMainScroll();
      } else {
        get().unlockMainScroll();
      }

      return {
        categoryDrawerOpen: next,
        clickSearchBar: false,
      };
    }),

  setClickSearchBar: (v) =>
    set((state) => {
      const next = typeof v === "function" ? v(state.clickSearchBar) : v;

      // ★ 스크롤 제어
      if (next) {
        get().lockMainScroll();
      } else {
        get().unlockMainScroll();
      }

      return {
        clickSearchBar: next,
        categoryDrawerOpen: false,
      };
    }),

  setTopButtonVisible: (v) => set({ topButtonVisible: v }),

  lockMainScroll: () => {
    get().container.classList.add('overflow-hidden');
  },

  unlockMainScroll: () => {
    get().container.classList.remove('overflow-hidden');
  },

}));
