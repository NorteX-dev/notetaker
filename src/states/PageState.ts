import { create } from "zustand";

export interface PageState {
	pageId: string;
	setPageId: (pageId: string) => void;
}

export const usePageState = create<PageState>((set) => ({
	pageId: "",
	setPageId: (pageId: string) => set({ pageId }),
}));
